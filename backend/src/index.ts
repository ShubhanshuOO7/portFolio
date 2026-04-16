import express from "express";
import nodemailer from "nodemailer"
import { json } from "node:stream/consumers";
import { formSchema } from "./types.js";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json())
app.post("/api/v1/user/sendMail",async(req,res)=>{
    try {
        const result = formSchema.safeParse(req.body);
        if(!result.success){
            return res.status(400).json({
                message: "Inputs are incorrect"
            })
        }
        const {name,email,desc} = result.data
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sahil5220414@gmail.com",
                pass: process.env.MAIL_PASS
            }
        })
        const mailOptions = {
            from : "sahil5220414@gmail.com",
            to: "sahil5220414@gmail.com",
            subject: "Message from portfolio",
            text: `${name} (${email}) says: ${desc}`,
            replyTo: email
        }
        await transporter.sendMail(mailOptions)
        res.status(200).json({
            message: "Email sent successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to send email"
        })
    }
})
app.listen(3000,()=>{
    console.log("Server running on port 3000")
})