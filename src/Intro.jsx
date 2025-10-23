import Header from "./Header";
import Footer from "./Footer";

function Intro() {
  return (
    <>
    <Header />
      <section className="about-me-section">
        <div className="about-image-container">
          <img
            src="images/intro.png"
            alt="Mary Hardy"
            className="profile-photo"
          />
        </div>
        <div className="about-content">
          <p className="section-tag">My Intro</p>
          <h2 className="section-title">About Me</h2>
          <p className="description-text">
            Hello! I'm Sachin, a passionate and dedicated Full Stack Developer
            with a strong interest in creating modern, responsive, and
            user-friendly web applications. I have hands-on experience in HTML,
            CSS, JavaScript, jQuery, React.js, Node.js, Express.js, and MySQL. I
            started my journey in web development with curiosity about how
            websites work, and today I can design and develop complete web
            projects from scratch. I’m always eager to learn new technologies,
            improve my coding skills, and stay updated with the latest trends in
            web development.
          </p>
          <div className="details-section">
            <div className="detail-row">
              <span className="detail-label">📞 Name</span>
              <span className="detail-separator">:</span>
              <span className="detail-value">Sachin Zanzrukiya</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">📞 Phone</span>
              <span className="detail-separator">:</span>
              <span className="detail-value">+91 7016219884</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">📧 Email</span>
              <span className="detail-separator">:</span>
              <span className="detail-value">zsachin219@gmail.com</span>
            </div>
          </div>
          <h3 className="interests-title">My Interests</h3>
          <div className="interests-container">
            <span className="interest-tag">🎵 Music</span>
            <span className="interest-tag">✈️ Travel</span>
            <span className="interest-tag">🎬 Movie</span>
            <span className="interest-tag">📷 Photo</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Intro;