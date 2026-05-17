import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  res.send("Backend Server Running 🚀");
});

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      replyTo: email,

      to: process.env.EMAIL_USER,

      subject: `Portfolio Message From ${name}`,

      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>New Portfolio Message 🚀</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email Sent Successfully",
    });
  } catch (error) {
    console.log("EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed To Send Email",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});