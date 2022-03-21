import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Profile from './Profile';
// import Preloader from '../Preloader/Preloader';
import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios
    .get('https://social-network.samuraijs.com/api/1.0/profile/2')
    .then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  // onPageChange = (pageNumber) => {
  //   this.props.setCurrentPage(pageNumber);
  //   this.props.setIsFetching(true);
  //   axios
  //   .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
  //   .then(response => {
  //     this.props.setIsFetching(false);
  //     this.props.setUsers(response.data.items);
  //   });
  // }

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

export default connect(
  mapStateToProps,
  {
    setUserProfile
  }
)(ProfileContainer);
