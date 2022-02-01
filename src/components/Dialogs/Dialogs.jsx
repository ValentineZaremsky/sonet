import React from 'react';
import css from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( d => <Dialog id={d.id} name={d.name} avatar={d.avatar} />);
  let messagesElements = state.messages.map( m => <Message id={m.id} message={m.text} align={m.align} /> );
  let newMessageText = state.newMessageText;

  let onSendMessage = () => {
    props.addNewMessage();
  }

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.changeMessage(text);
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
            value={newMessageText}
            placeholder='Enter your message'
            onChange={onMessageChange}
          />
          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
