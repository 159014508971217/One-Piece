// 链接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/1913', { useNewUrlParser: true })
    // const data = require('./home')

var db = mongoose.connection;
db.on('error', (err) => {
    console.log('db no ok')
});

db.once('open', function() {
    console.log('连接成功')
});