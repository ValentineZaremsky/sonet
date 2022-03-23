import React from 'react';
import { useMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { profileAPI } from '../../api/api'
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : 22995;
    profileAPI.getProfile(userId)
    .then(data => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const ProfileURLMatch = (props) => {
  const match = useMatch('/profile/:userId/');
  return <ProfileContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {setUserProfile})(ProfileURLMatch);
