import React from 'react';
import { useMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : 22995;
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then(response => {
      this.props.setUserProfile(response.data);
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

export default connect(
  mapStateToProps,
  {
    setUserProfile
  }
)(ProfileURLMatch);
