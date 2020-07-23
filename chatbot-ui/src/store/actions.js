import axios from 'axios';
import * as types from './types';

const serverConnectSuccess = () => ({
  type: types.SERVER_CONNECT_SUCCESS
});

const serverConnectFail = () => ({
  type: types.SERVER_CONNECT_FAIL
});

const resetSendError = () => ({
  type: types.RESET_SEND_ERROR
});

const waitForAnswer = () => ({
  type: types.WAIT_FOR_ANSWER
});

const waitForAnswerFailed = () => ({
  type: types.WAIT_FOR_ANSWER_FAILED
});

const receivedAnswer = (text) => ({
  type: types.RECEIVED_ANSWER,
  text
});

export const addMessage = (text, user) => ({
  type: types.ADD_MESSAGE,
  text,
  user
});

const getWelcomeResponse = () => (dispatch) => {
  axios.get(`${process.env.REACT_APP_API_DOMAIN}/api/v1/welcome?_=${Date.now()}`)
    .then((response) => {
      if (response.data.answer) {
        // Save answer to store and enable livechat
        dispatch(serverConnectSuccess());
        dispatch(addMessage(response.data.answer, 'bot'));
      } else {
        dispatch(serverConnectFail());
      }
    }).catch((error) => {
      dispatch(serverConnectFail());
    });
};

export const testConnection = () => (dispatch) => dispatch(getWelcomeResponse());

const postQuestionToServer = (text, retry = false) => (dispatch) => {
  // Disable Send button and save question to store
  if (!retry) {
    dispatch(addMessage(text, 'user'));
  }

  dispatch(waitForAnswer(text));

  // Get bot response
  const payload = { question: text };
  axios.post(`${process.env.REACT_APP_API_DOMAIN}/api/v1/answer?_=${Date.now()}`, payload)
    .then(({ data }) => {
      if (data.answer) {
        // Save answer to store and re-enable send button
        dispatch(receivedAnswer(data.answer));
      } else {
        // Show retry button
        dispatch(waitForAnswerFailed());
      }
    }).catch((error) => {
      // Show retry button
      dispatch(waitForAnswerFailed());
    });
};

export const submitQuestion = (text) => (dispatch) => dispatch(postQuestionToServer(text, false));

const getLastQuestion = (state) => {
  const [lastUserRecord] = state.chatRecord.filter((record) => record.user === 'user').slice(-1);
  return lastUserRecord.text;
};

export const retrySubmitQuestion = () => (dispatch, getState) => {
  dispatch(resetSendError());

  const text = getLastQuestion(getState());
  return dispatch(postQuestionToServer(text, true));
};

export const showInfoModal = () => ({
  type: types.SHOW_INFO_MODAL
});

export const closeInfoModal = () => ({
  type: types.CLOSE_INFO_MODAL
});
