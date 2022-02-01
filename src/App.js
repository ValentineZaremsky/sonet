import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import './App.css';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar friendsBlock={props.state.friendsBlock} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={
            <Profile store={props.store} />
          } />
          <Route path='/dialogs/*' element={
            <DialogsContainer store={props.store} />
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
