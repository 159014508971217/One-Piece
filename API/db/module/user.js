const mongoose = require('mongoose')
// const express = require('express')
const user = mongoose.Schema({
    us: {type: String, required: true},
    ps: {type: String, required: true},
})
const model = mongoose.model('users', user)
module.exports = model
// let user = {
//     err: '',
//     msg: '',
//     token: '',
//     uid: ''
// }