var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio');
const phantom = require('phantom');
const puppeteer= require('puppeteer');
var fkname='creats910-2';
var Ig_url='https://www.instagram.com/vickybaby61/?hl=it';
var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    fs.mkdir(`./${fkname}/`, { recursive: true }, (err) => {if (err) throw err;});//--建立資料夾
    //request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    request(uri).pipe(fs.createWriteStream(`./${fkname}/`+filename)).on('close', callback);//--下載圖片
  });
};
function CrawlerNormal(){//--cheer io 靜態抓取
  var localurls='https://twitter.com/?lang=zh-tw'
  request({
    //uri:'https://nba.udn.com/nba/index',
    uri:localurls,
    method:'GET'
  },function(error,response,body){
    if(error){
      return;
    }
  // console.log(body);
    var $=cheerio.load(body);
    var results=[];
    var onlysrc=[];
    //var titles=$('#header_body .udn_logo img');
    var titles=$('img');
    for(var i=0;i<titles.length;i++){
      results.push({title:titles[i].attribs});
      //console.log(titles[i].attribs);
      
      if(titles[i].attribs['src']!= null){
        onlysrc.push(titles[i].attribs['src']);
        //DL_localImg(localurls,titles[i].attribs['src'],i);
      }
    }    
    console.log(results);
    //fs.writeFileSync('./creats/url.json',JSON.stringify(results));
    //--建立一個        位置     檔名          文字化       資料

  });
}

//Craynamic_phantom();
Craynamic_puppeteer();
function Craynamic_puppeteer(){//--puppeteer套件 動態抓取/最好的
  (async () => {
    const browser = await puppeteer.launch({
      headless: false //--code run open browser
    });
    const page = await browser.newPage();
    //await page.goto('https://www.instagram.com/inkyung97/?fbclid=IwAR2OsN1XQxOb3A1W8RRkCxcZxc1-rLekzZG3-Lwp1elAxxBkWJ33VsWwW34');    
    //await page.goto('https://www.instagram.com/ha0yang/?igshid=1qkxhny5jh9a8');
    await page.goto(Ig_url);
    await page.setViewport({width:500, height: 800});//--設定開啟虛擬瀏覽器寬高
    //await autoScroll(page);//--自動滑動
    await autoScroll(page);
    //await page.screenshot({path: 'example.png'});//--擷取畫面成圖片
    await page.screenshot({path: 'example.png',fullPage:true});//--擷取畫面成圖片
    //await page.pdf({path: 'hn.pdf', format: 'A4'});
    //let bodyHTML =await page.$$eval('img', divs => divs.length);

    
    let bodyHTML = await page.$$eval('.KL4Bh img', el => {
      return el.map(e=>e.src);//--抓取所有的img src屬性 return成陣列回去
    });
    
    for(i=0;i<bodyHTML.length;i++){
      DL_httpImg(bodyHTML[i],i);      
    }
    
    
    //await browser.close();

  })();
}
function Craynamic_phantom(){//--phantom套件 動態抓取
  (async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on('onResourceRequested', function(requestData) {
      console.info('Requesting', requestData.url);
    });
  
    const status = await page.open('https://www.facebook.com/1471772763091863/');
    const content = await page.property('content');
    console.log(content);
  
    await instance.exit();
  })();
  
}
async function autoScroll(page){//---劉覽器  自動往下滑
  await page.evaluate(async () => {      
      await new Promise((resolve, reject) => {              
          var totalHeight = 0;
          var distance = 100;
          //var Maxsceonds = 5000;//--秒數
          var CountSec= 0;//--秒數
          var timer = setInterval(() => {                                    
              var scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;
              CountSec += distance;//--秒數              
              //if((totalHeight >= scrollHeight)||(CountSec>=Maxsceonds)){//--加載超過最大值OR秒數超過設定秒數  跳出加載
              if(totalHeight >= scrollHeight){
                  clearInterval(timer);
                  resolve(totalHeight);                                 
              }
          }, 100);
      });
  });
}
function DL_localImg(localurl,objurl,i){//--圖片 不是https (需要知道他的 網域名字)
  var names="dd"+i+".png";
  var downloadurls=localurl+objurl;//--(圖片)相對路徑 加網域 成絕對路徑(https)
  download(downloadurls, names,function(){
    console.log(i);
  });      
}
function DL_httpImg(objurl,i){//--圖片是https 
  var names="dd"+i+".png";
  download(objurl, names,function(){
    console.log(i);
  });      
}


