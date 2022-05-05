import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withRouter } from './hoc/withRouter';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import NoMatch from './components/NoMatch/NoMatch';
import News from './components/News/News';
import './App.css';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer   = React.lazy(() => import('./components/Users/UsersContainer'));
const Login            = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    // if (!this.props.initialized) {
    //   return <Preloader/>
    // }

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <React.Suspense fallback={<Preloader />}>
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
              <Route path='/' element={
                <div><h1>Welcome!</h1></div>
              }/>
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);
