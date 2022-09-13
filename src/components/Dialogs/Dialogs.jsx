import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          <div className={styles.dialog + " " + styles.active}>
            <NavLink to="/dialogs/1">Andrey</NavLink>
          </div>
          <div className={styles.dialog}>
            <NavLink to="/dialogs/2">Kris</NavLink>
          </div>
          <div className={styles.dialog}>
            <NavLink to="/dialogs/3">Dima</NavLink>
          </div>
          <div className={styles.dialog}>
            <NavLink to="/dialogs/4">Anton</NavLink>
          </div>
          <div className={styles.dialog}>
            <NavLink to="/dialogs/5">Grisha</NavLink>
          </div>
          <div className={styles.dialog}>
            <NavLink to="/dialogs/6">Egor</NavLink>
          </div>
          <div className={styles.dialog}>
            <NavLink to="/dialogs/7">Sergey</NavLink>
          </div>
        </div>
        <div className={styles.messages}>
          <div className={styles.message}>Hello there</div>
          <div className={styles.message}>Nice to meet you</div>
          <div className={styles.message}>Where are you from?</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
