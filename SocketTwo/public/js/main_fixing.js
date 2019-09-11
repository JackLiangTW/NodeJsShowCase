//--題目 選擇1 選擇2 選擇3 選擇4 答案
var questions=[    
    ["美國的首都是?","紐約","洛杉磯","華盛頓","芝加哥","3"],
    ["澳洲的首都是?","伯斯","坎培拉","墨爾本","雪梨","2"],
    ["西班牙的首都是？","里斯本","巴塞隆納","馬德里","瓦隆西亞","3"],
    ["加拿大的首都是？","坎培拉","渥太華","蒙特婁","多倫多","2"],
    ["葡萄牙的首都是？","馬德里","巴塞隆納","里斯本","波多","3"],
    ["韓國的首都是？","名古屋","平壤","首爾","釜山","3"],
    ["法國的首都是？","凡爾賽","馬賽","巴黎","里昂","3"],
    ["俄羅斯的首都是？","聖彼得堡","莫斯科","基輔","西伯利亞","2"],
    ["德國的首都是？","柏林","漢堡","慕尼黑","科隆","1"],
    ["菲律賓的首都是？","河內","吉隆波","馬尼拉","加洛砍","3"],
    ["馬來西亞的首都是？","曼谷","雅加達","河內","吉隆坡","4"],
    ["泰國的首都是？","德黑蘭","河內","金邊","曼谷","4"],
    ["3張青眼白龍融合成什麼?","青眼3頭龍","3眼青龍","青眼大白龍","青眼究極龍","4"],
    ["下列何者不是神之卡?","天空龍","翼神龍","小小兵","巨神兵","3"],
    ["武騰遊戲脖子掛著甚麼?","千年老木","千年神木","樂高積木","千年積木","4"],
    ["魯夫頭上通常戴者甚麼?","草帽","安全帽","棒球帽","絲襪","1"],
    ["魯夫會用什麼氣?","起床氣","小氣","霸氣","稚氣","3"],
    ["魯夫為甚麼不會游泳?","吃壞肚子","吃了惡魔果實","害羞穿泳裝","他假裝不會","2"],
    ["多拉A夢喜歡吃?","銅鑼燒","銅鑼灣","大阪燒","大麥克","1"],
    ["多拉A夢害怕甚麼?","館長","立法委員","考試","老鼠","4"],
    ["多拉A夢的妹妹是?","小叮嚀","小小兵","小彬彬","小小彬","1"],
    ["多拉A夢的道具有?","任意球","任意門","羅生門","小南門","2"],
    ["柯南最喜歡什麼運動?","鐵人三項","WWE","足球","三級跳遠","3"],
    ["柯南是","橫綱","立法委員","死神","小學生","4"],
    ["阿笠博士是","燒烤店老闆","衝浪冠軍","發明家","恐怖分子","3"],
    ["小蘭是","空手道冠軍","Rap高手","街舞高手","恐怖分子","1"],
    ["天馬流星拳是誰的招式","星矢","孫悟空","魯夫","鳴人","1"],
    ["網基技術總監的名字叫?","Sun","喪","柯智騰","mebaa","3"],
    ["門口互動裝置的動物是","貓","熊","狗","狼","3"],
    ["在公司上網最快是哪一種？","WG_WiFi","WG_WiFi_5Ghz","手機網路","有線網路","4"],
    ["2019成行的員旅地點？","北海道","宿霧","越南","印度","1"],
    ["H2大會議室沒有以下哪個物品","漫畫","卡拉OK","電視","投影機","2"],
    ["2019技術部實習生叫甚麼名子？","楊庭瑄","林琬諭","陳姿瑄","蘇瑜瑄","1"],
    ["公司主機房的房名是","<link>","<Embed>","<nav>","<link/>","4"],
    ["2019七月份的下午茶吃的是","東區粉圓","大方冰品","鮮芋仙","Ice Monster","2"],
    ["下列實習生哪位不是淡江資傳系？","陳姿瑄","沈峻賢","萬政軒","楊庭瑄","3"],
    ["下列哪個不是實習生的英文名字？","Kevin","Sammi","Jerry","Ariel","3"],
    ["公司的YT頻道是","OneMore","WackyBoys","Joeman","理科叔叔","1"],
    ["公司沒有甚麼部門","技術部","外交部","設計部","企劃部","2"],
    ["高雄","發票開獎","發傳單","發大財","發財","3"],
    ["銅鑼灣只能有一個","陳之漢","陳水扁","陳金鋒","陳浩南","4"],
    ["誰是華裔運動員","Paul George","Ben Simmons","Chris Paul","林書豪","4"],
    ["公司幾點開始下班","6:30PM","6:30AM","沒有規定","看心情","1"],
    ["籃球全場是幾打幾","5打5","3打3","10打10","我要打10個","1"],
    ["哪一個不是台灣的隊伍","Lamigo桃猿","寶島夢想家","洛杉磯天使","富邦勇士","3"],
    ["下列何者非文學大師莎士比亞的作品?","哈姆雷特","李爾王","仲夏夜之夢","鐘樓怪人","4"],
    ["下列何者非皮克斯的動畫?","玩具總動員","怪獸電力公司","無敵破壞王","超人特攻隊","3"],
    ["下列哪個國家有舉辦過奧運?","巴西","葡萄牙","紐西蘭","義大利","1"],
    ["下列何者非唐宋古文八大家?","蘇軾","歐陽修","王羲之","韓愈","3"],
    ["下列何者非中國四大奇書之一?","水滸傳","紅樓夢","三國演義","西遊記","2"],
    ["第二次世界大戰的戰敗國是?","德、日、義","俄、德、日","俄、德、義","俄、日、義","1"],
    ["下列何人沒當過全球首富?","比爾蓋茲","馬克祖克柏","華倫巴菲特","卡洛斯·史林及其家族","2"],
    ["會發大財的城市是","台北","新北","台中","高雄","4"],
    ["圓周率小數點下第7個數字是","6","9","5","2","1"],
    ["我國的國球是","桌球","足球","籃球","贏球","4"],
    ["下列何者是君主立憲制國家?","美國","中國","英國","法國","3"],
    ["光的三原色是","紅黃藍","紅綠藍","黃綠紅","紅黃綠","2"],
    ["畢卡索是哪一派的大師?","印象派","野獸派","寫實派","立體派","4"],
    ["下列何者非忍者龜隊員名稱","米開朗基羅","利物浦","李奧納多","拉斐爾","2"],
    ["古希臘三哲不包含","蘇格拉底","柏拉圖","荷馬","亞里斯多德","3"],
    ["被稱為樂聖的是?","貝多芬","莫札特","巴哈","舒伯特","1"],
    ["哈利波特中的魁地奇球賽，抓到金探子可獲得","50分","100分","150分","200分","3"],
    ["摩西分開的是","黑海","紅海","鴻海","地中海","2"],
    ["美國總共有幾個州","50","51","52","53","1"],
    ["以下何者非宮崎駿執導的作品","魔女宅急便","神隱少女","紅豬","螢火蟲之墓","4"],
    ["周杰倫第二張專輯名稱是","JAY","葉惠美","范特西","八度空間","3"],
    ["下列哪個地標高度最高","東京鐵塔","艾菲爾鐵塔","台北101","上海東方明珠","3"],
    ["全世界最高的山是","喜馬拉雅山","阿爾卑斯山","玉山","富士山","1"],
    ["人口最多的國家是","印度","中國","美國","印尼","2"],
    ["為什麼總是先看到閃電才聽到打雷聲?","閃電發生的位置較近","閃電比較早發生","光速大於音速","以上皆非","3"],
    ["太陽系最大的行星是","水星","金星","土星","木星","4"],
    ["下列何者在生物學上的分類是魚類?","海豚","海馬","鮑魚","章魚","2"],
    ["下列哪個不是三角函數","sin","cos","tan","bot","4"],
    ["飛機飛行時會飛在哪一層以求飛行穩定?","對流層","平流層","臭氧層","中氣層","2"],
    ["下列何者不是初代寶可夢遊戲紅綠版中大木博士所給的御三家之一?","皮卡丘","妙蛙種子","小火龍","傑尼龜","1"],
    ["小智的皮卡丘沒有用過哪個招式?","十萬伏特","電光一閃","噴射火焰","鋼鐵尾巴","3"],
    ["柯南所吃下變小的藥物是","APTX-4869","ABCD-1234","LOVE-5566","GGYY-7788","1"],
    ["下列何者不是微軟出的軟體","Word","Excel","PowerPoint","Photoshop","4"],
    ["矯正近視所用的鏡片是","凸透鏡","凹透鏡","凸面鏡","三稜鏡","2"],
    ["下列YouTuber訂閱數最高的是","HowHow","蔡阿嘎","聖結石","啾啾鞋","2"],
    ["下列何者不是漫威系列","蜘蛛人","鋼鐵人","蝙蝠俠","雷神索爾","3"],
    ["全球影史票房冠軍是","復仇者聯盟-終局之戰","阿凡達","鐵達尼號","星際大戰-原力覺醒","1"],
    ["阿拉伯數字是哪個國家發明的","阿拉伯","印度","中國","波斯","2"],
    ["世界最多人信仰的宗教是","伊斯蘭教","印度教","佛教","基督教","4"],
    ["下列何者的主視覺不是藍色","twitter","facebook","plurk","skype","3"],
    ["哪個國家的國旗上沒有星星","英國","美國","紐西蘭","土耳其","1"],
    ["廣告的英文縮寫AD的全名是","Adjective","Advertisement","Assist Director","Adjustment","2"],
    ["美國第一位黑人總統是","柯林頓","華盛頓","歐罵馬","歐巴馬","4"],
    ["下列何者不是光頭","傑森史塔森","馮迪索","布萊德彼特","巨石強森","3"],
    ["下列何者不是星光一班的成員","楊宗緯","潘裕文","林宥嘉","蕭敬騰","4"],
    ["Apple的logo蘋果上的缺口是在","左邊","右邊","上面","沒有缺口","2"],
    ["鐵人三項不包含下列哪一項","游泳","攀岩","腳踏車","跑步","2"],
    ["下列何者不是任天堂出的遊戲機","Gameboy","wii","xbox","NDS","3"],
    ["下列何者不是任天堂出的遊戲","音速小子","精靈寶可夢","超級瑪利歐兄弟","漆彈大作戰","1"],
    ["牛頓是被什麼東西砸到頭而有了萬有引力定律的靈感","西瓜","葡萄","榴槤","蘋果","4"],
    ["下列何者不是windows內建的遊戲","踩地雷","新接龍","小精靈","傷心小棧","3"],
    ["Google的logo的第二個o的顏色是","黃色","藍色","綠色","紅色","1"],
    ["需要支援收銀的是","7-11","全家","全聯","家樂福","3"],
    ["「鱻」字怎麼念?","ㄩˊ","ㄒㄧㄢ","ㄒㄧㄣ","我都念IKEA","2"],
    ["鍵盤上「G」的右邊的按鍵是","F","H","J","y","2"],
    ["何者不是麥當勞的吉祥物","麥當勞叔叔","漢堡神偷","奶昔大哥","薯條弟弟","4"],
    ["張惠妹是哪一族的原住民","阿美族","泰雅族","卑南族","鄒族","3"],
    ["福爾摩斯的助手名字叫做","艾德","華生","羅賓","魯尼","2"]
];//--103

var Login=false;
var pushedID=[];//--myID(順序),MyDomId(APD順序/DOM id),Mynames(遊戲匿名),Myscore(分數)
var msgs;
var MyDomId="";
var myID;//--編號 ID
var Mynames="";
var Myscore=0;//--天梯積分
//--關卡Data(要重製)
var Qstage=0;//--題目階段
var Qnumbers;//--亂數題目代號
var Iplaying=false;
var MyEnermyLongID='';//--亂碼長ID
var MyEnermyScore=0;//--敵人這個關卡分數
var HasANS=false;//---選擇答案
var ChooseNB=0;//--我選擇第幾個答案
var MyNowScore=0;//--我這個關卡分數
var CanChoose=true;//--可以選擇答案
var Chstage=0;//--2個人作答的狀態  0:都沒提交  1:1個人提交 2:2人
var times=15.0;//--作答時間 秒
var TheInterval;//--計時器 題目倒數
var TheInterval2;//--計時器 判斷同步
//--關卡Data(要重製)
//--後台控制
var refuse_play=false;//--是否可以配對遊玩
//--後台控制
$(document).ready(function(){
    //var socket= io();    
    var socket = io({transports: ['websocket']});
    checkCookie();
        socket.on("Namefalse",function(){
            alert("此名字已使用");
        });
        socket.on("NameTrue",function(msg){//--成功使用name登入
            Login=true;
            myID=msg.id;
            MyDomId="APD"+myID;
            $("#PlayerAll .container tbody").append(
                            //`<p class="myBar" id="${MyDomId}"><span>名字:${Mynames}</span><span class"scs">分數:${Myscore}</span></p>`
                            `<tr class="myBar" id="${MyDomId}"><td>${Mynames}</td><td class="scs">${Myscore}</td><td>0</td></tr>`
                        );
            pushedID.push([myID,MyDomId,Mynames,Myscore]);
            $("#Login").css("display","none");
            $("#Loged #names span").text(Mynames);
            $("#Loged #scores span").text(Myscore);
            $("#Loged").css("display","block");
            //setCookie(Mynames,30);
            setCookie(msg.cookie,30);
        });
        socket.on("NameTrue_cookie",function(msg){//--成功使用cookie 登入
            Login=true;
            myID=msg.id;
            Mynames=msg.name;
            Myscore=msg.point;
            MyDomId="APD"+myID;
            $("#PlayerAll .container tbody").append(`<tr class="myBar" id="${MyDomId}"><td>${Mynames}</td><td class="scs">${Myscore}</td><td>0</td></tr>`);
            pushedID.push([myID,MyDomId,Mynames,Myscore]);
            $("#Login").css("display","none");
            $("#Loged #names span").text(Mynames);
            $("#Loged #scores span").text(Myscore);
            $("#Loged").css("display","block");
        });        
        socket.on("NameTrue_cookie_false",function(msg){//--cookie送過去但是 沒有對應直
            if(msg.stg==1){
                alert("此帳號已登入 無法重複登入遊戲");
            }else if(msg.stg==2){
                $("#Login").css("display","block");
                alert("Cookie已過期");
                delete_cookie("username");
            }                        
        });
        socket.on("newclientconnect",function(msg){//--如果禁止對戰 新進玩家直接接收            
            refuse_play=msg.refuse_play;
        });        
        socket.on("send_msg",function(msg){//--跑馬燈加入訊息
            $('#marqueeTeach').append(`<span class='marquee_in_say'>${msg.say}</span>`);
        });
        socket.on("stop_fight",function(msg){//--給再現玩家發出 禁止對戰            
            refuse_play=msg.refuse_play;
            if(refuse_play){
                $('#marqueeTeach').append(`<span class='marquee_in_say'>遊戲對戰已結束~~</span>`);
            }else{
                $('#marqueeTeach').append(`<span class='marquee_in_say'>對戰已經開啟!</span>`);
            }            
        });

        socket.on("checkdatas",function(msg){//--檢查所有人的資料
            //console.log(msg);
            for(var i=0;i<msg.length;i++){
                var have=false;
                if(msg[i]==null){continue;}//--跳過這個i 去執行下一個i值的迴圈
                for(var a=0;a<pushedID.length;a++){
                    if(msg[i][0]==pushedID[a][0]){//--如果 已經append好 改x,y
                        //var oj=document.getElementById(pushedID[a][1]);
                        var oj="#"+pushedID[a][1];
                        $(oj).children("td").eq(1).html(msg[i][2]);
                        pushedID[a][3]=msg[i][2];//--分數更新
                        have=true;
                    }
                }//--for a END
                if(have==false){//--如果還沒append,append進去
                        var names="APD"+msg[i][0];//--APD+數字
                        var ct2=msg[i][1];
                        var ct3=msg[i][2];
                        $("#PlayerAll .container tbody").append(
                            //`<p id="${names}"><span>名字:${ct2}</span><span class"scs">分數:${ct3}</span></p>`
                            `<tr id="${names}"><td>${ct2}</td><td class"scs">${ct3}</td><td>0</td></tr>`
                        );
                        pushedID.push([msg[i][0],names,msg[i][1],msg[i][2]]);
                }
            }//--for i END
        });
        socket.on("deleteP",function(msg){//--刪除離線的人 的DOM
            var iid=msg.ids+1;
            var DD="APD"+iid;
            console.log("DELL");
            $('#'+DD).remove();
            //console.log(pushedID[msg.ids]);                
        });
        
        socket.on("GameStart",function(msg){//--配對成功 開始遊戲
            //console.log(msg.nb);
            //console.log(pushedID);
            GStart(msg);
            Question(msg.nb);
        });
        socket.on("EnermyANS",function(msg){//--傳來 對手選擇的答案
            Chstage=msg.STG;
            if(msg.ANS>0&&msg.ANS<5){
                $("#QUS .choose").eq(msg.ANS-1).addClass("EnermyChoose");
            }
            if(msg.STG==2&&ChooseNB!=0){ //--公布答案&下一提 (不同時 案送出)
                CheckANS();
            }
            if(msg.STG==1&&CanChoose==false){ //--公布答案&下一提(同時 案送出)
                CheckANS();
            }            
        });
        socket.on("EnermySCS",function(msg){//--傳來 對手此局分數
            $("#EnGameSC").text("本場分數:"+msg.Alls);
            MyEnermyScore=msg.Alls;
            setTimeout(TimeDataReset,2000);
        });
        socket.on("EnermyOut",function(){//--對戰中 對手離開
            var pp=50+MyNowScore;
            $('.resultpic').css("background-image", "url('../img/success-2.png')");
            if(Iplaying)MyEnOutGame('獲勝:對手離開',pp);
        });
        socket.on("Offline",function(msg){//--對戰中 與對手失去同步            
            var pp=50+MyNowScore;            
            if(msg.myid==MyEnermyLongID&&Iplaying)
            {   
                $('.resultpic').css("background-image", "url('../img/sad.png')");
                MyEnOutGame('與對手連線中斷',pp);  
            }          
        });                    
        socket.on("refresh",function(msg){//被 剔除/刪除 該帳號-重整
            location.reload();
        });
    $("#Login button").on( "click", function() {//--確認名字 送出
        var values=$("#Login Input").val();//--名字val
        var partval=$("#selectDay").val();//-部門val
        var vlnb=0;
        switch(partval) {
            case "製作部":
              vlnb=1;
              break;
            case "企劃部":
              vlnb=2;
              break;
            case "策略部":
              vlnb=3;
              break;
            case "管/會部":
              vlnb=4;
              break;
            case "設計部":
              vlnb=5;
              break;
            case "技術部":
              vlnb=6;
              break;
        }
        console.log(vlnb);
        if(values.length<=8&&values.length>0&&vlnb!=0){
            //Mynames=values;
            //socket.emit('Checkname',{id:myID,name:values,score:Myscore,playstage:Iplaying,partnb:vlnb});
            Mynames=`[${partval}] ${values}`;            
            socket.emit('Checkname',{id:myID,name:Mynames,score:Myscore,playstage:Iplaying,partnb:vlnb});
        }else if(values.length==0){
            alert('名字不可以為空');
        }else if(values.length>8){
            alert('名字不可以超過8個字');
        }else if(vlnb==0){
            alert('部門選擇不能為空');
        }
        //socket.emit('Checkname',{name:values,score:Myscore,playstage:Iplaying});
    });
    
    $("#Loged .joingame").on( "click", function() {//---開始配對
        if(refuse_play==false){
            $("#Playing").css('display','block');
            socket.emit('Findplyer',{ids:myID-1});
            //socket.emit('Findplyer',{ids:myID});
            Iplaying=true;
        }else{
            alert("本輪賽事已結束-現在禁止對戰");
        }
    });
    $("#playsearching button").on( "click", function() {//--取消配對
        $("#Playing").css('display','none');
        socket.emit('CancelFind',{ids:myID-1});
        Iplaying=false;
    });
    $("#PlayArea #QUS button").on( "click", function() {//-案確認按鈕(送出答案)
        if(HasANS){//--向伺服器發射 我選擇的答案
            Chstage++;
            socket.emit('PlayerChoosed',{MyEN:MyEnermyLongID,MyANS:ChooseNB,Stg:Chstage});
            HasANS=false;
            CanChoose=false;//--禁止作答
            clearInterval(TheInterval);
            if(Chstage==2){CheckANS();}//--公布答案&下一提(2邊都提交)
            else if(Chstage==1){                
                var tt=parseInt(times);
                var as=(tt+3)*1000;
                var qq=Qstage;
                var enid=MyEnermyLongID;                            
                setTimeout(function() {
                    judgeEnStillInGame(qq,enid,1);
                },as);
            }                              
            $("#PlayArea #QUS button").css('display','none');
        }
        else{alert("未選擇答案");}
    });
    $("#QUS .choose").on("click",function(){//--選擇題目
        if(CanChoose){
            $(this).addClass("clicked").siblings("p").removeClass("clicked");
            //console.log($("#QUS span").index(this));
            ChooseNB=$("#QUS p").index(this);
            HasANS=true;
        }
    });
    $("#Closebtn").on("click",function(){//--關閉 結算UI(完成並離開對戰)
        $("#Finished").animate({opacity:0},500,function(){$("#Finished").css('display','none');});
        CloseGameResetData();
    });
    function GStart(is){//--遊戲開始  載入對手資料,開啟UI
        $("#playsearching").css('display','none');
        $("#PlayArea").css('display','block');
        $("#Pmyself  p:nth-child(1)").text(Mynames);
        $("#Pmyself  p:nth-child(2)").text("天梯積分:"+Myscore);
        $("#MyGameSC").text("本場分數:0");
        $("#EnGameSC").text("本場分數:0");
        for(var i=0;i<pushedID.length;i++){
            if(is.ids==pushedID[i][0]){
                $("#Pother p:nth-child(1)").text(pushedID[i][2]);
                $("#Pother p:nth-child(2)").text("天梯積分:"+pushedID[i][3]);
                MyEnermyLongID=is.longid;//--對手的長ID
                break;
            }
        }
                    
    }
    function Question(nbs){//--遊戲問題 載入
        Qnumbers=nbs;
        $("#QUS p:nth-child(2)").text("第"+(Qstage+1)+"題:"+questions[nbs[Qstage]][0]);//--or $("#QUS p:nth-child(1)")
        $("#QUS p:nth-child(3)").children("span:nth-child(2)").text(questions[nbs[Qstage]][1]);
        $("#QUS p:nth-child(4)").children("span:nth-child(2)").text(questions[nbs[Qstage]][2]);
        $("#QUS p:nth-child(5)").children("span:nth-child(2)").text(questions[nbs[Qstage]][3]);
        $("#QUS p:nth-child(6)").children("span:nth-child(2)").text(questions[nbs[Qstage]][4]);
        TheInterval=setInterval(InterTimes,1000);
    }
    function CheckANS(){//--判斷選擇送出
        $("#QUS p").eq(questions[Qnumbers[Qstage]][5]).addClass("TrueANS").siblings(".choose").addClass("FalseANS");
        GetThisRecord();
    }
    function InterTimes(){//-作答計時器fuc
        if(times>0){
            times=times-1;
            document.title='剩餘作答:'+times;
            times=times.toFixed(1);
            $("#ANStime span").text(times+"s");                
        }            
        if(times<=0&&CanChoose){//--時間到
            Chstage=2;
            socket.emit('PlayerChoosed',{MyEN:MyEnermyLongID,MyANS:0,Stg:Chstage});
            HasANS=false;
            CanChoose=false;//--禁止作答                                                  
            $("#PlayArea #QUS button").css('display','none');                
            CheckANS();
            clearInterval(TheInterval);
            var qq=Qstage;
            var enid=MyEnermyLongID;                
            setTimeout(function() {judgeEnStillInGame(qq,enid,2);},3000);
        }//--超過時間未作答
    }
    function judgeEnStillInGame(qs,myEnId,cons){//--判斷對方同步同步         
        if(qs==4&&myEnId==MyEnermyLongID)//--最後一提 特蘇
        {
            if(Iplaying&&Qstage==4){
                socket.emit('Offline',{MyEN:MyEnermyLongID});
                var pp=50+MyNowScore;
                $('.resultpic').css("background-image", "url('../img/sad.png')");
                MyEnOutGame('與對手連線中斷',pp);  
            }
        }else{//--除了最後一題
            if(qs==Qstage&&Iplaying&&myEnId==MyEnermyLongID)//--題目沒切換->不同步
            {
                socket.emit('Offline',{MyEN:MyEnermyLongID});
                var pp=50+MyNowScore;
                $('.resultpic').css("background-image", "url('../img/sad.png')");
                MyEnOutGame('與對手連線中斷',pp);  
            }
        } 
        //socket.emit('sendrequest',{MyEN:MyEnermyLongID});
    }
    function GetThisRecord(){//--結算本關成績
        clearInterval(TheInterval);
        var scs=0;
            //console.log(times);
        if(ChooseNB==questions[Qnumbers[Qstage]][5]){//-答對
            scs=Math.ceil(times);
           // console.log(scs);
            MyNowScore=MyNowScore+scs;
        }else{//--答錯
            scs=0;
            MyNowScore=MyNowScore+0;
        }
        //console.log(MyNowScore);
        $("#MyGameSC").text("本場分數:"+MyNowScore);
        socket.emit('MyScoreToEnermy',{MyEN:MyEnermyLongID,PlusSC:scs,AllSC:MyNowScore});//--傳我這局的成績給敵人        
    }
    function TimeDataReset(){//--關閉計時器+重設參數       
        $("#PlayArea #QUS button").css('display','inline-block');
        $("#QUS .choose").removeClass("clicked");
        $("#QUS p").removeClass("TrueANS").removeClass("FalseANS");
        $("#QUS .choose").removeClass("EnermyChoose");
        if(Qstage<4){//--進行下一提
            Qstage++;
            times=15.0;
            HasANS=false;
            ChooseNB=0;
            CanChoose=true;
            Chstage=0;
            Question(Qnumbers);
        }
        else{//--完成所有題目
            Iplaying=false;
            var Fstage="";
            var Fplus=0;
            console.log(MyNowScore);
            console.log(MyEnermyScore);
            if(MyNowScore>MyEnermyScore){//--贏
                Myscore=Myscore+MyNowScore+50;
                Fstage="獲勝";
                Fplus=MyNowScore+50;
                $('.resultpic').css("background-image", "url('../img/success-2.png')");
            }else if(MyNowScore<MyEnermyScore){//--輸
                Myscore=Myscore+MyNowScore;
                Fstage="落敗";
                Fplus=MyNowScore;
                $('.resultpic').css("background-image", "url('../img/sad.png')");
            }else{//-平手
                Myscore=Myscore+MyNowScore+25;
                Fstage="平手";
                Fplus=MyNowScore+25;
                $('.resultpic').css("background-image", "url('../img/agreement.png')");
            }
            $("#Panels .Content .Result").text(Fstage);
            $("#Panels .Content .GetPoints").text("天梯積分+"+Fplus);
            $("#Finished").css('display','block').animate({opacity:1},500);       
            //socket.emit('SuccessGame',{id:myID-1,Scores:Myscore});//--傳我這局的成績給敵人   3/11 DownHere
        }
    }
    function CloseGameResetData(){//---離開遊戲房間(重製Data)         
         Qstage=0;//--題目階段
         Qnumbers=[];//--亂數題目代號
         Iplaying=false;
         MyEnermyLongID='';//--亂碼長ID
         MyEnermyScore=0;//--敵人這個關卡分數 
         HasANS=false;//---選擇答案
         ChooseNB=0;//--我選擇第幾個答案
         MyNowScore=0;//--我這個關卡分數
         CanChoose=true;//--可以選擇答案
         Chstage=0;//--2個人作答的狀態  0:都沒提交  1:1個人提交 2:2人
         times=15.0;//--作答時間 秒         
         $("#playsearching").css('display','block');
         $("#PlayArea").css('display','none');
         $("#Playing").css('display','none');
         socket.emit('CancelFind',{ids:myID-1});
         socket.emit('UpdateMyScore',{ids:myID,newSC:Myscore});
         //console.log(pushedID);
         Iplaying=false;
         $("#Loged #scores span").text(Myscore);//--更新首頁自己的分數
    }
    function MyEnOutGame(say,point){//--對手中離
        Iplaying=false;
        $("#PlayArea #QUS button").css('display','inline-block');
        $("#QUS .choose").removeClass("clicked");
        $("#QUS p").removeClass("TrueANS").removeClass("FalseANS");
        $("#QUS .choose").removeClass("EnermyChoose");
        CloseGameResetData();
        clearInterval(TheInterval);
        // $("#Panels .Content .Result").text('獲勝:對手離開');
        // Myscore=Myscore+MyNowScore+50;
        // var insay=MyNowScore+50;
        $("#Panels .Content .Result").text(say);
        Myscore=Myscore+MyNowScore+point;
        var insay=MyNowScore+point;
        $("#Panels .Content .GetPoints").text("天梯積分+"+insay);
        $("#Finished").css('display','block').animate({opacity:1},500);       
    }

    $('#For_rank').on('click',Ranking_sort);

    function Ranking_sort(){//--<td>所有資料排名
        var R_allnb=$("#PlayerAll .container tbody tr").length;
        var Datas=[];            
        for(i=0;i<R_allnb;i++){
            var vv=$("#PlayerAll .container tbody tr").eq(i);
            var vv2=vv.children('td:nth-child(2)').html();
            var vvv=[vv,vv2];
            Datas.push(vvv);
            //console.log('RR:'+vv2);
        }
        Datas.sort(function (a, b) {//--小到最大
            return a[1] - b[1];
        });
        Ranking_do(Datas);            
    }
    function Ranking_do(data){//--Dom畫面排名更動
        for(i=0;i<data.length;i++){                
            var a=$("#PlayerAll .container tbody tr").eq(i);               
            var s=data.length-(i+1);
            data[s][0].insertBefore(a);//--data移動到a(DOM)之前
            data[s][0].children('td:last-child').html(i+1);
        }
    }


    function setCookie(cname,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = d.toGMTString();
        //var expires="July 21 2019 23:59:59 GMT+09:00";        
        //document.cookie = "username=" +cname + "; expires=" + expires + ";path=/";
        document.cookie = "username=" +cname + "; expires=" + expires + ";path=/";
        //alert(expires);
    }
      
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }
      
    function checkCookie() {        
        var user=getCookie("username");
        if (user != "") {//--再次登入
          socket.emit('CookieLogin',{name:user});//--送出 cookie紀錄的名字 
          alert("歡迎登入");
        } else {//--第一次登入           
            $("#Login").css("display","block");                  
        }

    }
    function delete_cookie( name ) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

});