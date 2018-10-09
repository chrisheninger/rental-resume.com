import React, { Component } from "react";
import PropTypes from "prop-types";
import cloneDeep from "lodash/cloneDeep";

class Select extends Component {
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

    return <select {...selectProps}>{this.renderOptions()}</select>;
  }
}

Select.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.any,
      disabled: PropTypes.any
    })
  ).isRequired,
  value: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  tabIndex: PropTypes.string
};

export default Select;
