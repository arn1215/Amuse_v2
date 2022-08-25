import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, fetchSongComments, removeComment } from '../../store/comment';
import EditCommentModal from '../EditCommentModal';
import './CommentContainer.css'
const parseDate = require('postgres-date')


const CommentContainer = ({ songId }) => {
    const dispatch = useDispatch()
    const [content, setContent] = useState("")
    const user = useSelector(state => state.session.user);
    const revSongList = useSelector((state) => Object.values(state.comments))
    const commentList = revSongList.reverse()


    const dateHelperFn = (date) => {
        let res;
        res = parseDate(`${date.split(".")[0]}Z`.replace("T", " "))

        console.log("res", res)
        return res
    }


    useEffect(() => {


    }, [dispatch])
    const onSubmit = (e) => {
        e.preventDefault()

        const commentInput = {
            body: content,
            userId: user.id,
            userName: user.username,
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
                <p style={{ marginTop: '50px', marginRight: '37%', marginBottom: "100px" }}>Sign in to an account to comment.</p>
            }
            <ul>
                {user ?
                    commentList.map(comment => songId === comment.songId && user.id === comment.userId ?
                        <>
                            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                <p className="userName" style={{ fontSize: '12px' }}>{comment.userName}</p>
                                <div>
                                    <p style={{ fontSize: '12px' }}>{dateHelperFn(comment.createdAt).toString().slice(0, 15)}</p>
                                    <EditCommentModal id={comment.id} className='commentButton' />
                                    <button className='commentButton ' onClick={() => deleteOnClick(comment.id)} >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <li key={comment.id}>
                                <p>{comment.body}</p>
                            </li>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            </div>
                        </>
                        : songId === comment.songId && user.id !== comment.userId ?
                            <>
                            <div style={{display: 'flex', justifyContent: "space-between"}}>
                                <p className="userName" style={{ fontSize: '12px' }}>{comment.userName}</p>
                                <p style={{ fontSize: '12px' }}>{dateHelperFn(comment.createdAt).toString().slice(0, 15)}</p>
                            </div>
                            <li>{comment.body}</li>
                            </> : "")
                    : commentList.map(comment => songId === comment.songId &&
                        <>
                            <div style={{display: 'flex', justifyContent: "space-between"}}>
                                <p className="userName" style={{ fontSize: '12px' }}>{comment.userName}</p>
                                <p style={{ fontSize: '12px' }}>{dateHelperFn(comment.createdAt).toString().slice(0, 15)}</p>
                            </div>
                            <li>{comment.body}</li>
                        </>)}
                {/* // {commentList.map(comment => songId === comment.songId && user.id === comment.userId ?  <li className= "comment" key={comment.id}>{comment.body}<button className='loginForm commentButton'>delete</button></li> : songId === comment.songId && user.id !== comment.userId ? <li>className= "comment" {comment.body}</li> : "")} */}
            </ul>
        </div>
    )
}


export default CommentContainer;