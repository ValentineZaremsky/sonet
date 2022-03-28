import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
  posts: [
    { id: 1, text: 'Hi, how are you?',          likes: 10 },
    { id: 2, text: "It's my first post",        likes: 50 },
    { id: 3, text: "I can to map!",             likes:  1 },
    { id: 4, text: "And now I can pass props!", likes: 25 }
  ],
  newPostText: 'IT-kamasutra',
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      if (state.newPostText !== '') {
        let newPost = {
          id: state.posts[state.posts.length - 1].id + 1,
          text: state.newPostText,
          likes: 0
        };
        return {
          ...state,
          posts: [...state.posts, newPost],
          newPostText: ''
        };
      }
      return state;
    case UPDATE_POST:
      return {
        ...state,
        newPostText: action.text
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
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

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
  .then(data => {
    dispatch(setUserProfile(data));
  });
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
  .then(data => {
    dispatch(setStatus(data));
  });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
  .then(data => {
    if (data.resultCode === 0)
      dispatch(setStatus(status));
  });
}


export default profileReducer;
