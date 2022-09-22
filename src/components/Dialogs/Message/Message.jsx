import React from "react";
import styles from "./../Dialogs.module.css";

const Message = (props) => {
  let newMessageElement = React.createRef();

  let sendMessage = () => {
    alert(newMessageElement.current.value);
  };

  return (
    <div>
      <div className={styles.message}>{props.text}</div>
      <textarea ref={newMessageElement}></textarea>
      <div>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Message;
