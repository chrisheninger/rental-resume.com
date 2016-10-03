import React from 'react';
import { Link } from 'react-router';
import { numberWithCommas } from '../util/helpers';

class Preview extends React.Component {
  constructor() {
    super();
    this.renderHeader = this.renderHeader.bind(this);
    this.renderIncomeSection = this.renderIncomeSection.bind(this);
    this.renderSummarySection = this.renderSummarySection.bind(this);
    this.renderEmploymentHistory = this.renderEmploymentHistory.bind(this);
    this.renderRentalHistory = this.renderRentalHistory.bind(this);
  }

  renderHeader(applicant, index) {
    if (!applicant.name && !applicant.email && !applicant.phone && index !== 0) {
      return null;
    }
    if (!applicant.name || !applicant.email || !applicant.phone) {
      return (
        <li className="applicant incomplete" key={index}>
          <Link to="/applicant">This section is incomplete</Link>
        </li>
      );
    }
    return (
      <li className="applicant" key={index}>
        <div className="applicant__name">{applicant.name}</div>
        <div className="applicant__email">{applicant.email}</div>
        <div className="applicant__phone">{applicant.phone}</div>
      </li>
    );
  }

  renderIncomeSection(income) {
    if (!income) {
      return (
        <section className="resume__section resume__section--income">
          <h2 className="resume__subtitle">Income</h2>
          <p className="applicant-income incomplete">
            <Link to="/income">This section is incomplete</Link>
          </p>
        </section>
      );
    }
    return (
      <section className="resume__section resume__section--income">
        <h2 className="resume__subtitle">Income</h2>
        <p className="applicant-income">
          ${numberWithCommas(income)}
        </p>
      </section>
    );
  }

  renderSummarySection(summary) {
    if (!summary) {
      return (
        <section className="resume__section resume__section--summary">
          <h2 className="resume__subtitle">Summary</h2>
          <p className="applicant-summary incomplete">
            <Link to="/summary">This section is incomplete</Link>
          </p>
        </section>
      );
    }
    return (
      <section className="resume__section resume__section--summary">
        <h2 className="resume__subtitle">Summary</h2>
        <p className="applicant-summary">
          {summary}
        </p>
      </section>
    );
  }

  renderEmploymentHistory(employment, index) {
    if (!employment.title && !employment.company && !employment.dateStart && !employment.dateEnd && index !== 0) {
      return null;
    }
    if (!employment.title || !employment.company || !employment.dateStart || !employment.dateEnd) {
      return (
        <li className="job incomplete" key={index}>
          <Link to="/employment-history">This section is incomplete</Link>
        </li>
      );
    }
    return (
      <li className="job" key={index}>
        {
          `${employment.title} at ${employment.company}`
        }
        {
          ` (${employment.dateStart} - ${employment.dateEnd})`
        }
      </li>
    );
  }

  renderRentalHistory(rental, index) {
    if (!rental.address1 && !rental.city && !rental.state && !rental.zip && !rental.dateStart && !rental.dateEnd && !rental.reason && index !== 0) {
      return null;
    }
    if (!rental.address1 || !rental.city || !rental.state || !rental.zip || !rental.dateStart || !rental.dateEnd || !rental.reason) {
      return (
        <li className="apartment incomplete" key={index}>
          <Link to="/rental-history">This section is incomplete</Link>
        </li>
      );
    }
    return (
      <li className="apartment" key={index}>
        {
          `${rental.address1} ${rental.address2} ${rental.city}, ${rental.state} ${rental.zip}`
        }
        <br />
        {
          ` (${rental.dateStart} - ${rental.dateEnd})`
        }
        <br />
        <em>Reason For Leaving:</em> {rental.reason}
      </li>
    );
  }

  render() {
    return (
      <section className="page">
        <div className="resume">
          <div className="resume__container">
            <header className="resume__header">
              <button className="btn--print--prview">
                <span className="icon-print" />
                Print
              </button>
              <h1 className="resume__title">Rental Resume</h1>
            </header>
            <section className="resume__section resume__section--applicant">
              <h2 className="resume__subtitle">Applicant</h2>
              <ul className="applicant-list">
                {this.props.people.map(this.renderHeader)}
              </ul>
            </section>
            {this.renderIncomeSection(this.props.income)}
            {this.renderSummarySection(this.props.summary)}
            <section className="resume__section resume__section--employment">
              <h2 className="resume__subtitle">Employment History</h2>
              <ul className="employment-list">
                {this.props.employmentHistory.map(this.renderEmploymentHistory)}
              </ul>
            </section>
            <section className="resume__section resume__section--rent">
              <h2 className="resume__subtitle">Rental History</h2>
              <ul className="rental-list">
                {this.props.rentalHistory.map(this.renderRentalHistory)}
              </ul>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

Preview.propTypes = {
  people: React.PropTypes.array,
  summary: React.PropTypes.string,
  rentalHistory: React.PropTypes.array,
  employmentHistory: React.PropTypes.array,
  income: React.PropTypes.string,
  printResume: React.PropTypes.func,
};

export default Preview;
