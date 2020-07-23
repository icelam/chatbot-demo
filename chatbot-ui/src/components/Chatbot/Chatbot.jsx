/* ChatBot Component */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ChatbotHeader from '../../containers/ChatbotHeaderContainer';
import ChatbotHistory from '../../containers/ChatbotHistoryContainer';
import ChatbotInputBar from '../../containers/ChatbotInputBarContainer';

// Styles
import './Chatbot.scss';

const Chatbot = ({ actions }) => {
  useEffect(() => {
    actions.testConnection();
  }, [actions]); // Should only run once, normally actions won't change

  return (
    <div className="chatbot">
      <ChatbotHeader />
      <ChatbotHistory />
      <ChatbotInputBar />
    </div>
  );
};

Chatbot.propTypes = {
  actions: PropTypes.object.isRequired
};

export default Chatbot;
