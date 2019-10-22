const jwt = require('jsonwebtoken')

// let payload = {
//     uid: 123,
//     name: `hehe`,

// }
// let screat = 'sfwqfqfk'
//     // 签名 生成一个token
//     // var token = jwt.sign(payload, screat, { expiresIn: 15 })
// let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEyMywibmFtZSI6ImhlaGUiLCJpYXQiOjE1Njc5NTU4NTIsImV4cCI6MTU2Nzk1NTg2N30.LKqr4tlgKa9W1u-8YuOhviU7RiJ2QxUE4jDRhfuM08c'
// jwt.verify(token, screat, (err, data) => {
//     console.log(err, data)
// })
const screat = 'fafqfafqfwqfqfe'
module.exports = {
    createToken(payload, expires) {
        let token = jwt.sign(payload, screat, { expiresIn: expires })
        return token
    },
    verify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, screat, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}