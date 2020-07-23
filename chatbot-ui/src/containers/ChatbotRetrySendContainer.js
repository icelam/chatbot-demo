import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChatbotActions from '../store/actions';
import ChatbotRetrySend from '../components/Chatbot/ChatbotRetrySend';

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ChatbotActions, dispatch)
});

const ChatbotRetrySendContainer = connect(
  null,
  mapDispatchToProps
)(ChatbotRetrySend);

export default ChatbotRetrySendContainer;
