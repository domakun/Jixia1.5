const userModule = require('../module/userModule.js') ;
const publicdata = require('../utils/publicData.js') ;

// 查询页面数据和总页数
exports.queryByCutPage = queryByCutPage ;
function queryByCutPage(pageNow,func){
    var first = (pageNow-1)*publicdata.max ;
    var result = {} ;
    userModule.selectBylimit(first,publicdata.max,function(r){
        //根据每页显示的最大条数得到总页数
        result.userData = r ;
        userModule.selectTotalReasult(function(res){
            res = res[0]['count(*)'] ;
            res = res/publicdata.max ;
            res = Math.ceil(res) ;
            result.totalPages = res ;
            //console.log('=====',result)
            func(result) ;
        }) ;
    }) ;
}


// 删除用户
exports.deleteUser = deleteUser ;
function deleteUser(user_id,func){
    userModule.deleteUser(user_id,function(result){
        if(result.affectedRows == 0){
            func('false')
        }else {
            func('success')
        }
    }) ;
}

// 查询筛选页面数据和总页数
exports.searchUser = searchUser ;
function searchUser(pageNow,user_id,user_name,func){
   //console.log('======>user_id',user_id,user_name);
    var first = (pageNow-1)*publicdata.max ;
    var result = {} ;
    //console.log("====>first",first);
    userModule.searchUser(user_id,user_name,first,publicdata.max, function(r){
        // 根据最大条数得到总页数
        result.userData = r ;
        console.log("====>rrrrrr",r)
        userModule.getSomeCount(user_id,user_name,function(res){
            res = res[0]['count(*)'] ;
            result.totalRows = res ;
            res = res/publicdata.max ;
            res = Math.ceil(res) ;
            result.totalPages = res ;
            func(result) ;
        }) ;
    }) ;
}

// searchUser(1,"%","%张%","%",function(res){
//     console.log("======>",res)
// })

//     totalRows: 6,
//     totalPages: 2







