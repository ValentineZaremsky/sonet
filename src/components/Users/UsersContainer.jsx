import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api'
import Users from './Users'
import Preloader from '../Preloader/Preloader'
import {
  setUsers,
  followUser,
  unfollowUser,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  setFollowingProgress
} from '../../redux/users-reducer'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
    .then(data => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.pageSize, pageNumber)
    .then(data => {
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
    });
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
          setFollowingProgress = {this.props.setFollowingProgress}
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

export default connect(
  mapStateToProps,
  {
    setUsers,
    followUser,
    unfollowUser,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setFollowingProgress
  }
)(UsersContainer);
