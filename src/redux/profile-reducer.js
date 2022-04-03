import { profileAPI } from '../api/api'

const ADD_POST    = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS  = 'SET-STATUS';

const initialState = {
  posts: [
    { id: 1, text: "It's my first post",        likes: 50 },
    { id: 2, text: "Hi, how are you?",          likes: 10 },
    { id: 3, text: "I can to map!",             likes:  1 },
    { id: 4, text: "And now I can pass props!", likes: 25 }
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts[state.posts.length - 1].id + 1,
        text: action.text,
        likes: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    case SET_PROFILE:
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

export const addPost = (post) => ({
  type: ADD_POST,
  text: post
})

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})

export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
  .then(data => {
    dispatch(setProfile(data));
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
