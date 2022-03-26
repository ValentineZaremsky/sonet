import React from 'react';
import { useMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : 22995;
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

const ProfileURLMatch = (props) => {
  const match = useMatch('/profile/:userId/');
  return <AuthRedirectComponent {...props} match={match} />;
}

export default connect(mapStateToProps, {getUserProfile})(ProfileURLMatch);
