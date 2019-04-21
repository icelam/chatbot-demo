import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChatbotActions from 'store/actions';
import ChatbotInfo from 'components/Chatbot/ChatbotInfo';

const mapStateToProps = (state) => ({
    showInfo: state.showInfo
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ChatbotActions, dispatch)
});

const ChatbotInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatbotInfo);

export default ChatbotInfoContainer;
