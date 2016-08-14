import React from 'react';

function Summary({ summary, onInputChange }) {
  return (
    <fieldset id="summary" className="fieldset fieldset--summary">
      <legend className="legend legend--summary">
        Summary
      </legend>
      <label htmlFor="summary" className="label label--summary">
        Next add a brief summary paragraph about yourself highlighting your positive characteristics or other information you want your landlord to know.
      </label>
      <textarea
        id="summary"
        className="textarea textarea--summary"
        name="summary"
        placeholder="Your summary..."
        value={summary}
        onChange={(event) => onInputChange(event.target.value, ['summary'])}
      />
    </fieldset>
  );
}

Summary.propTypes = {
  summary: React.PropTypes.string,
  onInputChange: React.PropTypes.func,
};

export default Summary;
