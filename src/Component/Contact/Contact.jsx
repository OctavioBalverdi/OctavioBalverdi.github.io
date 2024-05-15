import React from 'react'
import './contact.css'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp, FaFacebookMessenger  } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ag2j6y8', 'template_9y5e1hm', form.current, {
          publicKey: 'abz47BiCsBb2Acdxo',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
      <div className="contact_options">
      <article className="contact_option">
      <MdOutlineMarkEmailUnread className='contact_option-icon'/>
      <h4>Email</h4>
      <h5>akinators22@gmail.com</h5>
        <a href="mailto:octaviobalverdi2013@hotmail.com" target='_blank' >Send a menssage</a>
        </article>
        <article className="contact_option">
      <FaWhatsapp className='contact_option-icon'/>
      <h4>Whatsapp</h4>
      <h5>54 011 564 4564</h5>
        <a href="https://api.whatsapp.com/send?phone=543816442730" target='_blank'>Send a menssage</a>
        </article>
        <article className="contact_option">
      <FaFacebookMessenger className='contact_option-icon'/>
      <h4>Messenger</h4>
      <h5>dummyegator</h5>
        <a href="https://m.me/octavio.balverdi/" target='_blank'>Send a menssage</a>
        </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        </div>
    </section>
  )
}

export default Contact