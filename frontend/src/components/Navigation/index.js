import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <div className='nav-links'  style={{marginLeft: "-105px"}}>
        <NavLink className={({ isActive }) => (isActive ? 'active navlink' : 'inactive navlink')} exact to="/" >Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active navlink' : 'inactive navlink')} exact to={`/upload`} >Upload</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active navlink' : 'inactive navlink')} exact to={`/users/${sessionUser.id}`}>Profile</NavLink>
      </div>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className={({ isActive }) => (isActive ? 'active navlink' : 'inactive navlink')}  style={{marginLeft: "-5.5%"}} exact to="/" >Home</NavLink>
        <div className='nav-links'>
          <LoginFormModal className="navlink loginButton" />
          <SignUpFormModal />
        </div>
      </>
    );
  }

  return (

    <>
      <div className='navigation' >
        <div className='navlink-container'>
          {isLoaded && sessionLinks}
        </div>
      </div>
    </>
  );
}

export default Navigation;