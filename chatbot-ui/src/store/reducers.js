import * as types from './types';
import initialState from './states';

export default (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    //Test Conections
    case types.SERVER_CONNECT_SUCCESS:
      return Object.assign({}, state, {
        readyToChat: true
      });
    case types.SERVER_CONNECT_FAIL:
      return Object.assign({}, state, {
        readyToChat: false,
        serverError: true
      });

    // Add message
    case types.ADD_MESSAGE:
      return Object.assign({}, state, {
        chatRecord: [
          ...state.chatRecord,
          {
            text: action.text,
            user: action.user
          }
        ]
      });

    // Get Answer
    case types.WAIT_FOR_ANSWER:
      return Object.assign({}, state, {
        waitingForAnswer: true,
        lastQuestion: action.text
      });
    case types.WAIT_FOR_ANSWER_FAILED:
      return Object.assign({}, state, {
        waitingForAnswer: false,
        sendError: true
      });
    case types.RECEIVED_ANSWER:
      return Object.assign({}, state, {
        waitingForAnswer: false,
        chatRecord: [
          ...state.chatRecord,
          {
            text: action.text,
            user: 'bot'
          }
        ]
      });

    // Error handlings
    case types.RESET_SEND_ERROR:
      return Object.assign({}, state, {
        sendError: false
      });

    //Show Info
    case types.SHOW_INFO_MODAL:
      return Object.assign({}, state, {
        showInfo: true
      });
    case types.CLOSE_INFO_MODAL:
      return Object.assign({}, state, {
        showInfo: false
      });
    default:
      return state;
  }
};
