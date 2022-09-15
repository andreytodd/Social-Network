let state = {
  profilePage: {
    postData: [
      { id: 1, message: "hi, how are you?", likesCount: 43 },
      { id: 2, message: "This is my first post", likesCount: 15 },
      { id: 3, message: "I am Dima", likesCount: 17 },
    ],
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
  },
};

export default state;
