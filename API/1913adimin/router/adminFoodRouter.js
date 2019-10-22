const express = require('express')
const router = express.Router()
    // 引入用户的数据模型
const Food = require('../db/model/food')
    // 查询商品接口
router.get('/getFoods', (req, res) => {
        let obj = req.query
        Food.find(obj)
            .then((data) => {
                res.send({ err: 0, msg: '获取信息', list: data })
            })
    })
    // 添加商品接口
router.get('/addFoods', (req, res) => {
    let { name, price, img, foodtype, desc } = req.query
    Food.insertMany({ name, price, img, foodtype, desc })
        .then((data) => {
            console.log(data)
            res.send({ err: 0, msg: '获取信息', list: data })
        })
})

// 删除一条数据
router.get('/deletFood', (req, res) => {
    let { _id } = req.query
    Food.deleteOne({ _id })
        .then((data) => {
            res.send({ err: 0, msg: '删除ok' })
        })
})

// 分页 + 分类 + 关键字查询
router.get('/getFoodsBypage', (req, res) => {
    let page = req.query.page || 1
    let pageSize = req.query.pageSize || 3
    let count = 0
    let wk = req.query.kw
    let foodtype = req.query.foodtype
    let obj = {}
    if (foodtype) {
        obj.foodtype = foodtype
    } else if (wk) {
        let reg = RegExp(wk)
        obj.$or = [{ name: { $regex: reg } }, { desc: { $regex: reg } }]
    }
    Food.find(obj)
        .then((data) => {
            count = data.length
            return Food.find().skip((page - 1) * pageSize).limit(pageSize - 0)
        })
        .then((data) => {
            res.send({ err: 0, msg: '获取ok', list: data, count: count })
        })
})

// 分类
// router.get('/getFoodstype', (req, res) => {
//     let { foodtype } = req.query
//     Food.find({ foodtype })
//         .then((data) => {
//             res.send({ err: 0, msg: '查询ok', list: data })
//         })
// })


/*
// 模糊查询（关键字查询）
router.get('/getFoodskw', (req, res) => {
    let { kw } = req.query
        // 创建正则对象
    let reg = RegExp(kw)
        // $regex mongodb 自带的 拿来直接用就行验证正则的
        // 并集查询正则 $or:[{}, {}]
    Food.find({ $or: [{ name: { $regex: reg } }, { desc: { $regex: reg } }] })
        .then((data) => {
            res.send({ err: 0, msg: '查询ok', list: data })
        })
})
*/

// 修改商品接口
router.get('/updateFoods', (req, res) => {
    let { _id, name, price, img, foodtype, desc } = req.query
    Food.updateOne({ _id: _id }, { name, price, img, foodtype, desc })
        .then((data) => {
            res.send({ err: 0, msg: '修改信息ok' })
        })
})

module.exports = router