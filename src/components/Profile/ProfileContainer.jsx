import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withRouter } from '../../hoc/withRouter';
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

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
