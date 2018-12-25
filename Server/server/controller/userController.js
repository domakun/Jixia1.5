const userService = require('../service/userService.js') ;
const publicdata = require('../utils/publicData.js') ;

const express = require('express') ;
const app = express() ;
const cookieParser = require('cookie-parser') ;
app.use(cookieParser('lifeissimpebutyoumadeitcomplicated'));


//显示用户信息
exports.showUsers = showUsers;
function showUsers(req,res) {
    //接受view层数据
    var pageNow = req.query.pageNow ;

    userService.queryByCutPage(pageNow, function(result){
		//console.log("===========>",result)
        res.json(result);	
    });	
}


// 删除
exports.deleteUser = deleteUser  ;
function deleteUser(req,res){
    var user_id = req.query.user_id ;
    //console.log("=======id",user_id)
    userService.deleteUser(user_id,function(result){
        res.json(result) ;
    }) ;
}

//查询用户信息
exports.searchUser = searchUser ;
function searchUser(req,res){
    for(var item in req.query){
        if(req.query[item] == ''){
            req.query[item] = '%' ;
        }else if(item != 'pageNow') {
            req.query[item] = '%'+req.query[item]+'%' ;
        }
    }
   // console.log('=======>req',req.query) ;

    var pageNow = req.query.pageNow ;
    var user_id = req.query.user_id ;
    var user_name = req.query.user_name ;
    userService.searchUser(pageNow,user_id,user_name, function(result){
        //console.log("===========>",result)
        res.json(result);
    });
}

