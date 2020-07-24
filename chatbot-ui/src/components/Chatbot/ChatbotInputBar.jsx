/* Chatbot Input Bar Component */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import IconButton from '../IconButton';

// Styles
import './ChatbotInputBar.scss';

const ChatbotInputBar = ({
  readyToChat, waitingForAnswer, sendError, actions
}) => {
  const [chatbotInputValue, setChatbotInputValue] = useState('');
  const changeHandler = useCallback((event) => {
    setChatbotInputValue(event.target.value);
  }, []);

  const inputSubmit = () => {
    if (readyToChat && !waitingForAnswer && !sendError && chatbotInputValue) {
      actions.submitQuestion(chatbotInputValue);
      setChatbotInputValue('');
    }
  };

  const keydown = (e) => {
    if (e.which === 13) {
      inputSubmit();
    }
  };

  return (
    <div className="chatbot__input">
      <Input
        placeholder="Type your message here..."
        keydownFunction={keydown}
        value={chatbotInputValue}
        onChange={changeHandler}
      />
      <IconButton
        icon="far fa-paper-plane"
        clickFunction={inputSubmit}
        disabled={!readyToChat || waitingForAnswer || sendError || !chatbotInputValue}
      />
    </div>
  );
};

ChatbotInputBar.propTypes = {
  readyToChat: PropTypes.bool.isRequired,
  waitingForAnswer: PropTypes.bool.isRequired,
  sendError: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

export default ChatbotInputBar;
