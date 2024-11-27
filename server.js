import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import nodemailer from "nodemailer";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  fname: String,
  lname: String,
  rollno: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});
const User = model("User", userSchema);

// Database connection
mongoose.connect('mongodb+srv://Manognan:6CRGxHt8PziE2BIe@campuscurrency.jcr2j.mongodb.net/?retryWrites=true&w=majority&appName=CampusCurrency', 
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Token authentication middleware
function tokenauth(req, res, next) {
  const token = req.cookies.accesstoken; // Accessing token from cookies
  if (!token) return res.status(401).send("Access Denied");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, email) => {
    if (err) return res.status(403).send("Invalid Token");
    req.email = email;
    console.log("Token verified");
    next();
  });
}

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generate OTP function
function otp_() {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10).toString();
  }
  return otp;
}
let otp = "";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login/login1.html");
});

// Routes
app.get("/cssl", (req, res) => {
  res.sendFile(__dirname + "/public/login/stylelogin.css");
});

app.get("/back.jpg", (req, res) => {
  res.sendFile(__dirname + "/public/login/back.jpg");
});

app.get("/csscr", (req, res) => {
  res.sendFile(__dirname + "/public/login/stylecr.css");
});

app.get("/cssfp", (req, res) => {
  res.sendFile(__dirname + "/public/login/styleforgotpass.css");
});

app.get("/cssr", (req, res) => {
  res.sendFile(__dirname + "/public/login/stylereset.css");
});

app.get("/cr", (req, res) => {
  res.sendFile(__dirname + "/public/login/createacc.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login/login1.html");
});

app.get("/home", tokenauth, (req, res) => {
  res.sendFile(__dirname + "/public/home/website.html");
});

app.get("/ieee", tokenauth, (req, res) => {
  res.sendFile(__dirname + "/public/home/ieee.html");
});

app.get("/logout", (req, res) => {
  res.clearCookie("accesstoken");
  res.sendFile(__dirname + "/public/login/login1.html");
});

// Login route
// app.post("/", async (req, res) => {
//   try {
//     const user = await User.findOne(
//       { email: req.body.email },
//       { _id: 0, lname: 0, fname: 0, rollno: 0, __v: 0 }
//     );
//     if (user && (await bcrypt.compare(req.body.password, user.password))) {
//       const token = jwt.sign(
//         { email: req.body.email },
//         process.env.ACCESS_TOKEN_SECRET
//       );
//       res.cookie("accesstoken", token);
//       res.sendFile(__dirname + "/public/home/website.html");
//       console.log("Token sent");
//     } else {
//       res.status(401).send("Invalid email or password");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.post("/", async (req, res) => {
    try {
        const user = await User.findOne(
            { email: req.body.email },
            { _id: 0, lname: 0, fname: 0, rollno: 0, __v: 0 }
        );

        if (user && (await bcrypt.compare(req.body.password, user.password))) {
            const token = jwt.sign(
                { email: req.body.email },
                process.env.ACCESS_TOKEN_SECRET
            );
            res.cookie("accesstoken", token);
            // Redirect to a different route (e.g., home page) to prevent resubmission on refresh
            res.redirect("/home");
        } else {
            // Show an error message on the login page
            res.render("login", { errorMessage: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Reset password route
app.post("/rp", async (req, res) => {
  try {
    if (req.body.new_pass1 === req.body.new_pass2) {
      const hashedPassword = await bcrypt.hash(req.body.new_pass1, 10);
      const user = await User.findOne({ email: req.body.email });

      if (user) {
        user.password = hashedPassword;
        await user.save();
        res.sendFile(__dirname + "/public/login/login1.html");
      } else {
        res.status(401).send("No user detected");
      }
    } else {
      res.status(400).send("Passwords do not match");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Create new user route
app.post("/c", async (req, res) => {
  try {
    const { password, rollno, ...userData } = req.body;
    userData.password = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ rollno });

    if (!existingUser) {
      const newUser = new User({ ...userData, rollno });
      await newUser.save();
      res.sendFile(__dirname + "/public/login/login1.html");
    } else {
      res.status(400).send("User already exists");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Send OTP route
app.post("/sendotp", async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });

    if (user) {
      otp = otp_();
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset",
        text: `Your OTP is ${otp}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).send("Failed to send OTP");
        } else {
          console.log("Email sent: " + info.response);
          res.sendFile(__dirname + "/public/login/forgot.html");
        }
      });
    } else {
      res.status(404).send("Email not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Verify OTP route
app.post("/reset", (req, res) => {
  if (req.body.otp === otp) {
    res.sendFile(__dirname + "/public/login/reset.html");
  } else {
    console.log("Invalid OTP");
    res.status(400).send("Invalid OTP");
  }
});

app.get("/forgotpass", (req, res) => {
  res.sendFile(__dirname + "/public/login/forgot.html");
});

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server started at http://localhost:${port}`);
  }
});
