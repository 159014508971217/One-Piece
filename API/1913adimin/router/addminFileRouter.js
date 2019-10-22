// 引入写接口的第三方文件
const express = require('express')
    // 写上路由
const router = express.Router()
const fs = require('fs')
const path = require('path')
    // 上传图片必须用post方法
    // const bodyparser = require('body-parser')
    // app.use(bodyParser.urlencoded({ extended: false }))
    // app.use(bodyParser.json())
    // 引入上传文件的第三方模块
const multer = require('multer')
router.post('/img', multer().single('hehe'), (req, res) => {
    console.log(req.file)
    let { buffer, mimetype, originalname } = req.file
        // 类型判断
        // 有可能出现的后缀名
    let type = ['gif', 'jpg', 'jpeg', 'png']
    let filetype = mimetype.split('/')[1]
    if (type.indexOf(filetype) === -1) {
        return res.send({ err: -2, msg: '文件类型格式错误 请重新上传' })
    }
    // 获取上传图片的后缀名
    let extname = path.extname(originalname) // 不靠谱

    // 尺寸判断 (一般由前端做)

    // 给上传的文件生成一个随即名
    let filename = (new Date()).getTime() + parseInt(Math.random() * 2424)
    fs.writeFile(path.join(__dirname, `../public/img/${filename }${extname}`), buffer, (err) => {
        if (err) {
            res.send({ err: -1, msg: '上传失败 请重新上传' })
        } else {
            // http://localhost:3000/public/img/hehe.jpg
            res.send({ err: 0, msg: '上传成功', imgpath: `public/img/${filename }${extname}` })
        }
    })
})
module.exports = router