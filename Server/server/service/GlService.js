const GlModule = require('../module/GlModule.js') ;
const publicdata = require('../utils/publicData.js') ;

//分页查询
function queryByCutPage(pageNow,cb) {
	var first = (pageNow - 1) * publicdata.max;
	var result = {};
	GlModule.selectAllStrategy(first,publicdata.max,function(StrategyData) {
		result.StrategyData = StrategyData;
		console.log('service的StrategyData',result.StrategyData);
		getTotalPage(function(allStrategyArray) {
			// allStrategyArray--> [totalResult:xx]
			let totalRows = allStrategyArray[0].totalResult;
			console.log('totalResult>>>>>',totalRows);
			totalPage = totalRows / publicdata.max;
			totalPage = Math.ceil(totalPage);
			result.totalRows = totalRows;
			result.totalPage = totalPage;
			console.log('service-result--->',result)
			cb(result);
		});
	});
}

exports.queryByCutPage = queryByCutPage;

// 根据每页显示的最大条数得到总页数
function getTotalPage(cb) {
	GlModule.getAllPage(function(allStrategyArray) {
		cb(allStrategyArray);
	});
}


// 删除攻略
function deleteStrategy(glb_id,cb) {
	GlModule.delStrategy(glb_id,function(result) {
		if(result.affectedRows == 0){
			cb('false');
		}else {
			cb('success');
		}
	});
}

exports.deleteStrategy = deleteStrategy;

// 查找攻略并分页显示
function searchGl(pageNow,jd_addr,jd_name,content,date,author_id,cb) {
	var first = (pageNow - 1) * publicdata.max;
	var result = {};

	GlModule.searchGl(first,publicdata.max,jd_addr,content,jd_name,date,author_id,function(StrategyData) {
		result.StrategyData = StrategyData;
		console.log('service的StrategyData',result.StrategyData);
		getTotalPage(function(allStrategyArray) {
			// allStrategyArray--> [totalResult:xx]
			let totalRows = allStrategyArray[0].totalResult;
			console.log('totalResult>>>>>',totalRows);
			totalPage = totalRows / publicdata.max;
			totalPage = Math.ceil(totalPage);
			result.totalRows = totalRows;
			result.totalPage = totalPage;
			console.log('service-result--->',result)
			cb(result);
		});
	});
}

exports.searchGl = searchGl;

















// 查看攻略
function showSomestrategy(glb_id,cb) {
	GlModule.showSomestrategy(glb_id,function(result) {
		cb(result)
	});
}

exports.showSomestrategy = showSomestrategy;




// 查询筛选页面数据和总页数
// exports.queryByCondition = queryByCondition ;
// function queryByCondition(pageNow,jd_addr,jd_id,jd_name,func){
//     console.log(pageNow,'pageNow');
//     var first = (pageNow-1)*publicdata.max ;
//     var result = {} ;
//     console.log(first);
//     JdModule.selectSomeJds(first,publicdata.max,jd_addr,jd_id,jd_name,function(r){
//         // 回调查询总页数
//         result.jdData = r ;
//         JdModule.getSomeCount(jd_addr,jd_id,jd_name,function(res){
//             res = res[0]['count(*)'] ;
//             result.totalRows = res ;
//             res = res/publicdata.max ;
//             res = Math.ceil(res) ;
//             result.totalPages = res ;
//             func(result) ;
//         }) ;
// 
//     }) ;
// }
