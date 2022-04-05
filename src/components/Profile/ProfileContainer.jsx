import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withRouter } from '../../hoc/withRouter';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : this.props.myUserId;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  profile:  state.profilePage.profile,
  status:   state.profilePage.status,
  myUserId: state.auth.userId,
  isAuth:   state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
