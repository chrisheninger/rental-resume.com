import React from 'react';
import { Link } from 'react-router';

function NotFound() {
  return (
    <section className="error">
      <div className="error__container">
        <h1 className="error__title">404!</h1>
        <p className="error__subtitle">Page not found...</p>
        <Link to="/" title="Homepage" className="error__link">Go To Homepage</Link>
      </div>
    </section>
  );
}

export default NotFound;
