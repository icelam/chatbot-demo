/* Chatbot Input Bar Component */

import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import IconButton from '../IconButton';

// Styles
import './ChatbotInputBar.scss';

const ChatbotInputBar = ({
  readyToChat, waitingForAnswer, sendError, actions
}) => {
  let chatbotInput = null;

  const inputSubmit = () => {
    if (readyToChat && !waitingForAnswer && !sendError && chatbotInput.value) {
      actions.submitQuestion(chatbotInput.value);
      chatbotInput.value = '';
    }
  };

  const keydown = (e) => {
    if (e.which === 13) {
      inputSubmit();
    }
  };

  return (
    <div className="chatbot__input">
      <Input placeholder="Type your message here..." ref={(node) => { chatbotInput = node; }} keydownFunction={keydown} />
      <IconButton icon="far fa-paper-plane" clickFunction={inputSubmit} disabled={!readyToChat || waitingForAnswer || sendError} />
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
