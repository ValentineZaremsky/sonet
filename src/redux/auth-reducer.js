import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  userId: null,
  email:  null,
  login:  null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => async (dispatch) => {
  let data = await authAPI.authMe()
  if (data.resultCode === 0) {
    let {id, email, login} = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (loginData, setStatus) => async (dispatch) => {
  let data = await authAPI.logIn(loginData)
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    setStatus({error: data.messages})
  }
}

export const logout = () => async (dispatch) => {
  let data = await authAPI.logOut()
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}


export default authReducer;
