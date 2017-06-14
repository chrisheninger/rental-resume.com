import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MaskedTextInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

function Income({ income, onInputChange, toggleHeader }) {
  return (
    <section className="page">
      <div className="page__header">
        <div className="page__header__container">
          <h1 className="page__title">Income</h1>
          <p className="page__subtitle">
            Last but not least your landlord will want to know your annual
            household income.
            Feel free to be as exact or vague as you are comfortable sharing
            with your landlord.
          </p>
          <button className="btn--header" onClick={toggleHeader}>
            <span />
          </button>
        </div>
      </div>
      <fieldset className="fieldset fieldset--income">
        <div className="input-group">
          <MaskedTextInput
            mask={createNumberMask({
              prefix: '$',
              integerLimit: 7,
            })}
            guide={false}
            id="income"
            className="input input--income"
            name="income"
            type="text"
            placeholder="Annual Income"
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
  toggleHeader: PropTypes.func,
};

export default Income;
