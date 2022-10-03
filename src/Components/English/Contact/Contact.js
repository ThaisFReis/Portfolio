import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Menu from "../Menu/Menu"
import "./Contact.css"
import Scroll from "../../../Assets/scrolldown.png"

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ele8bly', 'template_ixyac1k', form.current, '4zjj6UWxop_yPJboE')
        .then((result) => {
            console.log(result.text);
            console.log("Message Sent!")
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>        
        <Menu />
            <div className="Contact">
                <h1>THANKS FOR ATTENTION!</h1>
                <div className="Contact-Container">
                    <div className="email">
                        <h1>EMAIL:</h1>
                        <h2>Contact me:</h2>
                        
                        <div className="form">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="input-group">
                                    <label>Name</label>
                                    <input type="text" name="user_name" placeholder='Name'/>
                                    <label>Email</label>
                                    <input type="email" name="user_email" placeholder='Email'/>
                                    <label>Message</label>
                                    <textarea name="message" placeholder='Write your message'/>
                                </div>
                                <button className="button" type="submit" value="Send">Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="contacts">
                        <a href="https://wa.me/5521985712371" target="_blank">
                            <div className="phone">
                                <h1>PHONE NUMBER</h1>
                                <h2>+55 (21) 98571-2371</h2>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/thaisfreis/" target="_blank">
                            <div className="linkedin">
                                <h1>LINKEDIN:</h1>
                                <h2>linkedin.com/in/thaisfreis</h2>
                            </div>   
                        </a>      
                    </div>
                </div>
            </div>
        </>
      )
  }