import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import "../../../Assets/Styles/Contact.css"

export default function Contact() {
    const [successMessage, setSuccessMessage] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ele8bly', 'template_ixyac1k', form.current, '4zjj6UWxop_yPJboE')
        .then((result) => {
            console.log("Message Sent!")
            e.target.reset();
            setSuccessMessage("sent");
            setTimeout(() => {
                setSuccessMessage("");
                }, 5000);
        }, (error) => {
            console.log(error.text);
            setSuccessMessage("error");
            setTimeout(() => {
                setSuccessMessage("");
                }, 5000);
        });
    };

    return (
        <>        
            <div className="Contact">
                <>
                    {
                        successMessage === "sent" ?
                        <div className="notification">
                            <p> Email sent successfully! </p>
                            <div className="progress">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>
                        </div>
                        : successMessage === "error" &&
                        <div className="notification">
                            <p> Error sending your email, try again </p>
                        </div>
                    }
                </>
                <div className="Contact-Container">
                    <div className="thanks">
                        <h1>THANK YOU <br/> FOR YOUR <br/> ATTENTION!</h1>
                    </div>
                    <div className="email">
                        <h1>CONTACT:</h1>
                            <div className="form">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="input-group">
                                        <div className="input">
                                            <label><ion-icon name="person-outline"></ion-icon></label>
                                            <input type="text" name="user_name" placeholder='Name' required/>
                                        </div>
                                        <div className="input">
                                            <label><ion-icon name="at"></ion-icon></label>
                                            <input type="email" name="user_email" placeholder='Email' required/>
                                        </div>
                                        <div className="textarea">
                                            <label><ion-icon name="mail-outline"></ion-icon></label>
                                            <textarea name="message" placeholder="Write your message here" required></textarea>
                                        </div>
                                    </div>
                                    <button className="button" type="submit" value="Send" required>Sent</button>
                                </form>
                            </div>
                            <div className="others">
                                <p> OTHERS WAYS: </p>
                                <a href="https://wa.me/5521985712371" target="_blank" rel="noreferrer">
                                    <ion-icon name="logo-whatsapp"></ion-icon>
                                </a>
                                <a href="https://www.linkedin.com/in/thaisfreis/" target="_blank" rel="noreferrer">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </>
      )
  }