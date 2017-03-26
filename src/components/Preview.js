import React from 'react';
import { Link } from 'react-router';
import { numberWithCommas } from '../util/helpers';
import { missingSection } from '../util/helpers';

class Preview extends React.Component {
  renderHeader(applicant, index) {
    if (
      !applicant.name && !applicant.email && !applicant.phone && index !== 0
    ) {
      return null;
    }
    if (!applicant.name || !applicant.email || !applicant.phone) {
      missingSection('applicant');
      return null;
    }
    return (
      <section className="resume__section resume__section--applicant">
        <h2 className="resume__subtitle">Applicant</h2>
        <ul className="applicant-list">
          <li className="applicant" key={index}>
            <div className="applicant__name">{applicant.name}</div>
            <div className="applicant__email">{applicant.email}</div>
            <div className="applicant__phone">{applicant.phone}</div>
          </li>
        </ul>
      </section>
    );
  }

  renderIncomeSection(income) {
    if (!income) {
      missingSection('income');
      return null;
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
      missingSection('summary');
      return null;
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
    if (
      !employment.title &&
      !employment.company &&
      !employment.dateStart &&
      !employment.dateEnd &&
      index !== 0
    ) {
      return null;
    }
    if (
      !employment.title ||
      !employment.company ||
      !employment.dateStart ||
      !employment.dateEnd
    ) {
      missingSection('employment-history');
      return null;
    }
    return (
      <section className="resume__section resume__section--employment">
        <h2 className="resume__subtitle">Employment History</h2>
        <ul className="employment-list">
          <li className="job" key={index}>
            {`${employment.title} at ${employment.company}`}
            {` (${employment.dateStart} - ${employment.dateEnd})`}
          </li>
        </ul>
      </section>
    );
  }

  renderRentalHistory(rental, index) {
    if (
      !rental.address1 &&
      !rental.city &&
      !rental.state &&
      !rental.zip &&
      !rental.dateStart &&
      !rental.dateEnd &&
      !rental.reason &&
      index !== 0
    ) {
      return null;
    }
    if (
      !rental.address1 ||
      !rental.city ||
      !rental.state ||
      !rental.zip ||
      !rental.dateStart ||
      !rental.dateEnd ||
      !rental.reason
    ) {
      missingSection('rental-history');
      return null;
    }
    return (
      <section className="resume__section resume__section--rent">
        <h2 className="resume__subtitle">Rental History</h2>
        <ul className="rental-list">
          <li className="apartment" key={index}>
            {
              `${rental.address1} ${rental.address2} ${rental.city}, ${rental.state} ${rental.zip}`
            }
            <br />
            {` (${rental.dateStart} - ${rental.dateEnd})`}
            <br />
            <em>Reason For Leaving:</em> {rental.reason}
          </li>
        </ul>
      </section>
    );
  }

  render() {
    return (
      <section className="page">
        <div className="resume">
          <div className="resume__container">
            <header className="resume__header">
              <button
                className="btn--print--prview"
                onClick={this.props.printResume}
              >
                <span className="icon-print" />
                Print
              </button>
              <h1 className="resume__title">Rental Resume</h1>
            </header>

            {this.props.people.map(this.renderHeader)}

            {this.renderIncomeSection(this.props.income)}

            {this.renderSummarySection(this.props.summary)}

            {this.props.employmentHistory.map(this.renderEmploymentHistory)}

            {this.props.rentalHistory.map(this.renderRentalHistory)}

          </div>
          <section className="resume__section incomplete">
            <h2
              className="resume__subtitle incomplete__subtitle incomplete__sbutitle--active"
            >
              Missing Sections
            </h2>
            <ul className="incomplete-list">
              <li className="incomplete__link incomplete__link--applicant">
                <Link to="/applicant">Applicant</Link>
              </li>
              <li className="incomplete__link incomplete__link--summary">
                <Link to="/summary">Summary</Link>
              </li>
              <li
                className="incomplete__link incomplete__link--employment-history"
              >
                <Link to="/employment-history">Employment History</Link>
              </li>
              <li className="incomplete__link incomplete__link--rental-history">
                <Link to="/rental-history">Rental History</Link>
              </li>
              <li className="incomplete__link incomplete__link--income">
                <Link to="/income">Income</Link>
              </li>
            </ul>
          </section>
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
