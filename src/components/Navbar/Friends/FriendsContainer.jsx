import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { requestFriends } from '../../../redux/friends-reducer';
import Friends from './Friends';

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.requestFriends(this.props.pageSize, this.props.currentPage);
  }

  render() {
    return (
      <Friends friends={this.props.friends} isAuth={this.props.isAuth}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friendsBlock.friends,
    isAuth:  state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, {requestFriends})
)(FriendsContainer);
