import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import { signUpHandler } from "./signup/handler";

dotenv.config();

const app = express();
const PORT = process.env.BACKEND_PORT
  ? parseInt(process.env.BACKEND_PORT, 10)
  : 3001;

app.use(cors());
app.use(express.json());

// Create Nodemailer transporter (credentials hidden in .env)
const resend = new Resend(process.env.RESEND_API_KEY);

// POST /api/signup endpoint
app.post("/api/signup", async (req: Request, res: Response) => {
  await signUpHandler(resend, req, res);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
