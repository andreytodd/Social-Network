import dialogsReducer from "./dialogs-reducer.mjs";
import profileReducer from "./profile-reducer.mjs";


let store = {
  _callSubsriber() {
    console.log("This is subscriber");
  },
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "hi, how are you?", likesCount: 43 },
        { id: 2, message: "This is my first post", likesCount: 15 },
        { id: 3, message: "I am Dima", likesCount: 17 },
      ],
      newPostText: "New text from state.js",
    },

    dialogsPage: {
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
    },

    sidebar: {},
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubsriber = observer;
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubsriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubsriber(this._state);
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubsriber(this._state);

  },
};


export default store;

window.state = store;
