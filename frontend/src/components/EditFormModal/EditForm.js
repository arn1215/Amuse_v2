import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateSong} from '../../store/song'
import '../SignUpFormModal/SignUpForm.css'

const EditForm = ({id, song}) => {
    const history = useHistory()
    const params = useParams()
    // const userId = params.userId
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    
    const [newTitle, setTitle] = useState(song.title)
    const [errors, setErrors] = useState([])

    // if (sessionUser) return (
    //     <Redirect to={`/${sessionUser.username}`} />
    // )
 
    

    



    const onSubmit =  (e) => {
        e.preventDefault()
        setErrors([])
        
        const song = {
            title: newTitle,
            userId: sessionUser.id,
            songId: id
            
        }
        dispatch(updateSong(song))
        history.push(`/users/${sessionUser.id}`)
        .catch(async (res) => {
            const data = await res.json()
            if (data && data.errors) {
                setErrors(data.errors)

            }
           
        })
        
        setTitle("")
    
        history.push(`/users/${sessionUser.id}`)
    }


    return (
        <div style={{position: "relative"}}>
            
            <form
                onSubmit={onSubmit}
                className="loginForm"
                >
                <ul className="uploadForm">
                    {errors.map((error) => <li key={error} className="errors">{error}</li>)}
                </ul>
                <label htmlFor="title" className="uploadForm">Song Name</label>
                <input
                    id="title"
                    name='title'
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={newTitle}
                    
                    required />
                <button
                    type='submit'
                    className="sign-up-button">Edit Song</button>
            </form>
           
        </div>
    )
}


export default EditForm