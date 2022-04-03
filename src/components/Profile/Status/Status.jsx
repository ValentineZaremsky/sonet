import React from 'react';
import css from './Status.module.css';

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({ editMode: true });
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <div className={css.status}>
        { this.state.editMode
        ? <div>
            <input
              type="text"
              autoFocus
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        : <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "Type here something about you"}
            </span>
          </div>
        }
      </div>
    )
  }
}

export default Status;
