import React from 'react';
import { Link } from 'react-router';

function Header({ printResume, openMenu }) {
  return (
    <header className="header">
      <div className="topbar">
        <Link className="logo" to="/">Rental Resume</Link>
        <button className="toggle" onClick={openMenu}>
          Menu
          <span className="vertical"></span>
          <span className="horizontal"></span>
        </button>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/info" title="Info" className="btn btn--action" activeClassName="btn--action--active">Introduction</Link>
          </li>
          <li>
            <Link to="/create" title="Create" className="btn btn--action" activeClassName="btn--action--active">Contact</Link>
          </li>
          <li>
            <Link to="#" title="Summary" className="btn btn--action" activeClassName="btn--action--active">Summary</Link>
          </li>
          <li>
            <Link to="#" title="Rental History" className="btn btn--action" activeClassName="btn--action--active">Rental History</Link>
          </li>
          <li>
            <Link to="#" title="Employment History" className="btn btn--action" activeClassName="btn--action--active">Employment History</Link>
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
  openMenu: React.PropTypes.func,
};

export default Header;
