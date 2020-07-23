/* Buttons with Icons Coomponent */

import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './IconButton.scss';

const IconButton = ({
  icon, clickFunction, theme, disabled
}) => (
  <button
    type="button"
    className={`icon-button${theme === 'light' ? ' icon-button--light' : ''}`}
    onClick={clickFunction}
    disabled={disabled}
  >
    <i className={icon} />
  </button>
);

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  clickFunction: PropTypes.func.isRequired,
  theme: PropTypes.string,
  disabled: PropTypes.bool
};

IconButton.defaultProps = {
  disabled: false,
  theme: ''
};

export default IconButton;
