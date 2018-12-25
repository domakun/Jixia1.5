// 引入数据库
const mysql = require ("mysql");
const dbutils = require("../utils/dbutils.js");

//分页查询
exports.selectBylimit = function (first,max,func) {
     //select user_id,user_name,head_img,email from user order by user_id desc limit ? ?  倒序排列
    const sql = 'select user_id,user_name,head_img,email from user limit ?,?';
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
//		console.log("======>:",result) //[ RowDataPacket { totalResult: 9 } ]
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

// deleteUser(13,function(result){
//     console.log("=====>shanchu",result)
// })

//查询用户
exports.searchUser=searchUser;
function searchUser(user_id,user_name,first,max,func) {
    console.log("======>user_id",user_id,user_name)
    var sql = 'select user_id,user_name,user_addr from user where user_id like ? and user_name like ? limit ?,? ';
    // var param = [user_id,user_name,first,max];
    var param = [user_id,user_name,first,max];

    dbutils.select(sql,param,function(result) {
        console.log('module查询的result--->',result);
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

// getSomeCount("%","%张%",function(result){
//     console.log("========>",result)
//     //[ RowDataPacket { 'count(*)': 6 } ]
// })

// searchUser(0,5,"%","%张%",function(result){
//     console.log("=====>result",result)
// })



