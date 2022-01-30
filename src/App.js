import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import './App.css';

//  ({ _state, addPost, updatePost, addMessage, updateMessage })
const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar friendsBlock={props.state.friendsBlock} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updatePost={props.updatePost}
            />
          } />
          <Route path='/dialogs/*' element={
            <Dialogs
              dialogsPage={props.state.dialogsPage}
              addMessage={props.addMessage}
              updateMessage={props.updateMessage}
            />
          } />
          <Route path='/news' element={
            <News />
          } />
        </Routes>
      </div>
    </div>
  )
}

export default App;
