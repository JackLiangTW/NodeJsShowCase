var config=require("config");
var express=require("express");
var request=require("request");
var bodyParser=require("body-parser");

var app=express();
app.use(bodyParser.json());

const PAGE_TOKEN=config.get('devConfig.pageAccessToken');
const VERIFY_TOKEN_0=config.get('devConfig.verifyToken');

app.get('/webhook', (req, res) => {
  
    //const VERIFY_TOKEN = VERIFY_TOKEN_0;
    if(req.query['hub.mode'] === 'subscribe' &&req.query['hub.verify_token'] ===VERIFY_TOKEN_0){
      console.log("Sc webhook");
      res.status(200).send(req.query['hub.challenge']);
    }else{
      console.error("Faild");
      res.sendStatus(403);
    }
    
  })
app.post('/webhook', (req, res) => {  
    
    // Parse the request body from the POST
    let body = req.body;
  
    // Check the webhook event is from a Page subscription
    if (body.object === 'page') {
  
      // Iterate over each entry - there may be multiple if batched
      body.entry.forEach(function(entry) {
        var pageID= entry.id;
        var timeOFevent=entry.time;
        
        entry.messaging.forEach(function(event){
          if(event.message){
            receivedMessage(event); 
            console.log(event);
          }else{
            console.log("unknown");
          }
        });     
      });
      // Return a '200 OK' response to all events
      res.status(200).send('EVENT_RECEIVED');
  
    } else {
      // Return a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
    
  });
  function receivedMessage(event){
    var senderID=event.sender.id;
    var recipID=event.recipient.id;
    var timeOfmsg=event.timestamo;
    var message=event.message;
    var messageId=message.mid;//-每一則訊息的id
    var messageText=message.text;
    var messageAttach=message.attachments;//-可能有附加訊息 例如圖片..
    if(messageText){
      switch(messageText){
        case "HI":
          sendMsg(senderID,"HI HI");break;
        case "我":
          sendMsg(senderID,"我是機器人");break;
        case "A":
          sendMsg(senderID,"回答AA");break;
        case "P":
          sendMsg(senderID,"回答PP");
          //sendOneImg(senderID);
          sendAllImg(senderID);
          break;
      }
    }else if(messageAttach){
      console.log("Attached");
    }
  }
  function sendOneImg(ids){//--隨機傳送一張
    request({
      uri:'https://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/2',
       headers: {'user-agent': 'node.js'},//--沒有放header會 錯誤403
       method: 'GET',
     },function(error,response,body){
         var data=JSON.parse(body);        
         var index=Math.floor(Math.random()*data.results.length);
         var urls=data.results[index].url;          
         var msg={
             recipient:{
               id:ids
          },
          message:{
            attachment:{
                 type:'image',
                 payload:{url:urls}
               }
             }
           }
         callSendAPI(msg);             
     });
  }
  function sendAllImg(ids){//--傳全部api的圖
    var randomnb=Math.floor(Math.random()*7);//--1-7  
    var urii='https://gank.io/api/data/%E7%A6%8F%E5%88%A9/100/'+randomnb;
     //--https://i.imgur.com/KyRhyjb.jpg
    request({
     //uri:'https://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/3',
     uri:urii,
      headers: {'user-agent': 'node.js'},
      method: 'GET',
    },function(error,response,body){
        var data=JSON.parse(body);        
        var index=Math.floor(Math.random()*data.results.length);
        //var urls=data.results[index].url;    
        for(var i=index;i<index+5;i++){
          if(i>99)i=i-99;
          var urls=data.results[i].url;    
          var msg={
            recipient:{
              id:ids
            },
            message:{
              attachment:{
                type:'image',
                payload:{url:urls}
              }
            }
          }
          callSendAPI(msg);      
        }
        
    });
  }
  function sendMsg(ids,texts){
    //var myword="";
    var nsgdd={
      recipient:{
        id:ids
      },
      message:{
        text:texts
      }
    };
    callSendAPI(nsgdd);
  }
  function callSendAPI(msgg) {
    request({
      uri:"https://graph.facebook.com/v2.6/me/messages",
      qs: { access_token: PAGE_TOKEN },
      method: 'POST',
      json:msgg
    },function(error,response,body){
      if(!error&&response.statusCode==200){
        console.log("Sus");
      }
      else{
        console.log("ERR");
      }
    });
  };
  /*
  function callSendAPI(sender_psid, response) {
    console.log("4");
    // Construct the message body
    let request_body = {
      "recipient": {
        "id": sender_psid
      },
      "message": response
    }
  
    // Send the HTTP request to the Messenger Platform
    request({
      "uri": "https://graph.facebook.com/v2.6/me/messages",
      "qs": { "access_token": PAGE_TOKEN },
      "method": "POST",
      "json": request_body
    }, (err, res, body) => {
      if (!err) {
        console.log('message sent!');
        console.log("5");
      } else {
        console.error("Unable to send message:" + err);
      }
    }); 
  }
  */
  app.listen(4000,function(){
    console.log("LS4000");
  });