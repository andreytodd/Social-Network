const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

let initialState = {
    postData: [
      { id: 1, message: "hi, how are you?", likesCount: 43 },
      { id: 2, message: "This is my first post", likesCount: 15 },
      { id: 3, message: "I am Dima", likesCount: 17 },
    ],
    newPostText: "New text from state.js",
  }

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
              };
        
              state.postData.push(newPost);
              state.newPostText = "";
              return state;
        
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }

}

export const createPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST, newText: text });

export default profileReducer;