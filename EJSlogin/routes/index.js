var express = require('express');
var router = express.Router();
var models= require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {

  models.Account.findAll().then(function(account){    
    res.render('index',{
      title: "測試登入",
      accounts:account,
    });
  });
  

  // models.Account.findAll({    
  //     online:true
  // }).then(function(account){
  //     Onlines=account;
  // });
  // console.log(Alls);

  // res.render('index',{
  //   title: "測試登入",
  //   accounts:said,
  // });
});

router.post('/login', function(req, res, next) {
  console.log(req.body);
  
  models.Account.create({
    name:req.body.name,
    user:req.body.user,
    password:req.body.password
  }).then(function(account){
    res.redirect("/");//--回首頁
    //console.log(account);
  });
  
  
    /*
    .then(function(object) {
      console.log(object);
    })
    */
});

router.post('/fblogin', function(req, res, next) {
  models.Account.findOrBuild({//--抓到id
    where:{
      user:req.body.id,
    }
    })
    .spread(function(object, created) {
      //console.log(user.get({plain: true})) // true 當作普通物件回傳
      console.log(created)
      if(created){//--成功建立 新的
          models.Account.create({
            name:req.body.name,
            user:req.body.id,
            password:0
          }).then(function(account){
            //res.redirect("/");//--回首頁    
            res.json(account);            
          });
      }else{
        // res.render('index',{
        //   title: "此帳號已登入",              
        // });
        res.status(500).send("此帳號已登入");
      }

    })
});
router.post('/getall', function(req, res, next) {
  models.Account.findAll().then(function(account){    
    res.json(account);
  });
});


module.exports = router;
