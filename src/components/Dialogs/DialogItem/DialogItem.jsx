import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={styles.dialog}>
      <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="avatar" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;
