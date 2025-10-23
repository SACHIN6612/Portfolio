import Header from "./Header";
import Footer from "./Footer";

function Skills() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default Skills;