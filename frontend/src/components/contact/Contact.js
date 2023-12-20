import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c29wecb', 'template_c1hxjfj' , form.current, '2RxoX9SdfTszmDr2_')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='form'>
    <h1 className='contactFormHeader'>CONTACT OUR GYM IN BURLINGTON, NC</h1>
    <div className='contactFormWrapper'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='contactForm'>
            <label>Name:</label>
            <input type="text" name="user_name" required/>
            <label>Email:</label>
            <input type="email" name="user_email" required/>
            <label>Message:</label>
            <textarea name="message" required/>
            <input className='button' type="submit" value="Send" />
        </div>
      </form>
    </div>
    </div>
  );
};