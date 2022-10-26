import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import "./Contact.css"

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
                            <p> Email enviado com sucesso! </p>
                            <div className="progress">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>
                        </div>
                        : successMessage === "error" &&
                        <div className="notification">
                            <p> Erro ao enviar seu email, tente de novo </p>
                        </div>
                    }
                </>
                <h1>OBRIGADO PELA ATENÇÃO!</h1>
                <div className="Contact-Container">
                    <div className="email">
                        <h1>ENTRE EM CONTATO:</h1>
                        <div className="form">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="input-group">
                                    <div className="input">
                                        <label><ion-icon name="person-outline"></ion-icon></label>
                                        <input type="text" name="user_name" placeholder='Nome' required/>
                                    </div>
                                    <div className="input">
                                        <label><ion-icon name="at"></ion-icon></label>
                                        <input type="email" name="user_email" placeholder='Email' required/>
                                    </div>
                                    <div className="textarea">
                                        <label><ion-icon name="mail-outline"></ion-icon></label>
                                        <textarea name="message" placeholder='Escreva sua mensagem'/>
                                    </div>
                                </div>
                                <button className="button" type="submit" value="Send" required>Enviar</button>
                            </form>
                        </div>
                    </div>
                    <div className="contacts">
                        <a href="https://wa.me/5521985712371" target="_blank" rel="noreferrer">
                            <div className="phone">
                                <h1>NÚMERO DO CELULAR</h1>
                                <h2>+55 (21) 98571-2371</h2>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/thaisfreis/" target="_blank" rel="noreferrer">
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