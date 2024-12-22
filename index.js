const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.post('/contact',function(req,res,next){
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'khus123523@gmail.com',
        pass: 'flxt nwzm ewtx rtjt'
      }
    });
    
    var mailOptions = {
      from: 'khus123523@gmail.com',
      name:req.body.name,
      to: req.body.email,
      subject: req.body.msg,
      text: `Name: ${req.body.name}\nEmail: ${req.body.email}\n\nMessage:${req.body.msg}`,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.send("sent!")
      }
    });
  })

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
