import React from 'react';
import InputMask from 'react-input-mask';
import classNames from 'classnames';
import { Link } from 'react-router';
import Select from './Select';
import { stateOptions } from '../util/helpers';

class RentalHistory extends React.Component {
  renderHistory = (history, index) => {
    const { onInputChange, onRemoveSection } = this.props;
    const selectClassNames = classNames({
      select: true,
      'select--state': true,
      'select-disabled': !history.state,
    });
    return (
      <li key={index}>
        <input
          id={`address-line1${index > 0 ? `-rental-section-${index}` : ''}`}
          className="input input--street"
          name="address-line1"
          autoComplete="shipping address-line1"
          placeholder="Street Address*"
          type="text"
          value={history.address1}
          onChange={event =>
            onInputChange(event.target.value, [
              'rentalHistory',
              index,
              'address1',
            ])}
        />
        <input
          id={`address-line2${index > 0 ? `-rental-section-${index}` : ''}`}
          className="input input--apartment"
          name="address-line2"
          autoComplete="shipping address-line2"
          placeholder="Apt #"
          type="text"
          value={history.address2}
          onChange={event =>
            onInputChange(event.target.value, [
              'rentalHistory',
              index,
              'address2',
            ])}
        />
        <input
          id={`address-level2${index > 0 ? `-rental-section-${index}` : ''}`}
          className="input input--city"
          name="address-level2"
          autoComplete="shipping address-level2"
          placeholder="City*"
          type="text"
          value={history.city}
          onChange={event =>
            onInputChange(event.target.value, ['rentalHistory', index, 'city'])}
        />
        <Select
          id={`address-level1${index > 0 ? `-rental-section-${index}` : ''}`}
          className={selectClassNames}
          name="address-level1"
          autoComplete="shipping address-level1"
          options={stateOptions}
          value={history.state || stateOptions[0].value}
          onChange={event =>
            onInputChange(event.target.value, [
              'rentalHistory',
              index,
              'state',
            ])}
        />
        <InputMask
          id={`postal-code${index > 0 ? `-rental-section-${index}` : ''}`}
          className="input input--zip"
          name="postal-code"
          autoComplete="shipping postal-code"
          placeholder="Zipcode*"
          type="text"
          value={history.zip}
          mask="99999"
          maskChar={null}
          onChange={event =>
            onInputChange(event.target.value, ['rentalHistory', index, 'zip'])}
        />
        <input
          id={`start-date${index > 0 ? `-rental-section-${index}` : ''}`}
          className="input input--start-date"
          name="start-date"
          placeholder="Move In Date*"
          type="text"
          value={history.dateStart}
          onChange={event =>
            onInputChange(event.target.value, [
              'rentalHistory',
              index,
              'dateStart',
            ])}
        />
        <input
          id={`end-date${index > 0 ? `-rental-section-${index}` : ''}`}
          className="input input--end-date"
          name="end-date"
          placeholder="Move Out Date*"
          type="text"
          value={history.dateEnd}
          onChange={event =>
            onInputChange(event.target.value, [
              'rentalHistory',
              index,
              'dateEnd',
            ])}
        />
        <textarea
          id={`leaving-reason${index > 0 ? `-rental-section-${index}` : ''}`}
          className="textarea textarea--reason"
          name="leaving-reason"
          placeholder="Reason For Leaving"
          type="text"
          value={history.reason}
          onChange={event =>
            onInputChange(event.target.value, [
              'rentalHistory',
              index,
              'reason',
            ])}
        />
        {index !== 0
          ? <button
              id={`remove-rental-section-${index}`}
              className="btn btn--remove"
              onClick={event => onRemoveSection(event, 'rentalHistory', index)}
            >
              <span />
            </button>
          : null}
      </li>
    );
  };

  render() {
    const { rentalHistory, onAddSection, toggleHeader } = this.props;
    return (
      <section className="page">
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Rental History</h1>
            <p className="page__subtitle">
              Now let's outline a history of your recent places of residence.
              This doesn't have to be extensive but be sure to include at least two or three.
            </p>
            <button className="btn--header" onClick={toggleHeader}>
              <span />
            </button>
          </div>
        </div>
        <fieldset id="rent" className="fieldset fieldset--rent">
          <ol className="ol ol--rent">
            {rentalHistory.map(this.renderHistory)}
            <button
              id="add-rental-section"
              className="btn btn--add"
              onClick={event => onAddSection(event, 'rentalHistory')}
            >
              Add Another Residence
            </button>
          </ol>
          <Link to="/income" title="Income" className="page__link">
            Continue...
          </Link>
        </fieldset>
      </section>
    );
  }
}

RentalHistory.propTypes = {
  rentalHistory: React.PropTypes.array,
  onInputChange: React.PropTypes.func,
  onAddSection: React.PropTypes.func,
  onRemoveSection: React.PropTypes.func,
  toggleHeader: React.PropTypes.func,
};

export default RentalHistory;
