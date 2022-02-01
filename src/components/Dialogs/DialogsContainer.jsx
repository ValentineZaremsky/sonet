import React from 'react';
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer'

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let updateMessage = (text) => {
    props.store.dispatch(updateMessageActionCreator(text));
  }

  return <Dialogs dialogsPage={state} addNewMessage={addMessage} changeMessage={updateMessage} />;
}

export default DialogsContainer;
