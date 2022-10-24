import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer.mjs";
import StoreContext from "../../StoreContext.js";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return <StoreContext.Consumer>
    {(store) => {
      let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator());
      };

      let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body));
      };

      return <Dialogs
        updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={store.getState().dialogsPage}
      />
    }
    }
  </StoreContext.Consumer>
};

export default DialogsContainer;
