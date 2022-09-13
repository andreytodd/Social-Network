import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.background}
          src="https://static3.depositphotos.com/1000454/256/i/450/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"
          alt="background"
        />
      </div>

      <div className={classes.descriptionBlock}>avatar</div>
    </div>
  );
};

export default ProfileInfo;
