import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.item}>
        <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="avatar" />
        <span>{props.message}</span>
      </div>
      <div>
        <span>{props.likes} likes</span>
      </div>
    </div>
  );
};

export default Post;
