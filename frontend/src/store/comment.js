import csrfFetch from "./csrf"


const ADD_COMMENT = "comments/addComment"
const  DELETE_COMMENT = "comments/deleteComment"
const EDIT_COMMENT = "comments/updateComment"
const GET_SONG_COMMENTS = "comments/getComments"




export const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
})

export const updateComment = (comment) => async (dispatch) => {
  
  
    const res = await csrfFetch(`/api/comments/${comment.id}/${comment.userId}`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(comment)
        
    })
   
    if (res.ok) {
    
    
        const commentToUpdate = await res.json()
       
        
        dispatch(editComment(commentToUpdate))
    }
    
}





export const postComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

export const addComment = (comment) => async (dispatch) => {
    
    
    const res = await csrfFetch(`/api/comments/`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(comment)
    })
    
    const newComment = await res.json()
    dispatch(postComment(newComment))
    return res
}

export const deleteComment = (commentId) => ({
    type: DELETE_COMMENT,
    commentId
})


export const removeComment = (commentId ) => async (dispatch) => {
   
    const res = await csrfFetch(`/api/comments/${commentId}`, {
        method: 'DELETE',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({commentId})
    })

    
    
    dispatch(deleteComment(commentId))
    
}



//ONE USER
export const getSongComments = (comments) => ({
    type: GET_SONG_COMMENTS,
    comments
})

export const fetchSongComments = (songId) => async (dispatch) => {
    
    const res = await csrfFetch(`/api/comments/`)
    
    if (res.ok) {
        const comments = await res.json()
        
        dispatch(getSongComments(comments))
        return comments
    }
}




const initialState = {}

export const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_SONG_COMMENTS:
            newState = {...state};
            action.comments.forEach(comment => {
               return newState[comment.id] = comment;
            });
            return newState
        case ADD_COMMENT:
            newState = {...state}
            newState[action.comment.id] = action.comment
            return newState
        case EDIT_COMMENT:
            newState = {...state}
            newState[action.comment.id] = action.comment
            return newState   
        case DELETE_COMMENT:
            newState = {...state}
            delete newState[action.commentId] 
            return newState        
        default:
            return state
    }
}