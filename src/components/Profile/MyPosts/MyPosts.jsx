import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <Post name="Andrey" message="hi, how are you?" likes="20" />
      <Post name="Dima" message="I am Dima" likes="25" />
      <Post name="Artem" message="This is my first post" likes="10" />
    </div>
  );
};

export default MyPosts;
