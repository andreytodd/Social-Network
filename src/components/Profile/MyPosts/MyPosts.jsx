import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let postElements = props.postData.map((post) => (
    <Post message={post.message} likes={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onCreatePost = () => {
    props.createPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
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
          <button onClick={onCreatePost}>Add Post</button>
        </div>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
