import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {
  createPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/state.mjs";

const MyPosts = (props) => {
  let postElements = props.postData.map((post) => (
    <Post message={post.message} likes={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let createPost = () => {
    props.dispatch(createPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreator(text));
  };

  return (
    <div className={classes.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={createPost}>Add Post</button>
        </div>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
