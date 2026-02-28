import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const recipientEmail = process.env.REACT_APP_CONTACT_EMAIL;
  const formAction = recipientEmail ? `https://formsubmit.co/${recipientEmail}` : '#';

  const handleMissingConfig = (e) => {
    if (!recipientEmail) {
      e.preventDefault();
      if (process.env.NODE_ENV === 'development') {
        window.alert('Set REACT_APP_CONTACT_EMAIL in your .env file to receive messages.');
      } else {
        window.alert('Contact form is temporarily unavailable.');
      }
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <form className="contact-form" action={formAction} method="POST" onSubmit={handleMissingConfig}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Portfolio Contact Form Message" />
            <input type="hidden" name="_template" value="table" />
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" autoComplete="name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" autoComplete="email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>

          <div className="social-links">
            <a
              href="https://github.com/vijayasri-manda"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vijaya-sri-manda-399a56343/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/VijayasriM16410"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter (X)"
              title="Twitter (X)"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/ambivert34/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
