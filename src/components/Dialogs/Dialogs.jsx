import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer.mjs";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messageElements = props.state.messageData.map((message) => (
    <Message text={message.message} />
  ));

  let newMessageBody = props.state.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
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
