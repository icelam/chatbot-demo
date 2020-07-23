import * as types from './types';
import initialState from './states';

export default (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    // Test Conections
    case types.SERVER_CONNECT_SUCCESS:
      return {
        ...state,
        readyToChat: true
      };

    case types.SERVER_CONNECT_FAIL:
      return {
        ...state,
        readyToChat: false,
        serverError: true
      };

    // Add message
    case types.ADD_MESSAGE:
      return {
        ...state,
        chatRecord: [
          ...state.chatRecord,
          {
            text: action.text,
            user: action.user
          }
        ]
      };

    // Get Answer
    case types.WAIT_FOR_ANSWER:
      return {
        ...state,
        waitingForAnswer: true
      };

    case types.WAIT_FOR_ANSWER_FAILED:
      return {
        ...state,
        waitingForAnswer: false,
        sendError: true
      };

    case types.RECEIVED_ANSWER:
      return {
        ...state,
        waitingForAnswer: false,
        chatRecord: [
          ...state.chatRecord,
          {
            text: action.text,
            user: 'bot'
          }
        ]
      };

    // Error handlings
    case types.RESET_SEND_ERROR:
      return {
        ...state,
        sendError: false
      };

    // Show Info
    case types.SHOW_INFO_MODAL:
      return {
        ...state,
        showInfo: true
      };

    case types.CLOSE_INFO_MODAL:
      return {
        ...state,
        showInfo: false
      };

    default:
      return state;
  }
};
