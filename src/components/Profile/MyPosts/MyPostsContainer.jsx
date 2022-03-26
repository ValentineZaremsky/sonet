import { connect } from "react-redux";
import { compose } from "redux";
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);
