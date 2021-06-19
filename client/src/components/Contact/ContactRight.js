import { Button } from "@material-ui/core";
import React, { useState } from "react";
const nodemailer = require("nodemailer");

const ContactRight = () => {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    checked: "",
    finalMessage: "",
  });

  const handleOnChange = () => {
    const ml = { ...mail };
    ml.name = document.getElementById("name").value;
    ml.email = document.getElementById("email").value;
    ml.phone = document.getElementById("phone").value;
    ml.message = document.getElementById("message").value;
    ml.checked = "I am interested in ";
    for (let i = 1; i < 5; i++) {
      if (document.getElementById(`solution${i}`).checked) {
        ml.checked =
          ml.checked + ", " + document.getElementById(`solution${i}`).value;
      }
    }
    ml.checked = ml.checked + " Solutions";
    ml.finalMessage = `    FROM: ${ml.name}, ${ml.email}
    PHONE: ${ml.phone}
    INTEREST: ${ml.checked}
    MESSAGE: ${ml.message}
    `;
    setMail(ml);

    console.log(mail);
    console.log(mail.finalMessage);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: mail.email, // sender address
      to: "ruhanmdkr@gmail.com", // list of receivers
      subject: "Message:", // Subject line
      text: mail.finalMessage, // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  return (
    <>
      <h3>Or Make an Appointment</h3>
      <div className="contact-form">
        <form action="" onSubmit={handleSubmit} className="form-layout">
          <label for="name">Name</label>
          <input
            onChange={handleOnChange}
            className="textInput"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name."
          ></input>
          <label for="email">Email</label>
          <input
            onChange={handleOnChange}
            className="textInput"
            type="text"
            id="email"
            name="email"
            placeholder="Enter your Email."
          ></input>
          <label for="phone">Phone</label>
          <input
            onChange={handleOnChange}
            className="textInput"
            type="phone"
            id="phone"
            name="phone"
            placeholder="Enter your Phone."
          ></input>
          <h4>Which Services are you Interested In?</h4>
          <div className="interestIn">
            <div className="ig">
              <input
                type="checkbox"
                id="solution1"
                name="solution1"
                value="Web"
              />
              <label for="solution1">Web Solution</label>
            </div>
            <div className="ig">
              <input
                type="checkbox"
                id="solution2"
                name="solution2"
                value="Software"
              />
              <label for="solution2">Software Solution</label>
            </div>
            <div className="ig">
              <input
                type="checkbox"
                id="solution3"
                name="solution3"
                value="Hardware"
              />
              <label for="solution3">Hardware Solution</label>
            </div>
            <div className="ig2">
              <input
                type="checkbox"
                id="solution4"
                name="solution4"
                value="Branding"
              />
              <label for="solution4">Branding and Marketing Solutions</label>
            </div>
          </div>
          <label for="message">Message</label>
          <textarea
            onChange={handleOnChange}
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default ContactRight;
