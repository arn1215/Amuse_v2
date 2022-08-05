import csrfFetch from "./csrf"


const ADD_LIKE = 'likes/addLike'
const DELETE_LIKE = "likes/deleteLike"
const GET_SONG_LIKES = 'likes/getLikes'

//READ LIKES =================================================================
const getLikes = (likes) => ({
    type: GET_SONG_LIKES,
    likes
})

export const fetchSongsLikes = (songId) => async (dispatch) => {
    
    const res = await csrfFetch(`/api/likes/${songId}`)

    if (res.ok) {
        const likes = await res.json()
        dispatch(getLikes(likes))
        return likes
    }
}



//REMOVE LIKE =================================================================
const deleteLike = (like) => ({
    type: DELETE_LIKE,
    like
})



export const removeLike = (like) => async (dispatch) => {

    const res = await csrfFetch(`/api/likes`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(like)
    })


    dispatch(deleteLike(like))

}
//REMOVE LIKE =================================================================



//CREATE LIKE =================================================================
const postLike = (like) => ({
    type: ADD_LIKE,
    like
})


export const addLike = (like) => async (dispatch) => {
    const res = await csrfFetch('/api/likes', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(like)
    })

    if (res.ok) {
        const newLike = await res.json()
        dispatch(postLike(newLike))
        return res
    }
}
//CREATE LIKE =================================================================

const initialState = {}

export const likeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_LIKE:
            newState = { ...state }
            newState[action.like.like.id] = action.like.like
            return newState
        case DELETE_LIKE:
            newState = { ...state }
            delete newState[action.like.id]
            return newState
        case GET_SONG_LIKES:
            newState = { ...state };
            action.likes.rows.forEach(like => {
                if (!state[like.id]) {
                    newState[like.id] = like;
                }
            });
            return newState
        default:
            return state
    }
}