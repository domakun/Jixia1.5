const express = require('express') ;
const ejs = require('ejs') ;
const app = express() ;
const bodyParser = require('body-parser') ;
const url = require('url') ;
const cookieParser = require('cookie-parser') ;
const cors = require('cors')

const JdController = require('./server/controller/JdController.js') ;
const GlController = require('./server/controller/GlController.js') ;
const validateCon = require('./server/controller/validateCon.js');
const userController = require('./server/controller/userController');


app.use(cookieParser('lifeissimpebutyoumadeitcomplicated'));
// 设置资源后缀名和默认地址
app.set('view engine' , 'html') ;
app.engine('.html',require('ejs').__express) ;
app.set('views',__dirname+'/view') ;
app.use(express.static(__dirname+'/public')) ;
app.use(bodyParser.urlencoded({extended:false})) ;

//跨域问题
app.use(cors({
    credentials: true,
        origin: 'http://localhost:8080', // web前端服务器地址
}))

// 判断路由，把路由分发给子控制器
app.get('/*',function(req,res){
    var pathname = url.parse(req.url).pathname ;
    // res.render('index')
    console.log(pathname);
    if(pathname == '/getAllJd'){
        JdController.showJdS(req,res)       //获取所有景点信息
    }else if(pathname == '/getSomeJds'){
        JdController.showSomeJdS(req,res)   //获取筛选的景点信息
    }else if(pathname == '/deleteJd'){
        JdController.deleteJd(req,res)      //删除景点
    }else if(pathname == '/getJdById'){
        JdController.getJdById(req,res)     //根据景点id获取信息
    }else if(pathname == '/getJdId'){       //获取景点的id
        JdController.getJdId(req,res)
    }else if(pathname == '/jump2showJd'){   //跳转展示景点的页面
        JdController.jump2showJd(req,res)
    }else if(pathname == '/getSomeGl'){//查看攻略接口，，管理界面暂时用不了，不要删
        GlController.showSomeGl(req,res)
    }else if(pathname == '/deleteGl'){
        GlController.deleteGl(req,res)
    }else if(pathname == '/searchGl'){
        GlController.searchGl(req,res)
    }else if( pathname == '/getAllUser'){
        userController.showUsers(req,res);
    }
    else if( pathname == '/deleteUser'){
        userController.deleteUser(req,res);
    }
    else if(pathname == '/searchUser'){
        console.log('=======>请求searchUser');
        userController.searchUser(req,res)
    }
});

app.post('/*',function(req,res){
    var pathname = url.parse(req.url).pathname ;
    if(pathname == '/addJd'){
        JdController.insert(req,res)
    }else if(pathname == '/updateJd'){
         JdController.updateJd(req,res)
    }else if (pathname == '/tologin') {
        validateCon.userLoginCheck(req, res)
    } else if (pathname == '/toregist') {
        validateCon.userRegistCheck(req, res)
    }
});

app.listen(9999,function (argument) {
    console.log('waiting...') ;
});