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
  logIn(email, password, rememberMe = false) {return (
    instance
    .post(`/auth/login`, {email, password, rememberMe})
    .then(response => {return response.data})
  )},
  logOut() {return (
    instance
    .delete(`/auth/login`)
    .then(response => {return response.data})
  )}
}

export const usersAPI = {
  getUsers(pageSize = 10, currentPage = 1) {return (
    instance
    .get(`users?count=${pageSize}&page=${currentPage}`)
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
  updateStatus(status) {return (
    instance
    .put('/profile/status/', { status: status })
    .then(response => {return response.data})
  )}
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
