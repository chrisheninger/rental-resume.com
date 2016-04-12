import React from 'react';

class Income extends React.Component {

  render() {
    const { income, onInputChange } = this.props;
    return (
      <fieldset className="fieldset fieldset--income">
        <legend className="legend legend--income">Household Income</legend>
        <label className="label label--income">Last but not least your landlord will want to know your household income. Feel free to be as exact or vauge as your are comfortable sharing with your landlord at this time.</label>
          <input
            className="input input--income"
            type="text"
            placeholder="Approximate Income*"
            value={income}
            onChange={(event) => onInputChange(event.target.value, ['income'])}
          />
      </fieldset>
    );
  }
}

Income.propTypes = {
  income: React.PropTypes.string,
  onInputChange: React.PropTypes.func,
};


export default Income;
