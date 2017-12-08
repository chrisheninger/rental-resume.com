import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ generateResumeLink, toggleMenu, closeMenu }) {
  return (
    <header className="header">
      <Link className="logo--mobile" to="/" onClick={closeMenu}>
        Rental Resume
      </Link>
      <button className="toggle" onClick={toggleMenu}>
        <span className="toggle__bars" />
      </button>
      <nav className="nav">
        <ul>
          <Link to="/" className="logo" onClick={closeMenu}>
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M14.341 3.579c-.347-.473-.831-1.027-1.362-1.558S11.894 1.006 11.421.659C10.615.068 10.224 0 10 0H2.25C1.561 0 1 .561 1 1.25v13.5c0 .689.561 1.25 1.25 1.25h11.5c.689 0 1.25-.561 1.25-1.25V5c0-.224-.068-.615-.659-1.421zm-2.07-.85c.48.48.856.912 1.134 1.271h-2.406V1.595c.359.278.792.654 1.271 1.134zM14 14.75c0 .136-.114.25-.25.25H2.25a.253.253 0 0 1-.25-.25V1.25c0-.135.115-.25.25-.25H10v3.5a.5.5 0 0 0 .5.5H14v9.75z" />
                <path d="M11.5 13h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0-2h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0-2h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z" />
              </svg>
              <div>
                Rental<br />Resume
              </div>
            </h1>
          </Link>
          <li>
            <NavLink
              to="/applicant"
              title="Applicant"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Applicant
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/summary"
              title="Summary"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Summary
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employment-history"
              title="Employment History"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Employment History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rental-history"
              title="Rental History"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Rental History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/income"
              title="Income"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines btn--nav__lines--last" />
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/preview"
              title="preview"
              className="btn--preview"
              onClick={closeMenu}
            >
              <svg width="1024" height="1024" viewBox="0 0 1024 1024">
                <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z" />
              </svg>
              Preview
            </NavLink>
          </li>
          {/* <li>
            <button className="btn--preview" onClick={generateResumeLink}>
              <svg width="1024" height="1024" viewBox="0 0 1024 1024">
                <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z" />
              </svg>
              Generate Link
            </button>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

Navigation.propTypes = {
  generateResumeLink: PropTypes.func,
  toggleMenu: PropTypes.func,
  closeMenu: PropTypes.func,
};

export default Navigation;
