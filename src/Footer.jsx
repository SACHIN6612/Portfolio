function Footer() {
  return (
    <>
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

export default Footer;