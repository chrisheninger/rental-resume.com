import React from 'react';
import InputMask from 'react-input-mask';
import classNames from 'classnames';
import Select from './Select';

import { stateOptions } from '../util/helpers';
const rentalImage = require('../assets/images/rental-history.jpg');

class RentalHistory extends React.Component {

  constructor() {
    super();

    this.renderHistory = this.renderHistory.bind(this);
  }

  renderHistory(history, index) {
    const { onInputChange, onRemoveSection } = this.props;
    const selectClassNames = classNames({
      select: true,
      'select--state': true,
      'select-disabled': !history.state,
    });
    return (
      <li key={index}>
        <input
          className="input input--street"
          placeholder="Street Address*"
          type="text"
          value={history.address1}
          onChange={(event) => onInputChange(event.target.value, ['rentalHistory', index, 'address1'])}
        />
        <input
          className="input input--apartment"
          placeholder="Apt #"
          type="text"
          value={history.address2}
          onChange={(event) => onInputChange(event.target.value, ['rentalHistory', index, 'address2'])}
        />
        <input
          className="input input--city"
          placeholder="City*"
          type="text"
          value={history.city}
          onChange={(event) => onInputChange(event.target.value, ['rentalHistory', index, 'city'])}
        />
        <Select
          className={selectClassNames}
          options={stateOptions}
          value={history.state || stateOptions[0].value}
          onChange={(event) => onInputChange(event.target.value, ['rentalHistory', index, 'state'])}
        />
        <InputMask
          className="input input--zip"
          placeholder="Zipcode*"
          type="text"
          value={history.zip}
          mask="99999"
          maskChar={null}
          onChange={(event) => onInputChange(event.target.value, ['rentalHistory', index, 'zip'])}
        />
        <input
          className="input input--start-date"
          placeholder="Move In Date*"
          type="text"
          value={history.dateStart}
          onChange={(event) => onInputChange(event.target.value, ['rentalHistory', index, 'dateStart'])}
        />
        <input
          className="input input--end-date"
          placeholder="Move Out Date*"
          type="text"
          value={history.dateEnd}
          onChange={(event) => onInputChange(event.target.value, ['rentalHistory', index, 'dateEnd'])}
        />
        <textarea
          className="textarea textarea--reason"
          placeholder="Reason For Leaving"
          type="text"
          value={history.reason}
          onChange={(event) => onInputChange(event.target.value, ['rentalHistory', index, 'reason'])}
        />
        {index !== 0 ? (
          <button
            className="btn btn--remove icon-cross"
            onClick={(event) => onRemoveSection(event, 'rentalHistory', index)}
          ></button>
        ) : null}
      </li>
    );
  }

  render() {
    const { rentalHistory, onAddSection } = this.props;
    return (
      <fieldset id="rent" className="fieldset fieldset--rent">
        <legend className="legend legend--rent">Rental History</legend>
        <label className="label label--rent">Now let's outline a history of your recent places of residence. This doesn't have to be extensive but be sure to include at least two or three.</label>
        <img className="img img--rent" src={rentalImage} alt="Rental history section" />
        <ol className="ol ol--rent">
          {rentalHistory.map(this.renderHistory)}
          <button
            className="btn btn--add"
            onClick={(event) => onAddSection(event, 'rentalHistory')}
          >
            Add Another Apartment
          </button>
        </ol>
      </fieldset>
    );
  }

}

RentalHistory.propTypes = {
  rentalHistory: React.PropTypes.array,
  onInputChange: React.PropTypes.func,
  onAddSection: React.PropTypes.func,
  onRemoveSection: React.PropTypes.func,
};

export default RentalHistory;
