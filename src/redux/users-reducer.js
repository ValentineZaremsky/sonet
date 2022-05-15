import { usersAPI, followAPI } from '../api/api'
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW                 = 'FOLLOW';
const UNFOLLOW               = 'UNFOLLOW';
const SET_USERS              = 'SET-USERS';
const SET_CURRENT_PAGE       = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT  = 'SET-TOTAL-USERS-COUNT';
const SET_IS_FETCHING        = 'SET-IS-FETCHING';
const SET_FOLLOWING_PROGRESS = 'SET-FOLLOWING-PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  totalUsersCount: 0,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case SET_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}

export const setUsers = (users) => ({
  type: SET_USERS,
  users
})
export const followUser = (userId) => ({
  type: FOLLOW,
  userId
})
export const unfollowUser = (userId) => ({
  type: UNFOLLOW,
  userId
})
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount
})
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching
})
export const setFollowingProgress = (isFetching, userId) => ({
  type: SET_FOLLOWING_PROGRESS,
  isFetching,
  userId
})

export const requestUsers = (pageSize, page) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(pageSize, page)
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(setFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(setFollowingProgress(false, userId));
}

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followAPI.follow.bind(userId), followUser)
  }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followAPI.unfollow.bind(userId), unfollowUser)
  }
}

export default usersReducer;
