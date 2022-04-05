import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withRouter } from './hoc/withRouter';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import News from './components/News/News';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>            {/* friendsBlock={props.state.friendsBlock} */}
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={
              <ProfileContainer/>
            }/>
            <Route path='/dialogs/*' element={
              <DialogsContainer store={this.props.store}/>
            }/>
            <Route path='/users' element={
              <UsersContainer/>
            }/>
            <Route path='/news' element={
              <News/>
            }/>
            <Route path='/login' element={
              <Login/>
            }/>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// export default connect(mapStateToProps, {initializeApp})(App);

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);
