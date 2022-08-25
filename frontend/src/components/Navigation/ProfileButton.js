import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import { clearLikedSongs } from "../../store/song";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault()
    dispatch(sessionActions.logout());
    dispatch(clearLikedSongs())
    history.push('/')
  };

  return (
    <div className='dropdown-container'>
        <button  style={{marginLeft: "-70px"}} className="sign-in-button logout two" onClick={logout}>Log Out</button>
    
    </div>
  );
}

export default ProfileButton;