const validateServer = require('../service/validateServer');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser('lifeissimpebutyoumadeitcomplicated'));

//登录控制
exports.userLoginCheck = function (req, res) {
    // 注意键名
    let username = req.body[0];
    let password = req.body[1];
    let admin = req.body[2];
    validateServer.queryUserCount(username, password, admin, function (result) {
        let pwd = result[0].user_pwd;
        if (pwd == password) {
            console.log('>>>>num',result[0])
            res.cookie('userMessage',{'name': username,'user_id':result[0].user_id})
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