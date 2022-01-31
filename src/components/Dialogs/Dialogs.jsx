import React from 'react';
import css from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/state'

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map( d => <Dialog id={d.id} name={d.name} avatar={d.avatar} />);
  let messagesElements = props.dialogsPage.messages.map( m => <Message id={m.id} message={m.text} align={m.align} /> );

  let newMessageElement = React.createRef();

  let addNewMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = updateMessageActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={css.dialogsBlock}>
      <div className={css.dialogs}>
        { dialogsElements }
      </div>
      <div className={css.messages}>
        { messagesElements }
        <div>
          <textarea ref={newMessageElement} value={props.dialogsPage.newMessageText} onChange={onMessageChange} />
          <button onClick={addNewMessage}>Add message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
