import React from 'react';
import { Link } from 'react-router';

import ContactInformation from './ContactInformation';
import Summary from './Summary';
import RentalHistory from './RentalHistory';
import EmploymentHistory from './EmploymentHistory';
import Income from './Income';

function Create(props) {
  return (
    <form className="resume-form">
      <ContactInformation
        people={props.people}
        onInputChange={props.onInputChange}
        onAddSection={props.onAddSection}
        onRemoveSection={props.onRemoveSection}
      />
      <Summary
        summary={props.summary}
        onInputChange={props.onInputChange}
      />
      <RentalHistory
        rentalHistory={props.rentalHistory}
        onInputChange={props.onInputChange}
        onAddSection={props.onAddSection}
        onRemoveSection={props.onRemoveSection}
      />
      <EmploymentHistory
        employmentHistory={props.employmentHistory}
        onInputChange={props.onInputChange}
        onAddSection={props.onAddSection}
        onRemoveSection={props.onRemoveSection}
      />
      <Income
        income={props.income}
        onInputChange={props.onInputChange}
      />
      <Link to="/preview" className="btn btn--submit">
        Preview Rental Resume
      </Link>
    </form>
  );
}

Create.propTypes = {
  people: React.PropTypes.array,
  summary: React.PropTypes.string,
  rentalHistory: React.PropTypes.array,
  employmentHistory: React.PropTypes.array,
  income: React.PropTypes.string,
  onInputChange: React.PropTypes.any,
  onAddSection: React.PropTypes.any,
  onRemoveSection: React.PropTypes.any,
};

export default Create;
