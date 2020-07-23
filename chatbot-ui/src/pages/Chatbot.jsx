import React from 'react';

import Chatbot from '../containers/ChatbotContainer';
import ChatbotInfo from '../containers/ChatbotInfoContainer';

// Styles
import '../styles/pages/Chatbot.scss';

const ChatbotPage = () => (
  <div className="page chatbot-page">
    <Chatbot />
    <ChatbotInfo />
  </div>
);

export default ChatbotPage;
