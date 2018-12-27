const mysql = require('mysql');
const dbutils = require('../utils/dbutils.js');
exports.selectNineS = function (count, func) {
    //随机9条
    let sql = `select jd_name,imgs from jd order by rand() limit ${count}`;
    let params = '';
    dbutils.select(sql, params, function (result) {
        // console.log("数据库结果总数");
        console.log(result);
        func(result);
    })
};