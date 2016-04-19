import React from 'react';
import { Link } from 'react-router';

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
        <li className="applicant" key={index}>
          This section is incomplete <Link to="/create">[edit]</Link>
        </li>
      );
    }
    return (
      <li className="applicant" key={index}>
        <div className="applicant--name">{applicant.name}</div>
        <div className="applicant--email">{applicant.email}</div>
        <div className="applicant--phone">{applicant.phone}</div>
      </li>
    );
  }

  renderIncomeSection(income) {
    if (!income) {
      return null;
    }
    return (
      <section className="resume--section resume--section--income">
        <h2 className="resume--subtitle">Income</h2>
        <p className="applicant-income">
          {income}
        </p>
      </section>
    );
  }

  renderSummarySection(summary) {
    if (!summary) {
      return (
        <section className="resume--section resume--section--summary">
          <h2 className="resume--subtitle">About</h2>
          <p className="applicant-summary">
            This section is incomplete <Link to="/create">[edit]</Link>
          </p>
        </section>
      );
    }
    return (
      <section className="resume--section resume--section--summary">
        <h2 className="resume--subtitle">About</h2>
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
        <li className="job" key={index}>
          This section is incomplete <Link to="/create">[edit]</Link>
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
        <li className="apartment" key={index}>
          This section is incomplete <Link to="/create">[edit]</Link>
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
      <div className="container">
        <div className="resume">
          <header className="resume--header">
            <h1 className="resume--title">Rental Resume</h1>
          </header>
          <section className="resume--section resume--section--applicant">
            <h2 className="resume--subtitle">Applicant</h2>
            <ul className="applicant-list">
              {this.props.people.map(this.renderHeader)}
            </ul>
          </section>
          {this.renderIncomeSection(this.props.income)}
          {this.renderSummarySection(this.props.summary)}
          <section className="resume--section resume--section--employment">
            <h2 className="resume--subtitle">Employment History</h2>
            <ul className="employment-list">
              {this.props.employmentHistory.map(this.renderEmploymentHistory)}
            </ul>
          </section>
          <section className="resume--section resume--section--rent">
            <h2 className="resume--subtitle">Rental History</h2>
            <ul className="rental-list">
              {this.props.rentalHistory.map(this.renderRentalHistory)}
            </ul>
          </section>
        </div>
        <div className="background"></div>
      </div>
    );
  }
}

Preview.propTypes = {
  people: React.PropTypes.any,
  summary: React.PropTypes.any,
  rentalHistory: React.PropTypes.any,
  employmentHistory: React.PropTypes.any,
  income: React.PropTypes.any,
};

export default Preview;
