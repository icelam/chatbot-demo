/* Error Message Component */

import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './ErrorMessage.scss';

const ErrorMessage = ({message, show}) => (
  <div className={`error${show ? ' error--show' : ''}`}>
    <i className="fas fa-times-circle"></i>{message}
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool
}

ErrorMessage.defaultProps = {
  show: false
};

export default ErrorMessage;
