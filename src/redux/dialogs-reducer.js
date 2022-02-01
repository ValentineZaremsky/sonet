const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      if (state.newMessageText !== '') {
        let newMessage = {
          id: state.messages[state.messages.length - 1].id + 1,
          text: state.newMessageText,
          align: 'right'
        };
        state.messages.push(newMessage);
        state.newMessageText = '';
      }
      return state;
    case UPDATE_MESSAGE:
      state.newMessageText = action.text;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE
})

export const updateMessageActionCreator = (value) => ({
  type: UPDATE_MESSAGE,
  text: value
})

export default dialogsReducer;
