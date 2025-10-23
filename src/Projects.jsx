import Footer from "./Footer";
import Header from "./Header";

function Projects() {
  return (
    <>
    <Header />
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
              <a href="https://construction-blush.vercel.app/" target="_blank">
                Live Demo
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
              <a href="https://construction-blush.vercel.app/" target="_blank">
                Live Demo
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
              <a href="https://construction-blush.vercel.app/" target="_blank">
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
                href="https://github.com/yourusername/todo-app"
                target="_blank"
              >
                View Code
              </a>
              <a href="https://construction-blush.vercel.app/" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Projects;