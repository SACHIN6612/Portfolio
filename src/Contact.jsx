import Footer from "./Footer";
import Header from "./Header";

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-heading">
          <span className="highlight">Get in Touch</span>
          <div className="title">Contact Me</div>
        </div>
        <div className="contact-box">
          <div className="contact-left">
            <div className="info-title">Let's Talk</div>
            <div className="info-text">
              I’d love to hear from you! Fill out the form and I’ll get back to
              you soon.
            </div>
            <div className="contact-details">
              <div>
                <span>📧</span> zsachin219@gmail.com
              </div>
              <div>
                <span>📞</span> +91 7016219884
              </div>
              <div>
                <span>📍</span> Vadodara, Gujarat
              </div>
            </div>
          </div>
          <div className="contact-right">
            <div className="input-group">
              <input
                type="text"
                className="input-field"
                placeholder="Your Name"
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                className="input-field"
                placeholder="Your Email"
              />
            </div>
            <div className="input-group">
              <textarea
                className="input-field"
                placeholder="Your Message"
                defaultValue={""}
              />
            </div>
            <div className="button-wrapper">
              <button className="send-btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;