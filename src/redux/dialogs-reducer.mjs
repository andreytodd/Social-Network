const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
    dialogData: [
      { id: 1, name: "Andrey" },
      { id: 2, name: "Kris" },
      { id: 3, name: "Dima" },
      { id: 4, name: "Anton" },
      { id: 5, name: "Grisha" },
      { id: 6, name: "Egor" },
      { id: 7, name: "Sergey" },
      { id: 8, name: "Pavel" },
    ],
    messageData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Helloooooo" },
      { id: 4, message: "Why" },
      { id: 5, message: "no please" },
      { id: 6, message: "of course" },
      { id: 7, message: "Hi" },
      { id: 8, message: "Hi from index.js" },
    ],
    newMessageBody: "",
  }

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messageData.push({ id: 9, message: body });
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text
});

export default dialogsReducer;