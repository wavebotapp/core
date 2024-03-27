//=================================userEmail.js================================
const path = require("path")
const nodemailer = require('nodemailer');
const fs = require('fs');
const handlebars = require('handlebars');

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    service: 'gmail',
    auth: {
        user: 'test.project7312@gmail.com',
        pass: 'whwo afoz xzuc trkh'
    }
});

const sendMail = (data) => {
    console.log("🚀 ~ file: useremail.js:37 ~ sendMail ~ data:", data)
    const templetpath = path.join(__dirname, '..', '/emailtemplets/otp_template.html')
    console.log("🚀 ~ file: useremail.js:40 ~ sendMail ~ templetpath:", templetpath)
    fs.readFile(templetpath, { encoding: 'utf-8' }, function (err, html) {

        var template = handlebars.compile(html);
        var htmlToSend = template({ username: data.name, email: data.email, otp: data.otp });

        var mailOptions = {
            from: 'test.project7312@gmail.com',
            to: data.email,
            subject: 'Email OTP Verification',
            html: htmlToSend
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('Email sent successfully');
            }
        });
    })
}


module.exports = {
    sendMail,
}