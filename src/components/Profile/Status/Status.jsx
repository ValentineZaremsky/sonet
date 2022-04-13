import React, { useEffect, useState } from 'react';
import css from './Status.module.css';

const Status = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status] );

  const activateEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div className={css.status}>
      { editMode
      ? <div>
          <input
            type="text"
            autoFocus
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      : <div>
          <span onDoubleClick={activateEditMode} className={props.status ? "" : `${css.nothing}`}>
            {props.status || "Type here something about you"}
          </span>
        </div>
      }
    </div>
  )
}

export default Status;
