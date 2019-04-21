import React, { Component } from 'react';

import Chatbot from 'containers/ChatbotContainer';
import ChatbotInfo from 'containers/ChatbotInfoContainer';

// Styles
import 'styles/pages/Chatbot.scss';

class ChatbotPage extends Component {
  render() {
    return (
      <div className="page chatbot-page">
        <Chatbot />
        <ChatbotInfo />
      </div>
    );
  }
}

export default ChatbotPage;
