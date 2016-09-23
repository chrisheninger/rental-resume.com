import React from 'react';
import { Link } from 'react-router';

function Header({ printResume, toggleMenu, closeMenu }) {
  return (
    <header className="header">
      <Link className="logo--mobile" to="/">Rental Resume</Link>
      <button className="toggle" onClick={toggleMenu}>
        <span class="toggle__bars"></span>
      </button>
      <nav className="nav">
        <ul>
          <Link to="/" div className="logo">
            <span className="icon-resume" />
            <h1 to="/">Rental Resume</h1>
          </Link>
          <li>
            <Link to="/intro" title="Intro" className="btn--nav" activeClassName="btn--nav--active" onClick={closeMenu}>
              <span className="btn--nav__lines" />
              Introduction
            </Link>
          </li>
          <li>
            <Link to="/contact" title="Contact" className="btn--nav" activeClassName="btn--nav--active" onClick={closeMenu}>
              <span className="btn--nav__lines" />
              Contact
            </Link>
          </li>
          <li>
            <Link to="#" title="Summary" className="btn--nav" activeClassName="btn--nav--active" onClick={closeMenu}>
              <span className="btn--nav__lines" />
              Summary
            </Link>
          </li>
          <li>
            <Link to="#" title="Rental History" className="btn--nav" activeClassName="btn--nav--active" onClick={closeMenu}>
            <span className="btn--nav__lines" />
            Rental History
            </Link>
          </li>
          <li>
            <Link to="#" title="Employment History" className="btn--nav" activeClassName="btn--nav--active" onClick={closeMenu}>
              <span className="btn--nav__lines btn--nav__lines--last" />
              Employment History
            </Link>

          </li>
          <li>
            <Link to="/preview" title="Preview" className="btn--nav btn--preview" activeClassName="btn--nav--active" onClick={printResume}>
              <span className="icon-print" />
              Preview
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  printResume: React.PropTypes.func,
  toggleMenu: React.PropTypes.func,
  closeMenu: React.PropTypes.func,
};

export default Header;
