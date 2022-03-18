import React from 'react';
import { connect } from "react-redux";
import * as axios from 'axios';
import Users from './Users'
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator
} from '../../redux/users-reducer'

class UsersContainer extends React.Component {

  componentDidMount() {
    axios
    .get(`https://randomuser.me/api/?seed=kamasutra&results=${this.props.pageSize}&page=${this.props.currentPage}`)
    .then(response => { this.props.setUsers(response.data.results); });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
    .get(`https://randomuser.me/api/?seed=kamasutra&results=${this.props.pageSize}&page=${pageNumber}`)
    .then(response => { this.props.setUsers(response.data.results); });
  }

  render() {
    return (
      <Users
        users = {this.props.users}
        pageSize = {this.props.pageSize}
        usersCount = {this.props.usersCount}
        currentPage = {this.props.currentPage}
        unfollowUser = {this.props.unfollowUser}
        followUser = {this.props.followUser}
        onPageChange = {this.onPageChange}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users:       state.usersPage.users,
    pageSize:    state.usersPage.pageSize,
    usersCount:  state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followActionCreator(userId))
    },
    unfollowUser: (userId) => {
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageActionCreator(currentPage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
