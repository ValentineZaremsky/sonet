const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
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
    { id: 7, text: 'Yo',           align: 'right' }
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messages[state.messages.length - 1].id + 1,
        text: action.text,
        align: 'right'
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };
    default:
      return state;
  }
}

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  text: message
})

export default dialogsReducer;
