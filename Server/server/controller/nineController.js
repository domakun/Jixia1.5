const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser('lifeissimpebutyoumadeitcomplicated'));
const nineScenicS = require('../service/nineScenicS.js');

exports.getNineScenic = function (req, res) {
    let count = req.query.count;
    // console.log(count)
    nineScenicS.queryNineS(count,function (result) {
        res.json(result)
    })
}