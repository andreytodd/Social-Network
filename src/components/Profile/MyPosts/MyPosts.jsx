import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
      <div className={classes.posts}>
        <Post name="Andrey" message="hi, how are you?" likes="20" />
        <Post name="Dima" message="I am Dima" likes="25" />
        <Post name="Artem" message="This is my first post" likes="10" />
      </div>
    </div>
  );
};

export default MyPosts;
