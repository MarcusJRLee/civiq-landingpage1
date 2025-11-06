import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import { signUpHandler } from "./signup/handler";

dotenv.config();

const app = express();
const PORT = process.env.BACKEND_PORT || 3001;

app.use(cors()); // Allow requests from your Vite dev server[](http://localhost:5173)
app.use(express.json());

// Create Nodemailer transporter (credentials hidden in .env)
const resend = new Resend(process.env.RESEND_API_KEY);

// POST /api/signup endpoint
app.post("/api/signup", async (req, res) => {
  await signUpHandler(resend, req, res);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
