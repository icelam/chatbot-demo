import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChatbotActions from '../store/actions';
import ChatbotInputBar from '../components/Chatbot/ChatbotInputBar';

const mapStateToProps = (state) => ({
  readyToChat: state.readyToChat,
  waitingForAnswer: state.waitingForAnswer,
  sendError: state.sendError
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ChatbotActions, dispatch)
});

const ChatbotInputBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatbotInputBar);

export default ChatbotInputBarContainer;
