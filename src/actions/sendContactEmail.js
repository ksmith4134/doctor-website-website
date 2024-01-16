"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(prevState, formData) {

    let state = {
        message: {
            body: "",
            type: "",
        },
        count: 0,
        disable: false,
    };

    const disableThreshold = 2;

    if(prevState.count >= disableThreshold){
        state.message.body = "Form is temporarily deactivated. Try again later.";
        state.message.type = "warn";
        state.count = prevState.count + 1;
        state.disable = true;
        return state;
    }

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
    };

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const options = {
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        subject: `New Contact Request from Doctor Website`,
        html: `${data.name}<br>${data.email}`,
    };

    const sendMail = () => 
        new Promise((resolve, reject) => {
            transporter.sendMail(options, function (err) {
                if (!err) {
                    resolve("Email sent! We'll be in touch soon.");
                } else {
                    reject("Error. Please try again."); // err.message
                }
            });
        });
    
    try {
        const response = await sendMail();
        state.message.body = `${response}`;
        state.message.type = "success";
        state.count = prevState.count + 1;
        return state;
    } catch (error) {
        state.message.body = `${error}`;
        state.message.type = "error";
        state.count = prevState.count + 1;
        return state;
    }
    
}