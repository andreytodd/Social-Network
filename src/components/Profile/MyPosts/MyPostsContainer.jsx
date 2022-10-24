import React from "react";
import {
  createPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profile-reducer.mjs";
import StoreContext from "../../../StoreContext.js";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let createPost = () => {
            store.dispatch(createPostActionCreator());
          };

          let onPostChange = (text) => {
            let action = onPostChangeActionCreator(text);
            store.dispatch(action);
          };

          return <MyPosts
            createPost={createPost}
            updateNewPostText={onPostChange}
            postData={store.getState().profilePage.postData}
            newPostText={store.getState().profilePage.newPostText}
          />
        }
      }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
