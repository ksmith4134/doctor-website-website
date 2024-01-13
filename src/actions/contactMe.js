"use server";

import nodemailer from "nodemailer";

export async function contactMe(prevState, formData) {
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

    const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        subject: `New Contact Request from Doctor website`,
        html: `${data.name}<br>${data.email}`,
    };

    const sendMailPromise = () => 
        new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve("Email sent! We'll be in touch soon.");
                } else {
                    reject("Error. Please try again.");
                }
            });
        });
    
    try {
        const response = await sendMailPromise();
        return {
            message: {
                body: `${response}`,
                type: "success",
            },
        }; 
    } catch (error) {
        return {
            message: {
                body: `${error}`,
                type: "error",
            },
        };
    }
    
}