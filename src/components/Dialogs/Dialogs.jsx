import React from 'react';
import css from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer'

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map( d => <Dialog id={d.id} name={d.name} avatar={d.avatar} />);
  let messagesElements = props.dialogsPage.messages.map( m => <Message id={m.id} message={m.text} align={m.align} /> );

  let addNewMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (event) => {
    let text = event.target.value;
    let action = updateMessageActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={css.dialogsBlock}>
      <div className={css.dialogs}>
        { dialogsElements }
      </div>
      <div>
        <div className={css.messages}>
          { messagesElements }
        </div>
        <div className={css.newMessage}>
          <textarea
            value={props.dialogsPage.newMessageText}
            placeholder='Enter your message'
            onChange={onMessageChange}
          />
          <button onClick={addNewMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
