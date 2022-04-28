import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withRouter } from '../../hoc/withRouter';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

  refreshProfile() {
    const {match, myUserId} = this.props;
    let userId = match ? match.params.userId : myUserId;
    if (!userId) {
      this.props.history.push("/login");
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match?.params.userId !== prevProps.match?.params.userId ) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        isOwner={!this.props.match?.params.userId}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
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
  connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
