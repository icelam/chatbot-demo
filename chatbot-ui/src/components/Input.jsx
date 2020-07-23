/* Text Field Component */

import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Input.scss';

const Input = ({
  placeholder, disabled, keydownFunction, onChange, value
}) => (
  <input
    placeholder={placeholder}
    className="input-field"
    disabled={disabled}
    onKeyDown={keydownFunction}
    onChange={onChange}
    value={value}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  keydownFunction: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

Input.defaultProps = {
  placeholder: undefined,
  disabled: false,
  keydownFunction: undefined
};

export default Input;
