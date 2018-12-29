
const dbutils = require('../utils/dbutils');

//登录
exports.matchLogin = matchLogin ;
    function matchLogin (username, password, admin,func) {
    let sql_user = 'select user_id,user_pwd from user where user_name=? ';
    let sql_admin = 'select user_id,user_pwd from admin where admin_name=? ';
    let param = [username];
    if (admin == 'false'){
        dbutils.select(sql_user, param, function (result) {
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
        let num = result[0].num;
        if (num == 0) {
            dbutils.select(sql_ins, param, function (err, result) {
                func(num); //成功注册
            })
        } else {
            num = 1;
            func(num); //用户名已存在
        }
    })
}
