import React from "react";
import {
  createPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profile-reducer.mjs";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState()

  let createPost = () => {
    props.store.dispatch(createPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = onPostChangeActionCreator(text);
    props.store.dispatch(action);
  };

  return ( <MyPosts
    createPost={createPost}
    updateNewPostText={onPostChange}
    postData={state.profilePage.postData}
    newPostText={state.profilePage.newPostText}
     />);
};

export default MyPostsContainer;
