/* Chatbot History Component */

import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './ChatbotRetrySend.scss';

const ChatbotRetrySend = ({ actions }) => (
  <div className="chatbot__retry">
    <button type="button" className="chatbot__retry__button" onClick={actions.retrySubmitQuestion}>
      Failed to send message. Click here to retry.
    </button>
  </div>
);

ChatbotRetrySend.propTypes = {
  actions: PropTypes.object.isRequired
};

export default ChatbotRetrySend;
