'use strict';//--ES5嚴謹模式
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 8080;
const INDEX = path.join(__dirname, 'index.html');
const BACK = path.join(__dirname, 'back.html');
var app = express();
/*
const server = app
  .use('/',(req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
*/
app.use(express.static(path.join(__dirname, 'public')));//---html可以引入public的資源(js/css/img..)
app.get('/',(req, res) => res.sendFile(INDEX) );
app.get('/goback',(req, res) => res.sendFile(BACK) );
const server=app.listen(PORT, function () {
    console.log(`Listening on ${ PORT }`);
});
const io = socketIO(server);

var clients=0;
var cookiePlayers=[];//--cookie資料  名字,分數,部門代號,cookieID,socket.id
var Players=[];//--id  name  score  playstage 部門代號
var PlayerWaits=[];//--等待配對中的玩家
var IsGameing=[];//--正在對戰的玩家
var SCids=[];//-- array.length-1   亂數ID
var refuse_play=false;//--玩家能否對戰遊玩
io.on("connection",function(socket){//---socket io監聽 connection  當client/User連線    
    
    socket.emit('newclientconnect',{ description: 'Go to back',refuse_play:refuse_play});//--登入後台
    socket.on("gobacks",function(msg){            
        socket.join('goback');     
    });    
    socket.on("send_msg",function(msg){   
        io.emit("send_msg",{say:msg.say}); 
    });
    socket.on("stop_fight",function(msg){//--開啟/關閉 開放對戰        
        refuse_play=msg.refuse_play;  
        io.emit("stop_fight",{refuse_play:refuse_play}); 
    });
    socket.on("GiveMeData",function(){//-給cookie data到後台
        io.to('goback').emit('checkdatas_back',cookiePlayers);
    });
    socket.on("Checkname",function(msg){//--新登入玩家 傳自身id...
        var Has=false;        
        /*舊版 判斷ID是否重複
        for(var i=0;i<Players.length;i++){
            if(Players[i]==null){continue;}
            if(msg.name==Players[i][1]){//---玩家ID取名重複
        */
        for(var i=0;i<cookiePlayers.length;i++){
            if(cookiePlayers[i]==null){continue;}
            if(msg.name==cookiePlayers[i][0]){//---玩家ID取名重複
                //socket.broadcast.to(0).emit('Namefalse');
                io.to(socket.id).emit('Namefalse');
                Has=true;
                break;
            }
        }
        if(Has==false){//--成功取名
            clients++;
            var data0=[clients-1,socket.id];
            SCids.push(data0);
            
            var putin=[clients,msg.name,msg.score,msg.playstage,msg.partnb];//-player data
            var nnb=cookiePlayers.length;
            var CookieID="CK"+nnb;
            var cookieputin=[msg.name,msg.score,msg.partnb,CookieID,socket.id];//-cookie data
            Players.push(putin);
            cookiePlayers.push(cookieputin);
            io.to(socket.id).emit('NameTrue',{id:clients,cookie:CookieID});            

            io.emit("checkdatas",Players);
            io.to('goback').emit('checkdatas_back',cookiePlayers);
            io.to('goback').emit('message',{stg:0,name:msg.name});//--向後台發送 登入資訊
            console.log(Players);
        }
    });
    socket.on("CookieLogin",function(msg){//--新登入玩家 傳自身id...            
            var oldpoints=0;
            var oldpartnb=0;
            var Can=false;
            var HasLogin=false;
            var myGameNAme='';
            for(var i=0;i<cookiePlayers.length;i++){//--判斷cookie是否記錄過 cookieID
                if(cookiePlayers[i]!=null){
                    if(cookiePlayers[i][3]==msg.name){
                        Can=true;                                 
                        oldpoints=cookiePlayers[i][1];
                        oldpartnb=cookiePlayers[i][2];
                        myGameNAme=cookiePlayers[i][0];
                        console.log("C0");
                    }
                }                
            }
            if(myGameNAme!=''){
                for(var i=0;i<Players.length;i++){
                    if(Players[i]==null){continue;}
                    if(myGameNAme==Players[i][1]){
                        HasLogin=true;
                    }
                }
            }            
            if(Can&&HasLogin==false){//--有紀錄
                clients++;
                var data0=[clients-1,socket.id];
                SCids.push(data0);
                io.to(socket.id).emit('NameTrue_cookie',{id:clients,name:myGameNAme,point:oldpoints,partnb:oldpartnb});            
                var putin=[clients,myGameNAme,oldpoints,'false',oldpartnb];            
                Players.push(putin);            
                io.emit("checkdatas",Players);
                io.to('goback').emit('checkdatas_back',cookiePlayers);
                io.to('goback').emit('message',{stg:0,name:myGameNAme});//--向後台發送 登入資訊
                console.log("C1");
            }else if(HasLogin){//--重複登入
                io.to(socket.id).emit('NameTrue_cookie_false',{stg:1});            
            }else{
                io.to(socket.id).emit('NameTrue_cookie_false',{stg:2});            
            }
            console.log("CookieIn");
            console.log(Players);
            console.log(cookiePlayers);
    });    
    socket.on('delete_player', function(msg){//--後台刪除/剔除 玩家資料                
        var idss='';
        for(var s=0;s<cookiePlayers.length;s++){
            if(cookiePlayers[s]!=null){
                if(cookiePlayers[s][0]==null){continue;}
                else if(cookiePlayers[s][0]==msg.name){
                    idss=cookiePlayers[s][4];
                    delete cookiePlayers[s];                
                }
            }            
        }
        console.log(idss);
        io.to(idss).emit('refresh'); 
        console.log(cookiePlayers);
        console.log(Players);
    });
    socket.on('disconnect', function(){//---如果 client離線/刷新(sever自動偵測,client不用送來)            
        console.log(socket.id);
        console.log(cookiePlayers);        
        for(var s=0;s<PlayerWaits.length;s++){//--排隊對戰中重整
            if(PlayerWaits[s]!=null){
                if(PlayerWaits[s][1]==null){continue;}
                else if(PlayerWaits[s][1].includes(socket.id)){
                    delete PlayerWaits[s];                
                }
            }            
        }
        for(var a=0;a<IsGameing.length;a++){//--對戰中直接斷線離開/重整
            if(IsGameing[a]==null){continue;}
            else if(IsGameing[a].includes(socket.id)){
                if(IsGameing[a][0]==socket.id){
                    io.to(IsGameing[a][1]).emit('EnermyOut');
                }
                else if(IsGameing[a][1]==socket.id){
                    io.to(IsGameing[a][0]).emit('EnermyOut');
                }
                delete IsGameing[a];                
            }
        }
        for(var i=0;i<SCids.length;i++){//--大廳中斷線離開/重整
            if(SCids[i][1]==socket.id){
                var sts=SCids[i][0];
                sts=Players[sts][1];//--玩家名字              
                io.to('goback').emit('message',{stg:2,name:sts});
                delete Players[SCids[i][0]];//--刪除 該筆資料
                io.emit("deleteP",{ids:SCids[i][0]});
            }
        }        
        //console.log(Players);
    });

    socket.on('Findplyer', function(msg){//--加入玩家配對 資料
        // console.log(msg);
        // console.log(SCids);
        for(var i=0;i<SCids.length;i++){
            if(msg.ids==SCids[i][0]){
                PlayerWaits.push([msg.ids,SCids[i][1]]);
                break;
            }
        }
        //console.log(PlayerWaits);        
    });
    socket.on('CancelFind', function(msg){//--取消配對
        for(var i=0;i<PlayerWaits.length;i++){
            if(PlayerWaits[i]==null){continue;}
            if(msg.ids==PlayerWaits[i][0]){
                delete PlayerWaits[i];//--刪除 該筆資料
                break;
            }
        }
        //console.log(PlayerWaits);  
    });
    
    socket.on('Offline', function(msg){//--進行遊戲 選擇答案
        io.to(msg.MyEN).emit('Offline',{myid:socket.id});//,{ANS:msg.MyANS,STG:msg.Stg}
    });
    socket.on('PlayerChoosed', function(msg){//--進行遊戲 選擇答案
        io.to(msg.MyEN).emit('EnermyANS',{ANS:msg.MyANS,STG:msg.Stg});
    });
    socket.on('MyScoreToEnermy', function(msg){//--傳給敵人 結算此局分數
        io.to(msg.MyEN).emit('EnermySCS',{Plus:msg.PlusSC,Alls:msg.AllSC});
    });
    socket.on('UpdateMyScore', function(msg){//--完成遊戲 更新分數

        DeleteIsGameList(socket.id);//--玩家從對戰中List移除
        
        for(var i=0;i<Players.length;i++){
            if(Players[i]==null){continue;}
            if(msg.ids==Players[i][0]){//---玩家ID
                updateCookieData(Players[i][1],msg.newSC,1);//--更新cookie data分數
                var val=msg.newSC-Players[i][2];
                io.to('goback').emit('message',{stg:1,name:Players[i][1],score:val});
                Players[i][2]=msg.newSC;//--更新玩家分數                
                break;
            }
        }
        //io.to('goback').emit('checkdatas_back',cookiePlayers);
        io.emit("checkdatas",Players);
    });
    var setIn=setInterval(MatchPlayers,100);
    function MatchPlayers(){//--配對玩家        
        var has=[];//--PlayerWaits 非空物件的是哪幾個
        for(var i=0;i<PlayerWaits.length;i++){
            if(PlayerWaits[i]==null){continue;}
            else{has.push([i]);}
        }
        if(has.length>=2){
            //--第一筆 和第二筆 一起配對 --> 然後刪除 --> 再跑一次interval
            var aa=PlayerWaits[has[1]][0]+1;
            var bb=PlayerWaits[has[0]][0]+1;
            var nbs=range(103,5);
            IsGameing.push([PlayerWaits[has[0]][1],PlayerWaits[has[1]][1]]);
            io.to(PlayerWaits[has[0]][1]).emit('GameStart',{ids:aa,longid:PlayerWaits[has[1]][1],nb:nbs});
            io.to(PlayerWaits[has[1]][1]).emit('GameStart',{ids:bb,longid:PlayerWaits[has[0]][1],nb:nbs});
            delete PlayerWaits[has[0]];
            delete PlayerWaits[has[1]];
        }
    }
    function range(allnb,ctn){//--隨機排列 總共allnb個 隨機排列 取前ctn
        //var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]//,9,10,11,12,13,14];        
        var arr=[];
        for(var a=0;a<allnb;a++){
            arr.push(a);
        }
        var news=[];
        arr.sort(function(){return 0.5-Math.random();}).slice(0,10);
        for(var i=0;i<ctn;i++){
            news.push(arr[i]);
        }
        return news;
        
    }
    function DeleteIsGameList(id){
        for(var a=0;a<IsGameing.length;a++){//--對戰中直接斷線離開/重整
            if(IsGameing[a]==null){continue;}
            else if(IsGameing[a].includes(id)){                
                delete IsGameing[a];                
            }
        }
    }
    function updateCookieData(names,points,stg){//--更新 cookie data分數欄位 
        
        for(var i=0;i<cookiePlayers.length;i++){
            if(cookiePlayers[i]!=null){
                if(cookiePlayers[i][0]==names){
                    //console.log("Update Cookie");
                    if(stg==1){//--修改成績
                        cookiePlayers[i][1]=points;
                    }
                    
                }
            }            
        } 
        console.log(cookiePlayers);
    }

});
