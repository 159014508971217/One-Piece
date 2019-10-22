// 启动文件


const express = require('express')
const app = express()
    // 引入Fs
const fs = require('fs')
    // 引入path
const path = require('path')
    // 引进库
const db = require('./db/connect')
    // post解析
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    // 引进文件
const fileRouter = require('./router/addminFileRouter')
const userRouter = require('./router/adminUserRouter')
const foodsRouter = require('./router/adminFoodRouter')
    // 路由
app.use('/admin/user', userRouter)
app.use('/admin/food', foodsRouter)
app.use('/admin/file', fileRouter)
    // 静态资源路径
app.use('/public', express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, './www')))
app.listen(3000, () => {
    console.log('server start')
})

const request = require('request')
const cors = require('cors')
app.use(cors())
app.get('/cors', (req, res) => {
    let url = `https://www.duitang.com/category/?cat=food `
    request(url, (err, response, body) => {
        res.send(body)
    })
})