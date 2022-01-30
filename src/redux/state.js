let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: 'Hi, how are you?',          likes: 10 },
        { id: 2, text: "It's my first post",        likes: 50 },
        { id: 3, text: "I can to map!",             likes:  1 },
        { id: 4, text: "And now I can pass props!", likes: 25 }
      ],
      newPostText: 'IT-Kamasutra.com'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych', avatar: 'https://w7.pngwing.com/pngs/590/236/png-transparent-computer-icons-man-icon-recruiter-business-desktop-wallpaper-thumbnail.png'},
        { id: 2, name: 'Andrew', avatar: 'https://w7.pngwing.com/pngs/846/682/png-transparent-computer-icons-user-profile-avatar-avatar-heroes-service-head.png'},
        { id: 3, name: 'Sveta',  avatar: 'https://png.pngtree.com/png-clipart/20210424/ourlarge/pngtree-black-hanging-evening-dress-cartoon-character-avatar-png-image_3232190.png'},
        { id: 4, name: 'Sasha',  avatar: 'https://w7.pngwing.com/pngs/439/19/png-transparent-avatar-user-profile-icon-women-wear-frock-face-holidays-women-accessories-thumbnail.png'},
        { id: 5, name: 'Viktor', avatar: 'https://w7.pngwing.com/pngs/770/378/png-transparent-user-profile-icon-contact-information-s-face-head-avatar-thumbnail.png'},
        { id: 6, name: 'Valera', avatar: 'https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png'},

      ],
      messages: [
        { id: 1, text: 'Hi',           align: 'left'  },
        { id: 2, text: 'How are you?', align: 'right' },
        { id: 3, text: 'Yo',           align: 'left'  },
        { id: 4, text: 'Hello!',       align: 'left'  },
        { id: 5, text: 'Yo',           align: 'right' }
      ],
      newMessageText: 'React Kabzda'
    },
    friendsBlock: {
      friends: [
        { id: 3, name: 'Sveta',  avatar: 'https://png.pngtree.com/png-clipart/20210424/ourlarge/pngtree-black-hanging-evening-dress-cartoon-character-avatar-png-image_3232190.png'},
        { id: 2, name: 'Andrew', avatar: 'https://w7.pngwing.com/pngs/846/682/png-transparent-computer-icons-user-profile-avatar-avatar-heroes-service-head.png'},
        { id: 4, name: 'Sasha',  avatar: 'https://w7.pngwing.com/pngs/439/19/png-transparent-avatar-user-profile-icon-women-wear-frock-face-holidays-women-accessories-thumbnail.png'}
      ]
    }
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('No subscribers (observers)');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addPost() {
    let newPost = {
      id: this._state.profilePage.posts.length + 1,
      text: this._state.profilePage.newPostText,
      likes: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updatePost(message) {
    this._state.profilePage.newPostText = message;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      id: this._state.dialogsPage.messages.length + 1,
      text: this._state.dialogsPage.newMessageText,
      align: 'right'
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },

  updateMessage(message) {
    this._state.dialogsPage.newMessageText = message;
    this._callSubscriber(this._state);
  }
}

window.store = store;

export default store;
