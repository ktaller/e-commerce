import React from "react";
import './About.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-info">
        <div className="contact-detail">
          <i className="fa fa-phone"></i>
          <p>Call Us: +254 712 345 678</p>
        </div>
        <div className="contact-detail">
          <i className="fa fa-envelope"></i>
          <p>Email: starshop@mail.com</p>
        </div>
        <div className="contact-detail">
          <i className="fa fa-map-marker"></i>
          <p>Address: 1234 E-Star St, Ke</p>
        </div>
      </div>

      <div className="form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default Contact;
