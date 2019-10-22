const express = require('express')

const router = express.Router()
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false })) //解析表单数据格式
router.use(bodyParser.json())  //解析json数据格式

const User = require('../db/module/user')
// 登录接口
router.post('/reg', (req, res) => {
    let {us, ps} = req.body
    User.insertMany({us, ps})
    .then (() => {
        res.send({err: 0})
    })
    .catch (() => {
        res.send({err: 1})
    })
})
router.get('/login', (req, res) => {
    let { us, ps } = req.query
    User.findOne({ us, ps })
        .then((data) => {
            res.send({err: 0, msg: '获取成功', uid: data._id, token: '7758521'})
        })
        .catch(() => {
            res.send({err: 1})
        })
})
module.exports = router

