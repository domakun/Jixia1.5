const mysql = require('mysql') ;
const dbutils = require('../utils/dbutils.js') ;

exports.selectAllJds = function (first,max,func) {
    var sql = 'select jd_info,jd_id,jd_name,jd_addr,imgs,param1,param2,param3 from jd order by jd_id desc limit ?,?' ;
    var param = [first,max] ;
    dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}


//查询总页数
exports.getCount = function (func) {
    var sql = 'select count(*)  from jd  ' ;
    var param = [] ;
    dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}

// 增加景点
exports.addJd = addJd ;
function addJd (jd_name,jd_info,jd_addr,imgs,func) {
    var sql = 'insert into jd(jd_name,jd_info,jd_addr,imgs) values (?,?,?,?)' ; 
    var param = [jd_name,jd_info,jd_addr,imgs] ;
    dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}

// 查找是否已经存在此景点
exports.checkName = checkName ; 
function checkName(jd_name,func){
    var sql = 'select jd_info,jd_id,jd_name,jd_addr,imgs,param1,param2,param3 from jd where jd_name=?' ;
    dbutils.select(sql,[jd_name],function(result){
        func(result) ;
    }) ; 
}


// 查找是否已经存在此景点
exports.checkNameWhenUpdate = checkNameWhenUpdate ;
function checkNameWhenUpdate(jd_name,jd_id,func){
    var sql = 'select jd_info,jd_id,jd_name,jd_addr,imgs,param1,param2,param3 from jd where jd_name=? and jd_id!=?' ;

    dbutils.select(sql,[jd_name,jd_id],function(result){
        console.log(result)
        func(result)
    }) ;
}

exports.selectSomeJds = selectSomeJds ;
function selectSomeJds (first,max,jd_addr,jd_id,jd_name,func) {
    var sql = 'select jd_info,jd_id,jd_name,jd_addr,imgs,param1,param2,param3 from jd where jd_addr like ? and  jd_id like ?  and jd_name like ?  limit ?,?' ;
    var param = [jd_addr,jd_id,jd_name,first,max] ;
    dbutils.select(sql,param,function(result){
        console.log(result);
        func(result) ;
    }) ;
}
//查询总页数
exports.getSomeCount = getSomeCount
 function getSomeCount (jd_addr,jd_id,jd_name,func) {
    var sql = 'select count(*)  from jd where jd_addr like ? and  jd_id like ?  and jd_name like ? ' ;
    var param = [jd_addr,jd_id,jd_name] ;
    dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}

//删除景点
exports.deleteJd = deleteJd
 function deleteJd (jd_id,func) {
    var sql = 'delete from jd where jd_id = ?' ;
    var param = [jd_id] ;
    dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}

//修改景点
// 增加景点
exports.updateJd = updateJd ;
function updateJd (jd_id,jd_name,jd_info,jd_addr,imgs,func) {
    var sql = 'UPDATE jd SET jd_name = ?,jd_info=?,jd_addr=?,imgs=? WHERE jd_id = ? ' ; 
    var param = [jd_name,jd_info,jd_addr,imgs,jd_id] ;
    dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}
// 根据景点id拿到所有信息
exports.getJdById = getJdById ; 
function getJdById(jd_id,func){
    var sql = 'select jd_info,jd_id,jd_name,jd_addr,imgs,param1,param2,param3 from jd where jd_id=?' ; 
    dbutils.select(sql,[jd_id],function(result){
        func(result) ;
    }) ; 
}

// 根据景点查询

// getJdById(5,function(){});
// updateJd (1,'jd_name','jd_info','jd_addr','imgs',function(){})
// deleteJd(10,function(){}) ;
// getSomeCount('%','%','%s%',function(){})
// selectSomeJds(0,5,'%','%','%',function(){});