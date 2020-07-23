/* Chatbot History Component */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ChatbotMessage from './ChatbotMessage';
import ChatbotTypingIndicator from './ChatbotTypingIndicator';
import ChatbotRetrySend from '../../containers/ChatbotRetrySendContainer';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

// Styles
import './ChatbotHistory.scss';

const ChatbotHistory = ({
  readyToChat, serverError, waitingForAnswer, sendError, chatRecord
}) => {
  let chatHistory = null;

  useEffect(() => {
    if (chatHistory) {
      const recordCount = chatHistory.childElementCount;
      const scrollToPos = chatHistory.children[recordCount - 2].offsetTop;
      chatHistory.scrollTop = scrollToPos;
    }
  }, [chatHistory, chatRecord]);

  return (
    <div className="chatbot__history" ref={(node) => { chatHistory = node; }}>
      <Loading show={!readyToChat} />
      {
        chatRecord.map(({ text, user }, index) => (
          <ChatbotMessage key={index} text={text} user={user} />
        ))
      }
      {waitingForAnswer ? <ChatbotTypingIndicator /> : ''}
      {sendError ? <ChatbotRetrySend /> : ''}
      <ErrorMessage message="Could not connect to server" show={serverError} />
    </div>
  );
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
