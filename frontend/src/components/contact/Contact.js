import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contactFormWrapper'>
    <h1 className='contactFormHeader'>CONTACT OUR GYM IN BURLINGTON, NC</h1>
    <form ref={form} onSubmit={sendEmail}>
    <div className='contactForm'>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className='button' type="submit" value="Send" />
    </div>
    </form>
    </div>
  );
};