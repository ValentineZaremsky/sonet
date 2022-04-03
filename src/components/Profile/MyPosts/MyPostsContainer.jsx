import { connect } from "react-redux";
import { compose } from "redux";
import { addPost } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (post) => {
      dispatch(addPost(post))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);
