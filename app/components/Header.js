import React from 'react';
import { Link } from 'react-router';

function Header(props) {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="logo" to="/">
          Rental Resume
        </Link>
        <ul>
          <li>
            <Link to="/info" title="Info" className="btn btn--action icon-info" activeClassName="btn--action--active" />
          </li>
          <li>
            <Link to="/create" title="Create" className="btn btn--action icon-edit" activeClassName="btn--action--active" />
          </li>
          <li>
            <Link to="/preview" title="Preview" className="btn btn--action icon-preview" activeClassName="btn--action--active" />
          </li>
          <li>
            <button title="Print" className="btn btn--action icon-print" onClick={props.printResume} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  printResume: React.PropTypes.func,
};

export default Header;
