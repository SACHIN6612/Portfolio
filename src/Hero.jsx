import Header from './Header'
import Footer from './Footer'
import './style.css'

function Hero() {
  return (
    <>
    <Header />
      <div classname="hero-portfolio-section">
        <div classname="hero-portfolio-content">
          <p classname="greeting">Hi, I am</p>
          <h1 classname="name">Sachin Zanzrukiya</h1>
          <h2 classname="role">Frontend Developer</h2>
          <p classname="description">
            Hi, I'm Sachin, a passionate Frontend Developer with hands-on
            experience in building responsive and user-friendly websites. I
            specialize in HTML, CSS, JavaScript, React.js.
          </p>
          <div classname="cta-buttons">
            <a
              href="./Sachin_Zanzrukiya_Resume.pdf"
              target="_blank"
              classname="btn-cv"
            >
              Download CV
            </a>
            <a href="#" classname="btn-contact">
              Contact Me
            </a>
          </div>
        </div>
        <div classname="hero-portfolio-image-container">
          <img
            src="images/photo.png"
            alt="Sachin Zanzrukiya Profile"
            classname="profile-image"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Hero;