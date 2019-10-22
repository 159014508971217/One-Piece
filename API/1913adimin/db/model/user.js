// 和用户相关的信息   schema对象和用户模型

// 引进第三方模块 用来操作数据库
const mongoose = require('mongoose')
    // 创建schema对象
const userSchema = mongoose.Schema({
        // 告诉我们账号和密码是字符串类型跟必填项
        us: { type: String, required: true },
        ps: { type: String, required: true },
        age: { type: Number, default: 0 } //age默认值为0
    })
    // 转化成数据模型
const model = mongoose.model('users', userSchema)
    // 抛出这个数据模型
module.exports = model