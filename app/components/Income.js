import React from 'react';

class Income extends React.Component {

  render() {
    const { income, onInputChange } = this.props;
    return (
      <fieldset className="fieldset fieldset--income">
        <legend className="legend legend--income">Household Income</legend>
        <label className="label label--income">Last but not least your landlord will want to know your annual household income. Feel free to be as exact or vauge as your are comfortable sharing with your landlord at this time.</label>
        <div className="input-group">
          <span className="input-prefix">$</span>
          <input
            className="input input--income"
            type="number"
            step="1000"
            placeholder="Approximate Annual Income*"
            value={income}
            onChange={(event) => onInputChange(event.target.value, ['income'])}
          />
        </div>
      </fieldset>
    );
  }
}

Income.propTypes = {
  income: React.PropTypes.string,
  onInputChange: React.PropTypes.func,
};


export default Income;
