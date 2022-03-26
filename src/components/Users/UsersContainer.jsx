import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Preloader from '../common/Preloader/Preloader'
import Users from './Users'
import {
  followUser,
  unfollowUser,
  setCurrentPage,
  setFollowingProgress,
  getUsers,
  unfollow,
  follow
} from '../../redux/users-reducer'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(this.props.pageSize, pageNumber);
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

const mapStateToProps = (state) => {
  return {
    users:               state.usersPage.users,
    pageSize:            state.usersPage.pageSize,
    currentPage:         state.usersPage.currentPage,
    totalUsersCount:     state.usersPage.totalUsersCount,
    isFetching:          state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose(
  connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setCurrentPage,
    setFollowingProgress,
    getUsers,
    unfollow,
    follow
  }),
  withAuthRedirect
)(UsersContainer);
