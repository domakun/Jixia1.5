const GlService = require('../service/GlService.js') ;

// 分页显示攻略
function showGl(req,res){
    console.log('+++++++',req.query);
    var pageNow = req.query.pageNow ;
    GlService.queryByCutPage(pageNow,function(StrategyData){
        console.log("StrategyData---->",StrategyData) ;
        res.json(StrategyData) ;
    }) ;
}

exports.showGl = showGl;

// 删除攻略
function deleteGl(req,res) {
	  var glb_id = req.query.glb_id;
	  GlService.deleteStrategy(glb_id,function(result) {
		    res.json(result);
	  })
}

exports.deleteGl = deleteGl;

// 查找攻略

function searchGl(req,res) {
	for(var item in req.query){
      if(req.query[item] == ''){
        req.query[item] = '%' ;
      }else if(item != 'pageNow') {
        req.query[item] = '%'+req.query[item]+'%' ;
      }
     }
		var pageNow = req.query.pageNow,
		jd_addr = req.query.jd_addr,
		jd_name = req.query.jd_name,
		content = req.query.content,
		date = req.query.date,
		author_id = req.query.author_id;
		console.log('controller--->',pageNow,jd_addr,jd_name,content,date,author_id);
		GlService.searchGl(pageNow,jd_addr,jd_name,content,date,author_id,function(result) {
			res.json(result);
		}) 
}

exports.searchGl = searchGl;








// 查看攻略
function showSomeGl(req,res) {
	var glb_id = req.query.glb_id;
	GlService.showSomestrategy(glb_id,function(result) {
		res.json(result);
	})
}

exports.showSomeGl = showSomeGl;



// function showSomeGl(req,res){
//      for(var item in req.query){
//       if(req.query[item] == ''){
//         req.query[item] = '%' ;
//       }else if(item != 'pageNow') {
//         req.query[item] = '%'+req.query[item]+'%' ;
//       }
//      }
//      console.log('+++++++',req.query) ;
//     var pageNow = req.query.pageNow ;
//     var gl_addr = req.query.gl_addr ;
//     var gl_id = req.query.gl_id ;
//     var gl_name = req.query.gl_name ;
//     GlService.queryByCondition(pageNow,gl_addr,gl_id,gl_name,function(result){
//         // console.log(result,">>>result") ;
//         res.json(result) ;
//     }) ;
// }
// 
// // 删除
// exports.deleteGl = deleteGl  ;
// function deleteGl(req,res){
//   var gl_id = req.query.gl_id ; 
//   GlService.deleteGl(gl_id,function(result){
//     res.json(result) ;
//   }) ;
// }