/* Chatbot Info Component */

import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';

import appIcon from 'images/logo.png';

const ChatbotInfo = ({ showInfo, actions }) => (
  <Modal
    icon={appIcon}
    title="Chatbot Demo"
    content={[
      'Author: Ice Lam',
      'Developed on 21 April, 2019',
      '',
      'This is a simple chatbot demo built with Node.js (Express), node-nlp, ReactJS and Redux.',
      '',
      [
        'The chatbot icons made by ',
        <a href="https://www.freepik.com/" title="Freepik" target="_blank" rel="noopener noreferrer" key="freepik">Freepik</a>,
        ' from ', <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer" key="flaticon">www.flaticon.com</a>,
        ' is licensed by ', <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer" key="cc">CC 3.0 BY</a>
      ]
    ]}
    show={showInfo}
    closeFunction={actions.closeInfoModal}
  />
);

ChatbotInfo.propTypes = {
  showInfo: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

export default ChatbotInfo;
