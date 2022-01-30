import React from 'react';
import css from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map( d => <Dialog id={d.id} name={d.name} avatar={d.avatar} />);
  let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.text} align={m.align} /> );

  let newMessageElement = React.createRef();

  let addNewMessage = () => {
    props.dispatch({ type: 'ADD_MESSAGE' });
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = { type: 'UPDATE_MESSAGE', text: text };
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
