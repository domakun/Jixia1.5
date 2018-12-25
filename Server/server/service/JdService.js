const JdModule = require('../module/JdModule.js') ;
const publicdata = require('../utils/publicData.js') ;

// 查询页面数据和总页数
exports.queryByCutPage = queryByCutPage ;
function queryByCutPage(pageNow,func){
    var first = (pageNow-1)*publicdata.max ;
    var result = {} ;
    // console.log(first);
    JdModule.selectAllJds(first,publicdata.max,function(r){
        // 回调查询总页数
        result.jdData = r ;
        JdModule.getCount(function(res){
            res = res[0]['count(*)'] ;
            result.totalRows = res ;
            res = res/publicdata.max ;
            res = Math.ceil(res) ;
            result.totalPages = res ;
            func(result) ;
        }) ;

    }) ;
}

// 添加景点
exports.insert = insert ; 
function insert(jd_name,jd_info,jd_addr,imgs,func){
    // 先检查名字是否重复
    JdModule.checkName(jd_name,function(res){
        if(res.length != 0){
            // 存在此名称，返回相应数据
            func('exits');
        }else{
            // 不存在此名字,执行更改
            JdModule.addJd(jd_name,jd_info,jd_addr,imgs,function(result){
                if(result.affectedRows == 0){
                    func('error');
                }else{
                    func('success') ;
                }
            }) ; 
        }
    }) ;
}

// 查询筛选页面数据和总页数
exports.queryByCondition = queryByCondition ;
function queryByCondition(pageNow,jd_addr,jd_id,jd_name,func){
    console.log(pageNow,'pageNow');
    var first = (pageNow-1)*publicdata.max ;
    var result = {} ;
    console.log(first);
    JdModule.selectSomeJds(first,publicdata.max,jd_addr,jd_id,jd_name,function(r){
        // 回调查询总页数
        result.jdData = r ;
        JdModule.getSomeCount(jd_addr,jd_id,jd_name,function(res){
            res = res[0]['count(*)'] ;
            result.totalRows = res ;
            res = res/publicdata.max ;
            res = Math.ceil(res) ;
            result.totalPages = res ;
            func(result) ;
        }) ;

    }) ;
}
// 删除
exports.deleteJd = deleteJd ;
function deleteJd(jd_id,func){
    JdModule.deleteJd(jd_id,function(result){
        if(result.affectedRows == 0){
            func('false')
        }else {
            func('success')
        }
    }) ;
}

// 修改景点
exports.updateJd = updateJd ; 
function updateJd(jd_id,jd_name,jd_info,jd_addr,imgs,func){
    // 先检查名字是否重复
    JdModule.checkNameWhenUpdate(jd_name,jd_id,function(res){
        if(res.length != 0){
            // 存在此名称，返回相应数据
            func('exits');
        }else{
            // 不存在此名字,执行更改
            jd_id = Number(jd_id) ;
            JdModule.updateJd(jd_id,jd_name,jd_info,jd_addr,imgs,function(result){
                if(result.affectedRows == 0){
                    func('error');
                }else{
                    func('success') ;
                }
            }) ; 
        }
    }) ;
}
// 根据景点id查询
exports.getJdById = getJdById ;
function getJdById(jd_id,func){
    JdModule.getJdById(jd_id,function(r){
            func(r) ;
    }) ;
}
// getJdById(5,function(){})
// updateJd('1','jd_neeame','jd_info','jd_addr','imgseeeee',function(){})
// deleteJd(11,function(){})
// queryByCondition(1,'%','%','%s%',function(){})