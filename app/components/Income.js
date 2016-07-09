import React from 'react';

function Income({ income, onInputChange }) {
  return (
    <fieldset className="fieldset fieldset--income">
      <legend className="legend legend--income">
        Household Income
      </legend>
      <label className="label label--income">
        Last but not least your landlord will want to know your annual household income.
        Feel free to be as exact or vague as you are comfortable sharing with your landlord.
      </label>
      <div className="input-group">
        <span className="input-prefix">$</span>
        <input
          id="income"
          className="input input--income"
          name="income"
          type="number"
          step="1000"
          placeholder="Annual Income"
          value={income}
          onChange={(event) => onInputChange(event.target.value, ['income'])}
        />
      </div>
    </fieldset>
  );
}

Income.propTypes = {
  income: React.PropTypes.string,
  onInputChange: React.PropTypes.func,
};


export default Income;
