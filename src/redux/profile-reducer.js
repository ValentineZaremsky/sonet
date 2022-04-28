import { profileAPI } from '../api/api'

const ADD_POST    = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS  = 'SET-STATUS';
const SAVE_PHOTO  = 'SAVE-PHOTO';

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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
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
    case SAVE_PHOTO:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos }}
    default:
      return state;
  }
}

export const addPost = (post) => ({
  type: ADD_POST,
  text: post
})

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId
})

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO,
  photos
})


export const getProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId)
  dispatch(setProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0)
    dispatch(setStatus(status));
}

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export default profileReducer;
