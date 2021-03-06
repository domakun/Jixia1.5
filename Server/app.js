const express = require('express');
const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');
const url = require('url');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const JdController = require('./server/controller/JdController.js');
const GlController = require('./server/controller/GlController.js');
const validateCon = require('./server/controller/validateCon.js');
const userController = require('./server/controller/userController');

// 加载ueditor模块
const ueditor = require('ueditor');
const path = require('path');
//使用模块
app.use('/api/ue',ueditor(path.join(__dirname,'public'),function(req,res,next) {
	// ueditor客户发起上传图片请求
	if(req.query.action === 'uploadimage') {
		var foo = req.ueditor;
		var imgname = req.ueditor.filename;
		var img_url = '/ueditor/images/';
		res.ue_up(img_url);
		res.setHeader('Content-Type','text/html');
	}else if(req.query.action === 'listimage'){//客户端发起图片列表请求
		var dir_url = '/ueditor/images/';
		res.ue_list(dir_url);//客户端会列出dir_url目录下所有图片
		
	}else {//客户端发起其他请求
		console.log('config.json');
		res.serHeader('Content-Type','application/json');
		res.redirect('/ueditor/nodejs/config.js');
	}
}));

const nineController = require('./server/controller/nineController');

app.use(cookieParser('lifeissimpebutyoumadeitcomplicated'));
// 设置资源后缀名和默认地址
app.set('view engine', 'html');
app.engine('.html', ejs.__express);
app.set('views', __dirname + '/view');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//跨域问题
app.use(cors({
    credentials: true,
    origin: 'http://localhost:8080', // web前端服务器地址
}));

// 判断路由，把路由分发给子控制器
app.get('/*', function (req, res) {
    var pathname = url.parse(req.url).pathname;
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
    }else if(pathname == '/jump2showJd'){   //跳转展示景点的页面
        JdController.jump2showJd(req,res)
    }else if(pathname == '/getAllGl'){
        GlController.showGl(req,res)
    }else if(pathname == '/getSomeGl'){//查看攻略接口，，管理界面暂时用不了，不要删
        GlController.showSomeGl(req,res)
    }else if( pathname == '/deleteUser'){
        userController.deleteUser(req,res);
    }else if (pathname == '/getJdId') {       //获取景点的id
        JdController.getJdId(req, res)
    }else if (pathname == '/deleteGl') {
        GlController.deleteGl(req, res)
    } else if (pathname == '/searchGl') {
        GlController.searchGl(req, res)
    }else if (pathname == '/getAllUser') {  //用户
        userController.showUsers(req, res);
    }else if (pathname == '/searchUser') {
        userController.searchUser(req, res)
    }else if (pathname == '/getScenic'){    //九个景点
        nineController.getNineScenic(req,res)
    }else if(pathname == '/checkLogin'){       //检查登陆状态
        JdController.comment_login_check(req,res)
    }
})

app.post('/*', function (req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/addJd') {
        JdController.insert(req, res)
    } else if (pathname == '/updateJd') {
        JdController.updateJd(req, res)
    } else if (pathname == '/tologin') {
        validateCon.userLoginCheck(req, res)
    } else if (pathname == '/toregist') {
        validateCon.userRegistCheck(req, res)
    }else if(pathname == '/up_comment'){
        JdController.up_comment(req, res)
    }
});

app.listen(9999, function (argument) {
    console.log('waiting...');
});