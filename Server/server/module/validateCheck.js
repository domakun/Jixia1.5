// const mysql = require('mysql');
const dbutils = require('../utils/dbutils');

//登录
exports.matchLogin = function (name, password, admin,func) {
    let sql_user = 'select count(*) as num from user where user_name=? and user_pwd=?';
    let sql_admin = 'select count(*) as num from admin where admin_name=? and admin_pwd=?';
    let param = [name, password];
    if (admin == 'false'){
        dbutils.select(sql_user, param, function (result) {
            // console.log('validateCheck----');
            // console.log(result);
            func(result);
        })
    }else {
        dbutils.select(sql_admin,param,function (result) {
            func(result);
        })
    }
};
//注册
exports.matchRegist = function (username, password, func) {
    let sql_sel = 'select count(*) as num from user where user_name = ?';
    let sql_ins = 'insert into user(user_name,user_pwd)value(?,?)';
    // console.log('validateCheck----' + password);
    let param = [username, password];
    dbutils.select(sql_sel, username, function (result) {
        // console.log('validateCheck----');
        // console.log(result);
        let num = result[0].num;
        if (num == 0) {
            dbutils.select(sql_ins, param, function (err, result) {
                // console.log('insert---'+result);
                func(num); //成功注册
            })
        } else {
            num = 1;
            func(num); //用户名已存在
        }
    })
}
