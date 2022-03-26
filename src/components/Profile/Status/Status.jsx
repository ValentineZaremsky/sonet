import React from 'react';
import css from './Status.module.css';

class Status extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({ editMode: true });
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false });
  }

  render() {
    return (
      <div className={css.status}>
        { this.state.editMode
        ? <div>
            <input
              type="text"
              autoFocus
              onBlur={this.deactivateEditMode}
              value={this.props.status}
            />
          </div>
        : <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        }
      </div>
    )
  }
}

export default Status;
