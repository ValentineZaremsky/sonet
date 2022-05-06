import { authAPI, securityAPI } from '../api/api'

const SET_USER_DATA   = 'SET-USER-DATA';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';

const initialState = {
  userId: null,
  email:  null,
  login:  null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA_URL:
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

export const setCaptchaUrl = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch) => {
  let data = await authAPI.authMe()
  if (data.resultCode === 0) {
    let {id, email, login} = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  dispatch(setCaptchaUrl(data.url));
}

export const login = (loginData, setStatus) => async (dispatch) => {
  let data = await authAPI.logIn(loginData)
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    setStatus({ error: data.messages })
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
  }
}

export const logout = () => async (dispatch) => {
  let data = await authAPI.logOut()
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}


export default authReducer;
