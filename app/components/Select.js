import React from 'react';

class Select extends React.Component {

  constructor() {
    super();

    this.renderOption = this.renderOption.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

  renderOption(option) {
    return (
      <option
        value = {option.value}
        key = {option.text}
        disabled = {option.disabled || false}
      >
        {option.text}
      </option>
    );
  }

  renderOptions() {
    if (!this.props.options) {
      return null;
    }

    return this.props.options.map(this.renderOption);
  }

  render() {
    return (
      <select
        {...this.props}
      >
        {this.renderOptions()}
      </select>
    );
  }
}

Select.propTypes = {
  id: React.PropTypes.string,
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  options: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      text: React.PropTypes.string,
      value: React.PropTypes.any,
      disabled: React.PropTypes.any,
      selected: React.PropTypes.bool,
    })
  ).isRequired,
  value: React.PropTypes.any,
  onFocus: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onKeyDown: React.PropTypes.func,
  onKeyUp: React.PropTypes.func,
  onKeyPress: React.PropTypes.func,
  tabIndex: React.PropTypes.string,
};

export default Select;
