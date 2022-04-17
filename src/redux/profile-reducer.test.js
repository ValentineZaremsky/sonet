import React from "react";
import ReactDOM from "react-dom";
import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, text: "It's my first post",        likes: 50 },
    { id: 2, text: "Hi, how are you?",          likes: 10 },
    { id: 3, text: "I can to map!",             likes:  1 },
    { id: 4, text: "And now I can pass props!", likes: 25 }
  ]
};

it("After adding quantity of posts should be incremented", () => {
  let action = addPost("IT-kamasutra.com");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});

it("Text of new post should be correct", () => {
  let action = addPost("IT-kamasutra.com");
  let newState = profileReducer(state, action);
  expect(newState.posts[4].text).toBe("IT-kamasutra.com");
});

it("After deleting quantity of posts should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it("After deleting quantity of posts shouldn't be decrement if ID is incorrect", () => {
  let action = deletePost(9999);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});
