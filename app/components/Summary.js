import React from 'react';
import { Link } from 'react-router';

function Summary({ summary, onInputChange, toggleHeader }) {
  return (
    <section className="page">
      <div className="page__header">
        <div className="page__header__container">
          <h1 className="page__title">Summary</h1>
          <p className="page__subtitle">
            Next add a brief summary paragraph about yourself highlighting your positive characteristics or other information you want your landlord to know.
          </p>
        </div>
        <button className="btn--header" onClick={toggleHeader}>
          <span />
        </button>
      </div>
      <fieldset id="summary" className="fieldset fieldset--summary">
        <textarea
          id="summary"
          className="textarea textarea--summary"
          name="summary"
          placeholder="Your summary..."
          value={summary}
          onChange={(event) => onInputChange(event.target.value, ['summary'])}
        />
        <Link to="/employment-history" title="Employment History" className="page__link">Continue...</Link>
      </fieldset>
    </section>
  );
}

Summary.propTypes = {
  summary: React.PropTypes.string,
  onInputChange: React.PropTypes.func,
  toggleHeader: React.PropTypes.func,
};

export default Summary;
