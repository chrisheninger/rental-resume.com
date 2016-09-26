import React from 'react';

function Summary({ summary, onInputChange }) {
  return (
    <section className="page">
      <div className="page__header">
        <h1 className="page__title">Summary</h1>
        <p className="label label--summary">
          Next add a brief summary paragraph about yourself highlighting your positive characteristics or other information you want your landlord to know.
        </p>
      </div>
    <fieldset id="summary" className="fieldset fieldset--summary">
      <textarea
        id="summary"
        className="textarea textarea--summary"
        name="summary"
        placeholder="Your summary..."
        value={summary}
        onChange={(event) => onInputChange(event.target.value, ['summary'])}
      />
    </fieldset>
    </section>
  );
}

Summary.propTypes = {
  summary: React.PropTypes.string,
  onInputChange: React.PropTypes.func,
};

export default Summary;
