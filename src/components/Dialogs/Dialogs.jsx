import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  // let state = props.store.getState().dialogsPage;
  let state = props.dialogsPage;

  let dialogElements = state.dialogData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messageElements = state.messageData.map((message) => (
    <Message text={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage()
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body)
  };

  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogElements}</div>
        <div className={styles.messages}>
          <div>{messageElements}</div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
