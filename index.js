import express from "express"
import path from "path"
import multer from "multer"
import nodemailer from "nodemailer"
import { fileURLToPath } from "url";
import dotenv from "dotenv"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 2002
dotenv.config()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/views/:filename", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views", req.params.filename))
})

const upload = multer({ dest: "uploads/" })

app.post("/submit-form", upload.single("cv"), async (req, res) => {
  const { name, email, message } = req.body
  const cvFile = req.file



  // Konfigurera e-post
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  })
  const mailOptions = {
    from: process.env.EMAIL,
    replyTo: email,
    to: "nicole.ahgren@gmail.com",
    subject: `Jobbansökan från ${name}`,
    text: message,
    attachments: [{ path: cvFile.path }],
  }

  try {
    await transporter.sendMail(mailOptions)
    res.send("Ansökan skickad!")
  } catch (error) {
    console.error(error)
    res.status(500).send("Fel vid e-posthantering.")
  }
})

app.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port}`)
})
