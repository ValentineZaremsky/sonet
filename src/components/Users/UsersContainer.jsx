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
  setIsFetching
} from '../../redux/users-reducer'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    axios
    .get(`https://randomuser.me/api/?seed=kamasutra&results=${this.props.pageSize}&page=${this.props.currentPage}`)
    .then(response => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.data.results);
    });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios
    .get(`https://randomuser.me/api/?seed=kamasutra&results=${this.props.pageSize}&page=${pageNumber}`)
    .then(response => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.data.results);
    });
  }

  render() {
    return (
      <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users
          users        = {this.props.users}
          pageSize     = {this.props.pageSize}
          usersCount   = {this.props.usersCount}
          currentPage  = {this.props.currentPage}
          unfollowUser = {this.props.unfollowUser}
          followUser   = {this.props.followUser}
          onPageChange = {this.onPageChange}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users:       state.usersPage.users,
    pageSize:    state.usersPage.pageSize,
    usersCount:  state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
    isFetching:  state.usersPage.isFetching
  }
}

export default connect(
  mapStateToProps,
  {
    setUsers,
    followUser,
    unfollowUser,
    setCurrentPage,
    setIsFetching
  }
)(UsersContainer);
