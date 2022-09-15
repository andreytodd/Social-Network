import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messageElements = props.state.messageData.map((message) => (
    <Message text={message.message} />
  ));

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogElements}</div>
        <div className={styles.messages}>{messageElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
