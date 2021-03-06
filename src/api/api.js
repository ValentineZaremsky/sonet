import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "api-key": "1fb48d8f-634a-4423-a834-db9c63a9e394"
  }
});

export const authAPI = {
  authMe() {return (
    instance
    .get(`auth/me`)
    .then(response => {return response.data})
  )},
  logIn(loginData) {return (
    instance
    .post(`/auth/login`, loginData)
    .then(response => {return response.data})
  )},
  logOut() {return (
    instance
    .delete(`/auth/login`)
    .then(response => {return response.data})
  )}
}

export const securityAPI = {
  getCaptchaUrl() {return (
    instance
    .get(`security/get-captcha-url`)
    .then(response => {return response.data})
  )}
}

export const usersAPI = {
  getUsers(pageSize = 10, currentPage = 1) {return (
    instance
    .get(`users?count=${pageSize}&page=${currentPage}`)
    .then(response => {return response.data})
  )},
  getFriends(pageSize = 18, currentPage = 1, friend = true) {return (
    instance
    .get(`users?count=${pageSize}&page=${currentPage}&friend=${friend}`)
    .then(response => {return response.data})
  )}
}

export const profileAPI = {
  getProfile(userId) {return (
    instance
    .get(`profile/${userId}`)
    .then(response => {return response.data})
  )},
  getStatus(userId) {return (
    instance
    .get(`/profile/status/${userId}`)
    .then(response => {return response.data})
  )},
  saveStatus(status) {return (
    instance
    .put('/profile/status/', { status: status })
    .then(response => {return response.data})
  )},
  saveProfile(profile) {return (
    instance
    .put('/profile/', profile)
    .then(response => {return response.data})
  )},
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return (
      instance
      .put(`profile/photo`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
    );
  }
}

export const followAPI = {
  unfollow(userId) {return (
    instance
    .delete(`follow/${userId}`)
    .then(response => {return response.data})
  )},
  follow(userId) {return (
    instance
    .post(`follow/${userId}`, {})
    .then(response => {return response.data})
  )}
}
