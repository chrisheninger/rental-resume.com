import React from 'react';

class Summary extends React.Component {

  render() {
    const { summary, onInputChange } = this.props;
    return (
      <fieldset id="summary" className="fieldset fieldset--summary">
        <legend className="legend legend--summary">Summary</legend>
        <label className="label label--summary">Next add a brief summary paragraph about yourself highlighting your positive characteristics or other information you want your landlord to know.</label>
        <textarea
          className="textarea textarea--summary"
          placeholder="Your summary..."
          value={summary}
          onChange={(event) => onInputChange(event.target.value, ['summary'])}
        ></textarea>
      </fieldset>
    );
  }

}

Summary.propTypes = {
  summary: React.PropTypes.string,
  onInputChange: React.PropTypes.func,
};

export default Summary;
