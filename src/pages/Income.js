import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PageHeader from '../components/PageHeader';

function Income({ income, onInputChange }) {
  return (
    <section className="page">
      <PageHeader
        title="Income"
        description="Last but not least your landlord will want to know your annual household income. Feel free to be as exact or vague as you are comfortable sharing with your landlord."
      />
      <fieldset className="fieldset fieldset--income">
        <div className="input-group">
          <span className="input-prefix">$</span>
          <input
            id="income"
            className="input input--income"
            name="income"
            placeholder="Annual Income"
            type="text"
            value={income}
            onChange={event => onInputChange(event.target.value, ['income'])}
          />
        </div>
        <Link to="/preview" title="Preview" className="page__link">
          Preview Resume
        </Link>
      </fieldset>
    </section>
  );
}

Income.propTypes = {
  income: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default Income;
