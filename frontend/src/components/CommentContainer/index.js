import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, fetchSongComments, removeComment } from '../../store/comment';
import EditCommentModal from '../EditCommentModal';
import './CommentContainer.css'

const CommentContainer = ({ songId }) => {
    const dispatch = useDispatch()
    const [content, setContent] = useState("")
    const user = useSelector(state => state.session.user);
    useEffect(() => {
        
        

    }, [dispatch])
    const revSongList = useSelector((state) => Object.values(state.comments))
    const commentList = revSongList.reverse()
    const onSubmit = (e) => {
        e.preventDefault()

        const commentInput = {
            body: content,
            userId: user.id,
            songId
        }
        dispatch(addComment(commentInput))
        setContent("")

    }

    const deleteOnClick = (commentId) => {
        dispatch(removeComment(commentId))
    }



    return (
        <div className="comment-container">

            {user && <form className="commentForm" onSubmit={onSubmit}>
                <label>Make a comment</label>
                <textarea
                    style={{ width: '900px', height: '200px' }}
                    type='text'
                    placeholder='Type Comment Here'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <button className='sign-up-button form' type="submit">Submit</button>
            </form>}
            {!user &&
                <p style={{ marginTop: '50px', marginRight: '37%'}}>Sign in to an account to comment.</p>
            }
            <ul>
                {user ?
                    commentList.map(comment => songId === comment.songId && user.id === comment.userId ?
                        <li className="comment" key={comment.id}>
                            <>
                                <p>{comment.body}</p>
                                <div className='buttons'>
                                    <EditCommentModal id={comment.id} className='commentButton' />
                                    <button className='commentButton ' onClick={() => deleteOnClick(comment.id)} >
                                        Delete
                                    </button>
                                </div>
                            </>
                        </li> : songId === comment.songId && user.id !== comment.userId ? <li>{comment.body} </li>
                            : "") : commentList.map(comment => songId === comment.songId && <li>{comment.body}</li>)}
                {/* // {commentList.map(comment => songId === comment.songId && user.id === comment.userId ?  <li className= "comment" key={comment.id}>{comment.body}<button className='loginForm commentButton'>delete</button></li> : songId === comment.songId && user.id !== comment.userId ? <li>className= "comment" {comment.body}</li> : "")} */}
            </ul>
        </div>
    )
}


export default CommentContainer;