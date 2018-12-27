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

