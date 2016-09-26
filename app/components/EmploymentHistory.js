import React from 'react';

class EmploymentHistory extends React.Component {

  constructor() {
    super();

    this.renderHistory = this.renderHistory.bind(this);
  }

  renderHistory(history, index) {
    const { onInputChange, onRemoveSection } = this.props;
    return (
      <li key={index}>
        <input
          id={`organization-title${index > 0 ? `-employment-section-${index}` : ''}`}
          className="input input--title"
          name="organization-title"
          autoComplete="organization-title"
          placeholder="Title*"
          type="text"
          value={history.title}
          onChange={(event) => onInputChange(event.target.value, ['employmentHistory', index, 'title'])}
        />
        <input
          id={`organization${index > 0 ? `-employment-section-${index}` : ''}`}
          className="input input--employer"
          name="organization"
          autoComplete="organization"
          placeholder="Employer*"
          type="text"
          value={history.company}
          onChange={(event) => onInputChange(event.target.value, ['employmentHistory', index, 'company'])}
        />
        <input
          id={`start-date-employment-section-${index}`}
          className="input input--start-date"
          name="start-date"
          placeholder="Start Date*"
          type="text"
          value={history.dateStart}
          onChange={(event) => onInputChange(event.target.value, ['employmentHistory', index, 'dateStart'])}
        />
        <input
          id={`end-date-employment-section-${index}`}
          className="input input--end-date"
          name="end-date"
          placeholder="End Date*"
          type="text"
          value={history.dateEnd}
          onChange={(event) => onInputChange(event.target.value, ['employmentHistory', index, 'dateEnd'])}
        />
        {index > 0 ? (
          <button
            id={`remove-employment-section-${index}`}
            className="btn btn--remove icon-cross"
            onClick={(event) => onRemoveSection(event, 'employmentHistory', index)}
          />
        ) : null}
      </li>
    );
  }

  render() {
    const { employmentHistory, onAddSection } = this.props;
    return (
      <section className="page">
        <div className="page__header">
          <h1 className="page__title">Employment History</h1>
        </div>
      <fieldset id="employment" className="fieldset fieldset--employment">
        <label htmlFor="organization-title" className="label label--employment">
          Next your landlord will want to know a brief history of your employment.
          Usually a record of the last 5 years or so will suffice.
        </label>
        <ol className="ol ol--employment">
          {employmentHistory.map(this.renderHistory)}
          <button
            id="add-employment-section"
            className="btn btn--add"
            onClick={(event) => onAddSection(event, 'employmentHistory')}
          >
            Add Another Job
          </button>
        </ol>
      </fieldset>
      </section>
    );
  }

}

EmploymentHistory.propTypes = {
  employmentHistory: React.PropTypes.array,
  onInputChange: React.PropTypes.func,
  onAddSection: React.PropTypes.func,
  onRemoveSection: React.PropTypes.func,
};

export default EmploymentHistory;
