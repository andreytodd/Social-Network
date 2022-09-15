import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postElements = props.postData.map((post) => (
    <Post message={post.message} likes={post.likesCount} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
