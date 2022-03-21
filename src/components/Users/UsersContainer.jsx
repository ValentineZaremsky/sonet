import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users'
import Preloader from '../Preloader/Preloader'
import {
  setUsers,
  followUser,
  unfollowUser,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching
} from '../../redux/users-reducer'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
    .then(response => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
    .then(response => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users
          users           = {this.props.users}
          pageSize        = {this.props.pageSize}
          currentPage     = {this.props.currentPage}
          totalUsersCount = {this.props.totalUsersCount}
          unfollowUser    = {this.props.unfollowUser}
          followUser      = {this.props.followUser}
          onPageChange    = {this.onPageChange}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users:           state.usersPage.users,
    pageSize:        state.usersPage.pageSize,
    currentPage:     state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching:      state.usersPage.isFetching
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
    setIsFetching
  }
)(UsersContainer);
