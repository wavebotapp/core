//=================================userEmail.js================================
const path = require("path")
const nodemailer = require('nodemailer');
const fs = require('fs');
const handlebars = require('handlebars');
const HTTP = require("../constants/responseCode.constant")



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
    try {
        return new Promise(async resolve => {
            const templetpath = 'otp.html'
            // fs.readFile(templetpath, { encoding: 'utf-8' }, function (err, html) {

            // var template = handlebars.compile(html);
            // var htmlToSend = template({ username: data.name, email: data.email, otp: data.otp });

            var mailOptions = {
                from: 'test.project7312@gmail.com',
                to: data.email,
                subject: 'Email OTP Verification',
                html: `<p>Please verify your OTP : <h1>${data.otp}</h1></p>`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log("error" + error)
                    return ({ status: false, data: [], message: 'Could not send mail!',error });
                } 
                console.log("info " + info)
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                return ({ status: true, data: [], message: 'mail sent!.' });
            });

        })

        // })
    } catch (e) {
        console.log(e)
        return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.INTERNAL_SERVER_ERROR, "message": "Unable to send email!", data: {} })
    }

}

module.exports = {
    sendMail,
}