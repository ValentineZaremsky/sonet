const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

const profileReducer = (state, action) => {

  switch (action.type) {
    case ADD_POST:
      if (state.newPostText !== '') {
        let newPost = {
          id: state.posts[state.posts.length - 1].id + 1,
          text: state.newPostText,
          likes: 0
        };
        state.posts.push(newPost);
        state.newPostText = '';
      }
      return state;
    case UPDATE_POST:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updatePostActionCreator = (value) => ({
  type: UPDATE_POST,
  text: value
})

export default profileReducer;
