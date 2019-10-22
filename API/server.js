const express = require('express')
const app = express()
const db = require('./db/connect')
// const User = require('./router/add')
const Admin = require('./router/admin')
app.use('/admin/login', Admin)
app.listen(3000, () => {
    console.log('server start')
})