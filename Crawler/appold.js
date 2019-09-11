var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    fs.mkdir('./creats/', { recursive: true }, (err) => {if (err) throw err;});//--建立資料夾
    //request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    request(uri).pipe(fs.createWriteStream('./creats/'+filename)).on('close', callback);//--下載圖片
  });
};


download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
  console.log('done');
});


request({
  uri:'https://nba.udn.com/nba/index',
  method:'GET'
},function(error,response,body){
  if(error){
    return;
  }
 // console.log(body);
  var $=cheerio.load(body);
  var results=[];
  //var titles=$('#header_body .udn_logo img');
  var titles=$('img');
  for(var i=0;i<titles.length;i++){
    results.push({title:titles[i].attribs});
    console.log(titles[i].attribs);
  }
  console.log(results);
  fs.writeFileSync('./creats/url.json',JSON.stringify(results));
  //--建立一個        位置     檔名          文字化       資料

});
