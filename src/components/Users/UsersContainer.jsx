import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
import {
  getUsers,
  getPageSize,
  getCurrentPage,
  getTotalUsersCount,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/users-selectors";
import {
  followUser,
  unfollowUser,
  setCurrentPage,
  setFollowingProgress,
  requestUsers,
  unfollow,
  follow
} from '../../redux/users-reducer';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(this.props.pageSize, pageNumber);
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users
          users                = {this.props.users}
          pageSize             = {this.props.pageSize}
          currentPage          = {this.props.currentPage}
          totalUsersCount      = {this.props.totalUsersCount}
          unfollowUser         = {this.props.unfollowUser}
          followUser           = {this.props.followUser}
          onPageChange         = {this.onPageChange}
          followingInProgress  = {this.props.followingInProgress}
          unfollow             = {this.props.unfollow}
          follow               = {this.props.follow}
        />
      </>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users:               state.usersPage.users,
//     pageSize:            state.usersPage.pageSize,
//     currentPage:         state.usersPage.currentPage,
//     totalUsersCount:     state.usersPage.totalUsersCount,
//     isFetching:          state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

const mapStateToProps = (state) => {
  return {
    users:               getUsers(state),
    pageSize:            getPageSize(state),
    currentPage:         getCurrentPage(state),
    totalUsersCount:     getTotalUsersCount(state),
    isFetching:          getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setCurrentPage,
    setFollowingProgress,
    requestUsers,
    unfollow,
    follow
  }),
)(UsersContainer);

// withAuthRedirect
