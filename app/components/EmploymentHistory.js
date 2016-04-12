import React from 'react';

const employmentImage = require('../assets/images/employment-history.jpg');

class EmploymentHistory extends React.Component {

  constructor() {
    super();

    this.renderHistory = this.renderHistory.bind(this);
  }

  renderHistory(history, index) {
    const { onInputChange, onRemoveSection } = this.props;
    if (index === 0) {
      return (
        <li key={index}>
          <input
            className="input input--title"
            placeholder="Title*"
            type="text"
            value={history.title}
            onChange={(event) => onInputChange(event.target.value, ['employmentHistory', index, 'title'])}
          />
          <input
            className="input input--employer"
            placeholder="Employer*"
            type="text"
            value={history.company}
            onChange={(event) => onInputChange(event.target.value, ['employmentHistory', index, 'company'])}
          />
          <input
            className="input input--start-date"
            placeholder="Start Date*"
            type="text"
            value={history.dateStart}
            onChange={(event) => onInputChange(event.target.value, ['employmentHistory', index, 'dateStart'])}
          />
          <input
            className="input input--end-date"
            placeholder="End Date*"
            type="text"
            value={history.dateEnd}
            onChange={(event) => onInputChange(event.target.value, ['employmentHistory', index, 'dateEnd'])}
          />
        </li>
      );
    }
    return (
      <li key={index}>
        <input
          className="input input--title"
          placeholder="Title*"
          type="text"
          value={history.title}
          onChange={(event) => onInputChange(event.target.value, ['employmentHistory', index, 'title'])}
        />
        <input
          className="input input--employer"
          placeholder="Employer*"
          type="text"
          value={history.company}
          onChange={(event) => onInputChange(event.target.value, ['employmentHistory', index, 'company'])}
        />
        <input
          className="input input--start-date"
          placeholder="Start Date*"
          type="text"
          value={history.dateStart}
          onChange={(event) => onInputChange(event.target.value, ['employmentHistory', index, 'dateStart'])}
        />
        <input
          className="input input--end-date"
          placeholder="End Date*"
          type="text"
          value={history.dateEnd}
          onChange={(event) => onInputChange(event.target.value, ['employmentHistory', index, 'dateEnd'])}
        />
        <button
          className="btn btn--remove icon-cross"
          onClick={(event) => onRemoveSection(event, 'employmentHistory', index)}
        >
        </button>
      </li>
    );
  }

  render() {
    const { employmentHistory, onAddSection } = this.props;
    return (
      <fieldset id="employment" className="fieldset fieldset--employment">
        <legend className="legend legend--employment">Employment History</legend>
        <label className="label label--employment">Next your landlord will want to know a brief history of your income and employment. Don't worry about putting down your first highschool job. Usually a record of the last five years or so will suffice.</label>
      <img className="img img--employment" src={employmentImage} />
        <ol className="ol ol--employment">

          {employmentHistory.map(this.renderHistory)}

          <button
            className="btn btn--add"
            onClick={(event) => onAddSection(event, 'employmentHistory')}
          >
            Add Another Job
          </button>

        </ol>
      </fieldset>
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
