// 用来发送邮件
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "1217678365@qq.com", // generated ethereal user
        pass: "jzbgafghszunhaci" // generated ethereal password
    }
});
module.exports = {
    send(mail, code) {
        let info = {
            from: '"Fred Foo 👻" 1217678365@qq.com', // sender address
            to: mail, // list of receivers
            subject: 'Hello ✔', // Subject line
            // text: '你好!', // plain text body
            html: `<h3>欢迎注册您的验证码是：${code}</h3>` // html body
        }
        return new Promise((resolve, reject) => {
            transporter.sendMail(info, (err, result) => {
                if (err) { reject() } else { resolve() }
            })
        })

    }
}