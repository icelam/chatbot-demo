/* Text Field Component */

import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Input.scss';

const Input = React.forwardRef(({ placeholder, disabled, keydownFunction }, ref) => {
  // Default attributes
  let attributes = {
    placeholder: placeholder,
    className: 'input-field',
    disabled: disabled,
    ref: ref
  };

  //Check if keydown function exists before creating attribute
  if (keydownFunction)
    Object.assign(attributes, { onKeyDown: keydownFunction });

  return (
    <input {...attributes} />
  )
});

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  keydownFunction: PropTypes.func
};

Input.defaultProps = {
  disabled: false
};

export default Input;
