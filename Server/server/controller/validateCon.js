const validateServer = require('../service/validateServer');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser('lifeissimpebutyoumadeitcomplicated'));

//登录控制
exports.userLoginCheck = function (req, res) {
    // console.log('validateCon----');
    // console.log(typeof req.body[2]); // string
    // 注意键名
    let username = req.body[0];
    let password = req.body[1];
    let admin = req.body[2];
    validateServer.queryUserCount(username, password, admin, function (result) {
        console.log('validateCon----');
        console.log(result);
        let num = result[0].num;
        if (num == 1) {
            // 这里用的时vue脚手架 ，无法传递cookie 到html
            // res.cookie('userMessage', {'name': username, 'pwd': password}, {maxAge: 1000 * 60, signed: true});
            res.end('success')
        }
        else {
            res.end('failed')
        }
    })
};

//注册操作
exports.userRegistCheck = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    validateServer.addUserName(username, password, function (result) {
        // console.log('validateCon----');
        // console.log(result);
        if (result == 0) {
            res.json('registerSuccess')
        } else if (result == 1) {
            res.end('registerFailed-->have user')
        } else {
            res.end('error')
        }
    })
};