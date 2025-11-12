import "./style.css";
import "../public/images/photo.png";
import "../public/images/intro.png";
import "../public/images/project-1.png";
import "../public/images/project-2.png";
import "../public/images/project-3.png";
import "../public/images/project-4.png";

function App() {
  return (
    <>
      <nav>
        <div className="nav_header">
          <div className="nav_logo">
            <a href="/">
              Sachin<span>.</span>
            </a>
          </div>
          <div className="nav_menu_btn">
            <i className="ri-menu-line" />
          </div>
        </div>
        <ul className="nav_links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/intro">Intro</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/education">Education</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="nav_btns">
          <a className="btn" href="/contact">
            Hire Me
          </a>
        </div>
      </nav>

      <div className="hero-portfolio-section">
        <div className="hero-portfolio-content">
          <p className="greeting">Hi, I am</p>
          <h1 className="name">Sachin Zanzrukiya</h1>
          <h2 className="role">Frontend Developer</h2>
          <p className="description">
            Hi, I'm Sachin, a passionate Frontend Developer with hands-on
            experience in building responsive and user-friendly websites. I
            specialize in HTML, CSS, JavaScript, React.js.
          </p>
          <div className="cta-buttons">
            <a
              href="./Sachin_Zanzrukiya_Resume.pdf"
              target="_blank"
              className="btn-cv"
            >
              Download CV
            </a>
            <a href="#" className="btn-contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-portfolio-image-container">
          <img
            src="images/photo.png"
            alt="Sachin Zanzrukiya Profile"
            className="profile-image"
          />
        </div>
      </div>

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

      <section className="skills-section">
        <h3 className="section-subtitle">Why Choose Me</h3>
        <h2 className="section-title">My Skills Area</h2>
        <div className="skills-container">
          <div className="skill-box">
            <h4>HTML</h4>
            <span>90%</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }} />
            </div>
          </div>
          <div className="skill-box">
            <h4>CSS</h4>
            <span>80%</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }} />
            </div>
          </div>
          <div className="skill-box">
            <h4>JavaScript</h4>
            <span>60%</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "60%" }} />
            </div>
          </div>
          <div className="skill-box">
            <h4>Bootstrap</h4>
            <span>60%</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "60%" }} />
            </div>
          </div>
          <div className="skill-box">
            <h4>jQuery</h4>
            <span>65%</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "65%" }} />
            </div>
          </div>
          <div className="skill-box">
            <h4>React Js(Vite)</h4>
            <span>70%</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="qualification-section">
        <h3 className="section-subtitle">My Qualifications</h3>
        <h2 className="section-title">Awesome Journey</h2>
        <div className="qualification-container">
          {/* Education */}
          <div className="qualification-box">
            <h3>
              <i className="ri-graduation-cap-line" /> Education
            </h3>
            <div className="qualification-item">
              <span className="dot" />
              <div className="text">
                <h4>10th</h4>
                <p>Nutan Vidhyalaya, New Sama Road, Vadodara</p>
                <span className="year">
                  <i className="ri-calendar-line" /> 2017 - 2018
                </span>
              </div>
            </div>
            <div className="qualification-item">
              <span className="dot" />
              <div className="text">
                <h4>12th</h4>
                <p>Nutan Vidhyalaya, New Sama Road, Vadodara</p>
                <span className="year">
                  <i className="ri-calendar-line" /> 2019 - 2020
                </span>
              </div>
            </div>
            <div className="qualification-item">
              <span className="dot" />
              <div className="text">
                <h4>Bachelor of Computer Applications</h4>
                <p>ITM SLS Baroda University, Jarod</p>
                <span className="year">
                  <i className="ri-calendar-line" /> 2020 - 2023
                </span>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div className="qualification-box">
            <h3>
              <i className="ri-briefcase-line" /> Experience &amp; Certificate
              Course
            </h3>
            <div className="qualification-item">
              <span className="dot" />
              <div className="text">
                <h4>Full Stack Development Course</h4>
                <p>Ecare Upskill, Natubhai Circle, Vadodara</p>
                <span className="year">
                  <i className="ri-calendar-line" /> April 2025 - August 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container projects-container">
          <h2 className="section-title">My Projects</h2>
          <p>
            Here are some of my recent projects showcasing my skills in web
            development.
          </p>
          <div className="project-cards">
            <div className="project-card">
              <img src="images/project-1.png" alt="Project 1 Screenshot" />
              <div className="project-content">
                <h3>Furniture E-commerce Website</h3>
                <p className="text">
                  Full-stack Furniture E-commerce platform using React.js,
                  Node.js, Express, and MySQL.
                </p>
                <a
                  href="https://github.com/SACHIN6612/furniture-ecommerce"
                  target="_blank"
                >
                  View Code
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="images/project-2.png" alt="Project 2 Screenshot" />
              <div className="project-content">
                <h3>Fruits and Vagetables E-commerce Website</h3>
                <p className="text">
                  Full-stack Fruits and Vegetables E-commerce platform using
                  React.js, Node.js, Express, and MySQL.
                </p>
                <a
                  href="https://github.com/SACHIN6612/fruit-ecommerce"
                  target="_blank"
                >
                  View Code
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="images/project-3.png" alt="Project 3 Screenshot" />
              <div className="project-content">
                <h3>Construction Website</h3>
                <p className="text">
                  Interactive Construction Website using HTML, CSS, and
                  JavaScript.
                </p>
                <a
                  href="https://github.com/SACHIN6612/construction"
                  target="_blank"
                >
                  View Code
                </a>
                <a
                  href="https://construction-blush.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="images/project-4.png" alt="Project 4 Screenshot" />
              <div className="project-content">
                <h3>Restaurant Booking Table Website</h3>
                <p className="text">
                  Interactive Restaurant Website using HTML, CSS, JavaScript,
                  React, Node, SQL, and Responsive.
                </p>
                <a
                  href="https://github.com/SACHIN6612/restaurant-website"
                  target="_blank"
                >
                  View Code
                </a>
                <a
                  href="https://restaurant-website-opal-six.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src="images/project-5.png" alt="Project 5 Screenshot" />
              <div className="project-content">
                <h3>Icecream Parlour Website</h3>
                <p className="text">
                  A modern and responsive Ice Cream Parlour website built using
                  HTML, CSS, JavaScript, and React.js, featuring product
                  showcase, attractive UI, offers section, and contact form.
                </p>
                <a
                  href="https://github.com/SACHIN6612/ice-cream-parlour"
                  target="_blank"
                >
                  View Code
                </a>
                <a
                  href="https://ice-cream-parlour-virid.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src="images/project-6.png" alt="Project 6 Screenshot" />
              <div className="project-content">
                <h3>Portfolio Website</h3>
                <p className="text">
                  The Portfolio Website is a personal web project built to
                  showcase my skills, projects, and achievements as a Full Stack
                  Developer.
                </p>
                <a
                  href="https://github.com/SACHIN6612/Portfolio"
                  target="_blank"
                >
                  View Code
                </a>
                <a
                  href="https://portfolio-phi-kohl-80.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src="images/project-7.png" alt="Project 7 Screenshot" />
              <div className="project-content">
                <h3>Job Portal Website</h3>
                <p className="text">
                  Designed and implemented the full frontend using React
                  components, reusable CSS modules, and Bootstrap Framework.
                </p>
                <a
                  href="https://github.com/SACHIN6612/Job-Portal"
                  target="_blank"
                >
                  View Code
                </a>
                <a
                  href="https://job-portal-three-sepia.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src="images/project-8.png" alt="Project 8 Screenshot" />
              <div className="project-content">
                <h3>Calculator Web App</h3>
                <p className="text">
                  A modern, responsive calculator application built using HTML5,
                  CSS3, and JavaScript (ES6+). Designed with clean UI and
                  supports arithmetic operations including addition,
                  subtraction, multiplication and division.
                </p>
                <a
                  href="https://github.com/SACHIN6612/Calculator"
                  target="_blank"
                >
                  View Code
                </a>
                <a
                  href="https://calculator-orpin-eta-15.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src="images/project-9.png" alt="Project 9 Screenshot" />
              <div className="project-content">
                <h3>Counter App</h3>
                <p className="text">
                  The CounterApp is a web-based frontend project that allows
                  users to increment, decrement, and reset a numeric value
                  through a clean and responsive interface.
                </p>
                <a
                  href="https://github.com/SACHIN6612/CounterApp"
                  target="_blank"
                >
                  View Code
                </a>
                <a
                  href="https://counter-app-lac-phi.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src="images/project-10.png" alt="Project 10 Screenshot" />
              <div className="project-content">
                <h3>To Do App</h3>
                <p className="text">
                  A clean, responsive To-Do Application built using HTML5, CSS3
                  (global CSS), JavaScript (ES6+), and React Js, allowing users
                  to add tasks as complete.
                </p>
                <a
                  href="https://github.com/SACHIN6612/To-Do-App"
                  target="_blank"
                >
                  View Code
                </a>
                <a
                  href="https://to-do-app-iota-amber.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src="images/project-11.png" alt="Project 11 Screenshot" />
              <div className="project-content">
                <h3>Business Name Generator</h3>
                <p className="text">
                  A sleek and responsive web application that generates creative
                  and brand-worthy business names based on user input keywords.
                  Built using HTML5, CSS3 (global CSS), JavaScript (ES6+).
                </p>
                <a
                  href="https://github.com/SACHIN6612/Business-Name-Generator"
                  target="_blank"
                >
                  View Code
                </a>
                <a
                  href="https://business-name-generator-six.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="contact-container">
        <div class="contact-heading">
          <span class="highlight">Get in Touch</span>
          <div class="title">Contact Me</div>
        </div>

        <div class="contact-box">
          <div class="contact-left">
            <div class="info-title">Let's Talk</div>
            <div class="info-text">
              I’d love to hear from you! Fill out the form and I’ll get back to
              you soon.
            </div>
            <div class="contact-details">
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

          <div class="contact-right">
            <div class="input-group">
              <input type="text" class="input-field" placeholder="Your Name" />
            </div>
            <div class="input-group">
              <input
                type="email"
                class="input-field"
                placeholder="Your Email"
              />
            </div>
            <div class="input-group">
              <textarea
                class="input-field"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div class="button-wrapper">
              <button class="send-btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <h4 className="name">Sachin Zanzrukiya</h4>
          <ul className="footer-socials">
            <a href="https://github.com/SACHIN6612" target="_blank">
              <i className="ri-github-fill" />
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-zanzrukiya-15997b249"
              target="_blank"
            >
              <i className="ri-linkedin-box-fill" />
            </a>
            <a href="mailto:zsachin219@gmail.com">
              <i className="ri-mail-fill" />
            </a>
            <a href="tel:+91 7016219884">
              <i className="ri-phone-fill" />
            </a>
          </ul>
        </div>
        <div className="footer-bar">
          © 2025 Sachin Zanzrukiya. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
