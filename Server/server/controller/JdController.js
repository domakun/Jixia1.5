const JdService = require('../service/JdService.js') ;
const express = require('express') ;
const app = express() ;
const cookieParser = require('cookie-parser') ;
app.use(cookieParser('lifeissimpebutyoumadeitcomplicated'));

exports.showJdS = showJdS  ;
function showJdS(req,res){
  console.log('+++++++',req.query) ;
    var pageNow = req.query.pageNow ;
    JdService.queryByCutPage(pageNow,function(result){
        // console.log(result,">>>result") ;
        res.json(result) ;
    }) ;
}

// 添加
exports.insert = insert  ;
function insert(req,res){
  var jd_name = req.body.jd_name ; 
  var jd_info = req.body.jd_info ; 
  var jd_addr = req.body.jd_addr ; 
  var imgs = req.body.imgs ; 
  JdService.insert(jd_name,jd_info,jd_addr,imgs,function(result){
    res.json(result) ;
  }) ;
}

exports.showSomeJdS = showSomeJdS  ;
function showSomeJdS(req,res){
     for(var item in req.query){
      if(req.query[item] == ''){
        req.query[item] = '%' ;
      }else if(item != 'pageNow') {
        req.query[item] = '%'+req.query[item]+'%' ;
      }
     }
     console.log('+++++++',req.query) ;
    var pageNow = req.query.pageNow ;
    var jd_addr = req.query.jd_addr ;
    var jd_id = req.query.jd_id ;
    var jd_name = req.query.jd_name ;
    JdService.queryByCondition(pageNow,jd_addr,jd_id,jd_name,function(result){
        // console.log(result,">>>result") ;
        res.json(result) ;
    }) ;
}

// 删除
exports.deleteJd = deleteJd  ;
function deleteJd(req,res){
  var jd_id = req.query.jd_id ; 
  JdService.deleteJd(jd_id,function(result){
    res.json(result) ;
  }) ;
}

// 修改
exports.updateJd = updateJd  ;
function updateJd(req,res){
  var jd_id = req.body.jd_id ; 
  var jd_name = req.body.jd_name ; 
  var jd_info = req.body.jd_info ; 
  var jd_addr = req.body.jd_addr ; 
  var imgs = req.body.imgs ; 
  JdService.updateJd(jd_id,jd_name,jd_info,jd_addr,imgs,function(result){
    res.json(result) ;
  }) ;
}

// 根据景点id拿到信息
exports.getJdById = getJdById  ;
function getJdById(req,res){
  var jd_id = req.query.jd_id ;
  console.log('jd_id>>>',jd_id)
  JdService.getJdById(jd_id,function(result){
    res.json(result)
  }) ;
}

exports.getJdId = getJdId  ;
function getJdId (req,res) {
    res.json({'jd_id':req.cookies.jd_id})
}

exports.jump2showJd = jump2showJd  ;
function jump2showJd (req,res) {
    var jd_id = req.query.jd_id ;
    res.cookie('jd_id',jd_id)
    res.render('showJd');
}
