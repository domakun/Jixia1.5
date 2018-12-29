const validateCheck = require('../module/validateCheck');

//登录匹配用户，只有 1 和 0
exports.queryUserCount = function (username, password,admin, func) {
    validateCheck.matchLogin(username,password,admin,function (result) {
        func(result)
    })
};

//注册添加匹配
exports.addUserName = function (username, password, func) {
    validateCheck.matchRegist(username,password,function (result) {
        func(result)
    })
};