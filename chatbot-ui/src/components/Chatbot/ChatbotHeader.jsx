/* Chatbot Header Component */

import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import ChatbotIcon from './ChatbotIcon';

// Styles
import './ChatbotHeader.scss';

const ChatbotHeader = ({ actions }) => (
  <div className="chatbot__header">
    <div className="chatbot__header__bar">
      <IconButton icon="fas fa-info-circle" clickFunction={actions.showInfoModal} theme="light" />
    </div>
    <ChatbotIcon />
  </div>
);

ChatbotHeader.propTypes = {
  actions: PropTypes.object.isRequired
};

export default ChatbotHeader;
