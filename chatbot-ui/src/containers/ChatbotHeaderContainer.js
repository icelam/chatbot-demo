import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChatbotActions from 'store/actions';
import ChatbotHeader from 'components/Chatbot/ChatbotHeader';

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ChatbotActions, dispatch)
});

const ChatbotHeaderContainer = connect(
  null,
  mapDispatchToProps
)(ChatbotHeader);

export default ChatbotHeaderContainer;
