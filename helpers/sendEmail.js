const sgMail = require("@sendgrid/mail");

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
    try {
        const mail = { ...data, from: "yourchuk922@gmail.com"};
        await sgMail.send(mail);
        return true;
    }
    catch (error) {
    return console;
    }
}

module.exports = sendEmail;