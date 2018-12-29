// 引入数据库
const mysql = require ("mysql");
const dbutils = require("../utils/dbutils.js");

//分页查询显示用户信息
exports.selectBylimit=selectBylimit;
function selectBylimit (first,max,func) {
     //select user_id,user_name,user_pwd,head_img,email,user_addr from user order by user_id desc limit ? ?  倒序 第几条到第几条
   var sql = 'select user_id,user_name,email,user_pwd,user_addr from user limit ?,?';
    var param = [first,max] ;
	dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}





//查出总条数
exports.selectTotalReasult=selectTotalReasult;
function selectTotalReasult (func){
    var sql = 'select count(*) from user';
    var param = [] ;
    dbutils.select(sql,param,function(result){
        func(result);
//		console.log("======>:",result) //[ RowDataPacket { totalResult: 10 } ]
    })
}


//删除用户
exports.deleteUser=deleteUser;
function deleteUser (user_id,func) {
    var sql = 'delete from user where user_id = ?' ;
    var param = [user_id] ;
    dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}


//根据id或者名字来查询用户
exports.searchUser=searchUser;
function searchUser(user_id,user_name,first,max,func) {
    //console.log("======>user_id",user_id,user_name)
    var sql = 'select user_id,user_name,email,user_pwd,user_addr from user where user_id like ? and user_name like ? limit ?,? ';
    // var param = [user_id,user_name,first,max];
    var param = [user_id,user_name,first,max];
    dbutils.select(sql,param,function(result) {
        //console.log('module查询的result--->',result);
        func(result);
    })
}
//查询条数得到总页数
exports.getSomeCount = getSomeCount
function getSomeCount (user_id,user_name,func) {
    var sql = 'select count(*)  from user where user_id like ? and  user_name like ? ' ;
    var param = [user_id,user_name] ;
    dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}



//修改用户：
exports.updateUser = updateUser ;
function updateUser (user_id,user_name,user_pwd,sign,user_addr,func) {
    var sql = 'UPDATE user SET user_name = ?,user_pwd = ?,sign=?, user_addr=? WHERE user_id = ? ' ;
    var param = [user_name,user_pwd,sign,user_addr,user_id] ;
    dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}

// 查找是否已经存在此用户
exports.checkNameWhenUpdate = checkNameWhenUpdate ;
function checkNameWhenUpdate(user_name,user_id,func){
    var sql = 'select user_id,user_name,user_pwd,sign,user_addr from user where user_name=? and user_id!=?' ;
    dbutils.select(sql,[user_name,user_id],function(result){

        func(result)
    }) ;
}

