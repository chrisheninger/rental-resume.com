import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

class Select extends React.Component {

  renderOption(option) {
    return (
      <option
        value={option.value}
        key={option.text}
        disabled={option.disabled || false}
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
    const selectProps = cloneDeep(this.props);
    delete selectProps.options;

    return (
      <select
        {...selectProps}
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
