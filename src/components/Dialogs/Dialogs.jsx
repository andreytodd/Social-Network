import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = (props) => {

  let path = "/dialogs/" +  props.id  

  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={styles.message}>{props.text}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          <DialogItem name="Andrey" id="1" />
          <DialogItem name="Kris" id="2" />
          <DialogItem name="Dima" id="3" />
          <DialogItem name="Anton" id="4" />
          <DialogItem name="Grisha" id="5" />
          <DialogItem name="Egor" id="6" />
          <DialogItem name="Sergey" id="7" />
        </div>
        <div className={styles.messages}>
          <Message text="Hi how are you" />
          <Message text="Nice to meet you" />
          <Message text="Where are you from?" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
