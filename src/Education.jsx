import Footer from "./Footer";
import Header from "./Header";

function Education(){
    return(
        <>
        <Header />
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
      <Footer />
      </>
    )
}

export default Education;