import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChatbotActions from 'store/actions';
import Chatbot from 'components/Chatbot/Chatbot';

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ChatbotActions, dispatch)
});

const ChatbotContainer = connect(
  null,
  mapDispatchToProps
)(Chatbot);

export default ChatbotContainer;
