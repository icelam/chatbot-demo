/* Chatbot Speech Bubble Component */

import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './ChatbotBubble.scss';

const ChatbotBubble = ({ text, user }) => (
  <span className={`chatbot__bubble chatbot__bubble--${user}`}>
    { text }
  </span>
);

ChatbotBubble.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

export default ChatbotBubble;
