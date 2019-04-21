import { connect } from 'react-redux';
import ChatbotHistory from 'components/Chatbot/ChatbotHistory';

const mapStateToProps = (state) => ({
  readyToChat: state.readyToChat,
  serverError: state.serverError,
  chatRecord: state.chatRecord,
  waitingForAnswer: state.waitingForAnswer,
  sendError: state.sendError
});

const ChatbotHistoryContainer = connect(
  mapStateToProps,
  null
)(ChatbotHistory);

export default ChatbotHistoryContainer;
