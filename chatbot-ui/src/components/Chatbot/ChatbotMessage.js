/* Chatbot Message Component */

import React from 'react';
import PropTypes from 'prop-types';

import ChatbotBubble from 'components/Chatbot/ChatbotBubble';

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

export default ChatbotMessage;
