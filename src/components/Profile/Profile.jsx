import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className={classes.background}
          src="https://static3.depositphotos.com/1000454/256/i/450/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"
          alt="background"
        />
      </div>

      <div>avatar</div>
      
      <MyPosts />
      
    </div>
  );
};

export default Profile;
