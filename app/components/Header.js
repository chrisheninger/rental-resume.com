import React from 'react';
import { Link } from 'react-router';

function Header({ printResume, toggleMenu, closeMenu }) {
  return (
    <header className="header">
      <Link className="logo--mobile" to="/">Rental Resume</Link>
      <button className="toggle" onClick={toggleMenu}>
        Menu
      </button>
      <nav className="nav">
        <Link className="logo" to="/">Rental Resume</Link>
        <button className="toggle__close icon-cross" onClick={closeMenu} />
        <ul>
          <li>
            <Link to="/intro" title="Intro" className="btn btn--action" activeClassName="btn--action--active" onClick={closeMenu}>Introduction</Link>
          </li>
          <li>
            <Link to="/create" title="Create" className="btn btn--action" activeClassName="btn--action--active" onClick={closeMenu}>Contact</Link>
          </li>
          <li>
            <Link to="#" title="Summary" className="btn btn--action" activeClassName="btn--action--active" onClick={closeMenu}>Summary</Link>
          </li>
          <li>
            <Link to="#" title="Rental History" className="btn btn--action" activeClassName="btn--action--active" onClick={closeMenu}>Rental History</Link>
          </li>
          <li>
            <Link to="#" title="Employment History" className="btn btn--action" activeClassName="btn--action--active" onClick={closeMenu}>Employment History</Link>
          </li>
          <li>
            <Link to="/preview" title="Preview" className="btn btn--action" activeClassName="btn--action--active" onClick={printResume}>Preview</Link>
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
