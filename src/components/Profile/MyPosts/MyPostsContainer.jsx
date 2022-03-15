import { connect } from "react-redux";
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addPostActionCreator())
    },
    changePost: (text) => {
      dispatch(updatePostActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
