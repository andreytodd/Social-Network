import classes from './MyPosts.module.css'

const MyPosts = () => {
  return (
      <div>
        My posts
        <div>my post</div>
        <div>
          <div className={classes.item}>post1</div>
          <div className={classes.item}>post2</div>
        </div>
      </div>
  );
};

export default MyPosts;
