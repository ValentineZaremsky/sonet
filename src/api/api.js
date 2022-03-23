import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "api-key": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
  }
});

export const authAPI = {
  authMe() {
    return (
      instance
      .get(`auth/me`)
      .then(response => {return response.data})
    )
  }
}

export const usersAPI = {
  getUsers(pageSize = 10, currentPage = 1) {
    return (
      instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then(response => {return response.data})
    )
  }
}

export const profileAPI = {
  getProfile(userId) {
    return (
      instance
      .get(`profile/${userId}`)
      .then(response => {return response.data})
    )
  }
}

export const followAPI = {
  unfollow(userId) {
    return (
      instance
      .delete(`follow/${userId}`)
      .then(response => {return response.data})
    )
  },
  follow(userId) {
    return (
      instance
      .post(`follow/${userId}`, {})
      .then(response => {return response.data})
    )
  }
}
