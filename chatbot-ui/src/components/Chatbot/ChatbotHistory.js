/* Chatbot History Component */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ChatbotMessage from 'components/Chatbot/ChatbotMessage';
import ChatbotTypingIndicator from 'components/Chatbot/ChatbotTypingIndicator';
import ChatbotRetrySend from 'containers/ChatbotRetrySendContainer';
import Loading from 'components/Loading';
import ErrorMessage from 'components/ErrorMessage';

// Styles
import './ChatbotHistory.scss';

const ChatbotHistory = ({ readyToChat, serverError, waitingForAnswer, sendError , chatRecord }) => {
  let chatHistory = null;

  useEffect(() => {
    if (chatHistory) {
      const recordCount = chatHistory.childElementCount;
      const scrollToPos = chatHistory.children[recordCount - 2].offsetTop;
      chatHistory.scrollTop = scrollToPos;
    }
  },[chatHistory, chatRecord]);

  return (
    <div className="chatbot__history" ref={(node) => { chatHistory = node }}>
      <Loading show={!readyToChat} />
      { chatRecord.map((r, i) => <ChatbotMessage key={i} text={r.text} user={r.user}/>) }
      { waitingForAnswer ? <ChatbotTypingIndicator /> : '' }
      { sendError ? <ChatbotRetrySend /> : '' }
      <ErrorMessage message="Could not connect to server" show={serverError} />
    </div>
  )
};

ChatbotHistory.propTypes = {
  chatRecord: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  })).isRequired,
  readyToChat: PropTypes.bool.isRequired,
  serverError: PropTypes.bool.isRequired,
  waitingForAnswer: PropTypes.bool.isRequired,
  sendError: PropTypes.bool.isRequired
};

export default ChatbotHistory;
