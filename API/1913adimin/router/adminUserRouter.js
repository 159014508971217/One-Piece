// 路由
const express = require('express')
const router = express.Router()
    // 引入用户的数据模型
const User = require('../db/model/user')
    // 引入发验证码的接口
const Mail = require('../utils/mail')

// 
const Jwt = require('../utils/jwt')
    //用来保存验证码
var codes = {}


// 验证邮箱账号
router.post('/checkMail', (req, res) => {
    let { us } = req.body
    User.find({ us })
        .then((data) => {
            if (data.length) {
                res.send({ err: 0, msg: '邮箱已占用' })
            } else {
                res.send({ err: -1, msg: '您还没有注册请发送验证码注册' })
            }
        })
        .catch((err) => {
            console.log(err, 'no ok')
        })
})

// 发送验证码
router.post('/sendMail', (req, res) => {
    let us = req.body.us
    let code = parseInt(Math.random() * 9000) + 1000
    codes.us = code
        // Mail.send(us, code, (state) => {
        //     if (state === 1) {
        //         res.send({ err: 0, msg: '发送成功' })
        //     } else {
        //         res.send({ err: 1, msg: '发送失败' })
        //     }
        // })
    Mail.send(us, code)
        .then(() => {
            res.send({ err: 0, msg: '发送成功' })
        })
        .catch(() => {
            res.send({ err: 1, msg: '发送失败' })
        })
})

// 注册接口
router.post('/reg',

    // 添加一个中间件（拦截器）验证验证码
    (req, res, next) => {
        let { us, code } = req.body
        console.log(req.body)
        console.log(code, codes, codes.us)
            // 比较我随即生成的验证码跟用户输入的是否一致
        if (code - 0 === codes.us - 0) {
            next()
        } else {
            res.send({ err: -1, msg: '验证码错误' })
        }
    }, (req, res) => {
        let { us, ps } = req.body
        console.log(req.body)
        User.insertMany({ us, ps })
            .then(() => {
                res.send({ err: 0, msg: '注册成功' })
            })
            .catch(() => {
                res.send({ err: -2, msg: '系统错误注册失败' })
            })
    })



// 登录接口
router.post('/login', (req, res) => {
    let { us, ps } = req.body
    console.log({ us, ps })
    User.find({ us, ps })
        .then((data) => {
            if (data.length === 1) {
                let token = Jwt.createToken({ uid: data._id }, 7 * 24 * 60 * 60)
                res.send({ err: 0, msg: 'login ok', token: token })
            } else {
                res.send({ err: -1, msg: 'login nook' })
            }
        })
        .catch((err) => {
            res.send({ err: -1, msg: '内部错误' })
        })
})

module.exports = router