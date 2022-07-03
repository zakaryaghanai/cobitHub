const nodemailer  = require('nodemailer');
const {config, defaults} = require('./config');
const transporter = nodemailer.createTransport(config, defaults);

function sendVerificationEmail(user, data){
    transporter.verify(function (err) {
        if (err) {
            return false
        }

        transporter.sendMail({
            to: user.email,
            subject: data.subject,
            text: data.text,
            html: data.html
        }).then(() => {

        })
    });
}

module.exports = {
    sendVerificationEmail
}