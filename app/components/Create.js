import React from 'react';
import { Link } from 'react-router';

import ContactInformation from './ContactInformation';
import Summary from './Summary';
import RentalHistory from './RentalHistory';
import EmploymentHistory from './EmploymentHistory';
import Income from './Income';

class Create extends React.Component {
  render() {
    return (
      <div>
        <form className="resume-form">
          <ContactInformation
            people = {this.props.people}
            onInputChange = {this.props.onInputChange}
            onAddSection = {this.props.onAddSection}
            onRemoveSection = {this.props.onRemoveSection}
          />
          <Summary
            summary = {this.props.summary}
            onInputChange = {this.props.onInputChange}
          />
          <RentalHistory
            rentalHistory = {this.props.rentalHistory}
            onInputChange = {this.props.onInputChange}
            onAddSection = {this.props.onAddSection}
            onRemoveSection = {this.props.onRemoveSection}
          />
          <EmploymentHistory
            employmentHistory = {this.props.employmentHistory}
            onInputChange = {this.props.onInputChange}
            onAddSection = {this.props.onAddSection}
            onRemoveSection = {this.props.onRemoveSection}
          />
          <Income
            income = {this.props.income}
            onInputChange = {this.props.onInputChange}
          />
          <Link to="/preview" className="btn btn--submit">
            Preview Rental Resume
          </Link>
        </form>
      </div>
    );
  }
}

Create.propTypes = {
  people: React.PropTypes.any,
  summary: React.PropTypes.any,
  rentalHistory: React.PropTypes.any,
  employmentHistory: React.PropTypes.any,
  income: React.PropTypes.any,
  onInputChange: React.PropTypes.any,
  onAddSection: React.PropTypes.any,
  onRemoveSection: React.PropTypes.any,
};

export default Create;
