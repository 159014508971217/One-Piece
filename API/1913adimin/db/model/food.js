// 和视频相关的数据

const mongoose = require('mongoose')
const foodSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, default: 0 },
    img: { type: String, required: true },
    foodtype: { type: String, required: true },
    desc: { type: String, default: '真香' }
})
const model = mongoose.model('foods', foodSchema)
module.exports = model