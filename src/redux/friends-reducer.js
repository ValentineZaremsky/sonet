import { usersAPI } from '../api/api'

const SET_FRIENDS     = 'SET-FRIENDS';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

const initialState = {
  friends: [],
  pageSize: 3,
  totalUsersCount: 0,
  isFetching: false
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.friends
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
}

export const setFriends = (friends) => ({
  type: SET_FRIENDS,
  friends
})
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching
})

export const requestFriends = (pageSize, page, friend) => async (dispatch) => {
  dispatch(setIsFetching(true));
  let data = await usersAPI.getFriends(pageSize, page, friend)
  dispatch(setIsFetching(false));
  dispatch(setFriends(data.items));
}

export default friendsReducer;
