/* Chatbot Speech Bubble Component */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Styles
import './ChatbotBubble.scss';

const createMarkup = (rawContent) => ({ __html: rawContent });

const ChatbotBubble = ({ text, user }) => (
  <span className={`chatbot__bubble chatbot__bubble--${user}`} dangerouslySetInnerHTML={createMarkup(text)} />
);

ChatbotBubble.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

export default memo(ChatbotBubble);
