/* Loading Spinner Component */

import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Loading.scss';

const Loading = ({ show }) => (
  <div className={`loading${show ? ' loading--show' : ''}`}>
    <div className="loading__spinner">
      <div className="loading__spinner__rect loading__spinner__rect--1" />
      <div className="loading__spinner__rect loading__spinner__rect--2" />
      <div className="loading__spinner__rect loading__spinner__rect--3" />
      <div className="loading__spinner__rect loading__spinner__rect--4" />
      <div className="loading__spinner__rect loading__spinner__rect--5" />
    </div>
  </div>
);

Loading.propTypes = {
  show: PropTypes.bool
};

Loading.defaultProps = {
  show: false
};

export default Loading;
