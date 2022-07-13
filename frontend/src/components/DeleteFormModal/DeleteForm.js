import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import {fetchUserSongs, uploadSong} from '../../store/song'
import '../SignUpFormModal/SignUpForm.css'


const DeleteForm = ({setShowModal}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
 
    const [errors, setErrors] = useState([])

    // if (sessionUser) return (
    //     <Redirect to={`/${sessionUser.username}`} />
    // )
    const history = useHistory()
    

    const onSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        

        // dispatch(uploadSong(song))
        history.push(`/users/${sessionUser.id}`)
    }

    const onClick = (e) => {
        e.preventDefault()
        dispatch(fetchUserSongs(sessionUser.id))
        history.push(`/users/${sessionUser.id}`)
    }

    return (
        <>
            
            <form
                onSubmit={onSubmit}
                className="uploadForm signup"
                >
                <ul className="uploadForm">
                    {errors.map((error) => <li key={error} className="errors">{error}</li>)}
                </ul>
                <label htmlFor="title" className="uploadForm">Are you sure you want to delete this song?</label>
                <button type='submit' className="uploadForm">Delete</button>
                <button className="uploadForm" onClick={onClick}>Cancel</button>
            </form>
           
        </>
    )
}


export default DeleteForm