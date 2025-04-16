import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = form.current['from_email'].value;

    if (!emailRegex.test(emailInput)) {
      alert('Please enter a valid email address');
      return;
    }

    emailjs
      .sendForm('service_75m5tdc', 'template_k5k792q', form.current, 'WUuOl9gFPqq5685bg')
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          alert('Message sent successfully! Thank you for reaching out.');
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contactleft">
        <h1 className="Contact-heading">GET IN TOUCH</h1>
        <br />
        <br />
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className='contact-fields '>
            <label htmlFor="first_name">First Name*</label>
            <br />
            <br />
            <input name="first_name" id="first_name" className="contact-inputs" type="text" required />
            <br />
            <br />
          </div>
          <div className='contact-fields lastname'>
            <label htmlFor="last_name">Last Name</label>
            <br />
            <br />
            <input name="last_name" id="last_name" className="contact-inputs" type="text" />
            <br />
            <br />
          </div>
          <div className='contact-fields'>
            <label htmlFor="from_email">Email*</label>
            <br />
            <br />
            <input name="from_email" id="from_email" className="contact-inputs" type="email" required />
            <br />
            <br />
          </div>
          <div className='contact-fields subject'>
            <label htmlFor="from_subject">Subject</label>
            <br />
            <br />
            <input name="from_subject" id="from_subject" className="contact-inputs" type="text" />
          </div>
          <div className='contact-fields message'>
            <label htmlFor="message">Message</label>
            <br />
            <br />
            <textarea  name="message" id="message"></textarea>
            <br />
            <br />
          </div>
          <br />
          <input
            className="contact_btn"
            style={{ width: '30%', height: '8vh', backgroundColor: '#CC3D00', border: '0px', color: '#fff' }}
            type="submit"
            value="Send"
          />
        </form>
      </div>
      <div className="contactright">
        <img className="contact_img" src="/Resorces/contactimg.webp" alt="" />
      </div>
    </div>
  );
};

export default Contact;
