/* Text Field Component */

import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Input.scss';

const Input = React.forwardRef(({ placeholder, disabled, keydownFunction }, ref) => (
  <input
    placeholder={placeholder}
    className="input-field"
    disabled={disabled}
    ref={ref}
    onKeyDown={keydownFunction}
  />
));

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  keydownFunction: PropTypes.func
};

Input.defaultProps = {
  placeholder: undefined,
  disabled: false,
  keydownFunction: undefined
};

export default Input;
