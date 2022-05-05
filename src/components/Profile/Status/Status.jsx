import React, { useEffect, useState } from 'react';
import css from './Status.module.css';

const Status = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status] );

  const editOn = () => {
    setEditMode(true);
  }
  const editOff = () => {
    setEditMode(false);
    props.saveStatus(status);
  }
  const onChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  const statusInput = <input type="text" autoFocus onChange={onChange} onBlur={editOff} value={status}/>
  const statusSpan = props.isEditable
    ? <span onDoubleClick={editOn} className={props.status ? "" : `${css.nothing}`} title="Double click to edit">
        {props.status || "Type here something about you"}
      </span>
    : <span>{props.status || "\u00A0"}</span>

  return (
    <div className={css.status}>
      { props.isEditable && editMode ? statusInput : statusSpan}
    </div>
  )
}

export default Status;
