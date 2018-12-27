const nSModel = require('../module/nineScenicModel') ;
// const publicdata = require('../utils/publicData.js') ;

exports.queryNineS =function (count,func) {
    nSModel.selectNineS(count,function (result) {
        func(result)
    })
}