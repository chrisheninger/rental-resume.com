import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0);
const toMonth = new Date(currentYear + 10, 11);

// Component will receive date, locale and localeUtils props
function YearMonthForm({ date, localeUtils, onChange }) {
  const months = localeUtils.getMonths();

  const years = [];
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  const handleChange = function handleChange(e) {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return (
    <form className="DayPicker-Caption">
      <select name="month" onChange={handleChange} value={date.getMonth()}>
        {months.map((month, i) => <option key={i} value={i}>{month}</option>)}
      </select>
      <select name="year" onChange={handleChange} value={date.getFullYear()}>
        {years.map((year, i) =>
          <option key={i} value={year}>
            {year}
          </option>
        )}
      </select>
    </form>
  );
}

const dayPickerProps = {
  todayButton: 'Go to Today',
  fromMonth: fromMonth,
  toMonth: toMonth,
  captionElement: <YearMonthForm onChange={this.handleYearMonthChange} />,
};

class EmploymentHistory extends Component {
  state = {
    month: fromMonth,
  };
  handleYearMonthChange = month => {
    this.setState({ month });
  };
  renderHistory = (history, index) => {
    const { onInputChange, onRemoveSection } = this.props;
    return (
      <li key={index}>
        <input
          id={`organization-title${index > 0
            ? `-employment-section-${index}`
            : ''}`}
          className="input input--title"
          name="organization-title"
          autoComplete="organization-title"
          placeholder="Title*"
          type="text"
          value={history.title}
          onChange={event =>
            onInputChange(event.target.value, [
              'employmentHistory',
              index,
              'title',
            ])}
        />
        <input
          id={`organization${index > 0 ? `-employment-section-${index}` : ''}`}
          className="input input--employer"
          name="organization"
          autoComplete="organization"
          placeholder="Employer*"
          type="text"
          value={history.company}
          onChange={event =>
            onInputChange(event.target.value, [
              'employmentHistory',
              index,
              'company',
            ])}
        />
        <DayPickerInput
          id={`start-date-employment-section-${index}`}
          className="input input--start-date"
          name="start-date"
          placeholder="Start Date*"
          type="text"
          value={history.dateStart}
          onDayChange={date =>
            onInputChange(moment(date).format('MM/DD/YYYY'), [
              'employmentHistory',
              index,
              'dateStart',
            ])}
          dayPickerProps={dayPickerProps}
        />
        <DayPickerInput
          id={`end-date-employment-section-${index}`}
          className="input input--end-date"
          name="end-date"
          placeholder="End Date*"
          type="text"
          value={history.dateEnd}
          onDayChange={date =>
            onInputChange(moment(date).format('MM/DD/YYYY'), [
              'employmentHistory',
              index,
              'dateEnd',
            ])}
          dayPickerProps={dayPickerProps}
        />
        {index > 0
          ? <button
              id={`remove-employment-section-${index}`}
              className="btn btn--remove"
              onClick={event =>
                onRemoveSection(event, 'employmentHistory', index)}
            >
              <span />
            </button>
          : null}
      </li>
    );
  };

  render() {
    const { employmentHistory, onAddSection, toggleHeader } = this.props;
    return (
      <section className="page">
        <div className="page__header">
          <div className="page__header__container">
            <h1 className="page__title">Employment History</h1>
            <p className="page__subtitle">
              Next your landlord will want to know a brief history of your
              employment.
              Usually a record of the last 5 years or so will suffice.
            </p>
            <button className="btn--header" onClick={toggleHeader}>
              <span />
            </button>
          </div>
        </div>
        <fieldset id="employment" className="fieldset fieldset--employment">
          <ol className="ol ol--employment">
            {employmentHistory.map(this.renderHistory)}
            <button
              id="add-employment-section"
              className="btn btn--add"
              onClick={event => onAddSection(event, 'employmentHistory')}
            >
              Add Another Job
            </button>
          </ol>
          <Link
            to="/rental-history"
            title="Rental History"
            className="page__link"
          >
            Continue...
          </Link>
        </fieldset>
      </section>
    );
  }
}

EmploymentHistory.propTypes = {
  employmentHistory: PropTypes.array,
  onInputChange: PropTypes.func,
  onAddSection: PropTypes.func,
  onRemoveSection: PropTypes.func,
  toggleHeader: PropTypes.func,
};

export default EmploymentHistory;
