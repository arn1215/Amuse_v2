import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import {editSong, updateSong, uploadSong, fetchUserSongs} from '../../store/song'
import '../SignUpFormModal/SignUpForm.css'
import { editComment, updateComment } from '../../store/comment';

const EditComment = ({id, setCommentShowModal}) => {
    
    const params = useParams()
    const userId = params.userId
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [commentBody, setCommentBody] = useState("")
    const [errors, setErrors] = useState([])

    // if (sessionUser) return (
    //     <Redirect to={`/${sessionUser.username}`} />
    // )
    const history = useHistory()
    

    const onSubmit = async (e) => {
        e.preventDefault()
        setErrors([])
       
        const comment = {
            id: id,
            userId: sessionUser.id,
            body: commentBody
            
        }
       
        setCommentShowModal(false)
        dispatch(updateComment(comment))
        
     
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
                <label htmlFor="title" className="uploadForm">Enter New Comment</label>
                <input
                    id="title"
                    name='title'
                    type='text'
                    onChange={(e) => setCommentBody(e.target.value)}
                    value={commentBody}
                    className="uploadForm"
                    required />
                
                <button
                    type='submit'
                    className="uploadForm">Edit Comment</button>
                    
            </form>
           
        </>
    )
}


export default EditComment