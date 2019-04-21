/* Chatbot Header Component */

import React from 'react';

import botIcon from 'images/bot.jpg';

// Styles
import './ChatbotIcon.scss';

const ChatbotIcon = () => (
  <div className="chatbot__icon">
    <img src={botIcon} alt="" className="chatbot__icon__image"/>
  </div>
);

export default ChatbotIcon;
