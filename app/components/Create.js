import React from 'react';
import { Link } from 'react-router';

import ContactInformation from './ContactInformation';
import Summary from './Summary';
import RentalHistory from './RentalHistory';
import EmploymentHistory from './EmploymentHistory';
import Income from './Income';

function Create(props) {
  return (
    <div>
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
    </div>
  );
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
