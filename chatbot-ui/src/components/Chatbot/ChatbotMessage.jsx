/* Chatbot Message Component */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ChatbotBubble from './ChatbotBubble';

// Styles
import './ChatbotMessage.scss';

const ChatbotMessage = ({ text, user }) => (
  <div className={`chatbot__message chatbot__message--${user}`}>
    <ChatbotBubble text={text} user={user} />
  </div>
);

ChatbotMessage.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

export default memo(ChatbotMessage);
