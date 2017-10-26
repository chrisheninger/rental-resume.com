import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PageHeader from '../components/PageHeader';

function Summary({ summary, onInputChange }) {
  return (
    <section className="page">
      <PageHeader
        title="Summary"
        description="Next add a brief summary paragraph about yourself highlighting your positive characteristics or other information you want your landlord to know."
      />
      <fieldset id="summary" className="fieldset fieldset--summary">
        <textarea
          id="summary"
          className="textarea textarea--summary"
          name="summary"
          placeholder="Your summary..."
          value={summary}
          onChange={event => onInputChange(event.target.value, ['summary'])}
        />
        <Link
          to="/employment-history"
          title="Employment History"
          className="page__link"
        >
          Continue...
        </Link>
      </fieldset>
    </section>
  );
}

Summary.propTypes = {
  summary: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default Summary;
