function Header() {
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
    </>
  );
}

export default Header;
