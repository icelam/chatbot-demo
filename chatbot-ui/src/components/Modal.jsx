import React from 'react';
import PropTypes from 'prop-types';

import IconButton from './IconButton';

// Styles
import './Modal.scss';

const Modal = ({
  icon, title, content, show, closeFunction
}) => (
  <div className={`modal${show ? ' modal--show' : ''}`}>
    <div className="modal__box">
      <div className="modal__box__header">
        <IconButton icon="fas fa-times" clickFunction={closeFunction} theme="light" />
      </div>
      <div className="modal__box__content">
        {
          icon
            ? <div className="modal__box__content__icon"><img src={icon} alt="" /></div>
            : null
        }
        <div className="modal__box__content__text">
          {
            title
              ? <h3>{title}</h3>
              : null
          }
          {content}
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  show: PropTypes.bool,
  closeFunction: PropTypes.func.isRequired
};

Modal.defaultProps = {
  show: false,
  icon: undefined,
  title: undefined
};

export default Modal;
