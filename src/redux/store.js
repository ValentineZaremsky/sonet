import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: 'Hi, how are you?',          likes: 10 },
        { id: 2, text: "It's my first post",        likes: 50 },
        { id: 3, text: "I can to map!",             likes:  1 },
        { id: 4, text: "And now I can pass props!", likes: 25 }
      ],
      newPostText: ''
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
        { id: 8, text: 'Yo',           align: 'right' }
      ],
      newMessageText: ''
    },
    friendsBlock: {
      friends: [
        { id: 3, name: 'Sveta',  avatar: 'https://png.pngtree.com/png-clipart/20210424/ourlarge/pngtree-black-hanging-evening-dress-cartoon-character-avatar-png-image_3232190.png'},
        { id: 2, name: 'Andrew', avatar: 'https://w7.pngwing.com/pngs/846/682/png-transparent-computer-icons-user-profile-avatar-avatar-heroes-service-head.png'},
        { id: 4, name: 'Sasha',  avatar: 'https://w7.pngwing.com/pngs/439/19/png-transparent-avatar-user-profile-icon-women-wear-frock-face-holidays-women-accessories-thumbnail.png'}
      ]
    }
  },

  _callSubscriber() {
    console.log('No subscribers (observers)');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage  = profileReducer(this._state.profilePage,  action);
    this._state.dialogsPage  = dialogsReducer(this._state.dialogsPage,  action);
    this._state.friendsBlock = friendsReducer(this._state.friendsBlock, action);

    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store;
