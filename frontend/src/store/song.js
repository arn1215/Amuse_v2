
import { useParams } from "react-router-dom"
import csrfFetch from "./csrf"

const CLEAR_SONG = 'songs/clearSong'

const CLEAR_SONGS = 'songs/clear'

const ADD_SONG = 'songs/addSong'

const GET_SONGS = 'songs/getSongs'

const GET_SONG = 'songs/getSong'

const GET_USER_SONGS = 'songs/getUsersSongs'

const DELETE_SONG = 'songs/deleteSong'

const EDIT_SONG = 'songs/editSong'

export const clearSong = () => ({
    type: CLEAR_SONG
})


export const clearSongs = () => ({
    type: CLEAR_SONGS
})

export const addSong = (song) => ({
    type: ADD_SONG,
    song
})

export const uploadSong = (payload) => async (dispatch) => {
    const res = await csrfFetch('/api/songs', {
        method: 'POST',
        // headers: {"Content-type": 'application/json'},
        body: JSON.stringify(payload)
    })

    const song = await res.json()
    dispatch(addSong(song))
    return res
}

//ALL SONGS

export const getSongs = (songs) => ({
    type: GET_SONGS,
    songs
})

export const fetchSongs = () => async (dispatch) => {
    const res = await csrfFetch('/api/songs')

    if (res.ok) {
        const songs = await res.json()
        dispatch(getSongs(songs))
        return songs
    }

}

//ONE SONG

export const getSong = (song) => ({
    type: GET_SONG,
    song
})

export const fetchSong = (id) => async (dispatch) => {

    const res = await csrfFetch(`/api/songs/${id}`)

    if (res.ok) {
        const song = await res.json()
        dispatch(getSong(song))
        return song
    }

}

//ONE USER
export const getUserSongs = (songs) => ({
    type: GET_USER_SONGS,
    songs
})

export const fetchUserSongs = (userId) => async (dispatch) => {


    const res = await csrfFetch(`/api/users/${userId}`)

    if (res.ok) {
        const songs = await res.json()

        dispatch(getUserSongs(songs))
        return songs
    }
}




//DELETE A SONG

export const deleteSong = (songId) => ({
    type: DELETE_SONG,
    songId
})


export const removeSong = (songId, userId) => async (dispatch) => {

    const res = await csrfFetch(`/api/songs/${songId}`, {
        method: 'DELETE',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ songId })
    })



    dispatch(deleteSong(songId))

}


export const editSong = (song) => ({
    type: EDIT_SONG,
    song
})

export const updateSong = (song) => async (dispatch) => {


    const res = await csrfFetch(`/api/songs/${song.songId}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ song })

    })
    const songToUpdate = await res.json()

    dispatch(editSong(songToUpdate))
    return songToUpdate
}

const initialState = { userSongs: {} }

export const songReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_USER_SONGS:
            newState = { ...state };
            action.songs.forEach(song => {
                return newState.userSongs[song.id] = song;
            });
            return newState
        case GET_SONGS:
            newState = { ...state };
            action.songs.forEach(song => {
                if (!state[song.id]) {
                    newState[song.id] = song;
                }
            });
            return newState
        case GET_SONG:
            newState = { ...state }
            newState.song = action.song
            return newState
        case ADD_SONG:
            newState = { ...state }
            newState[action?.song?.id] = action.song
            return newState
        case EDIT_SONG:
            newState = { ...state }
            newState[action.song.id] = action.song
            return newState
        case DELETE_SONG:
            newState = { ...state }
            delete newState[action.songId]
            return newState
        case CLEAR_SONG:
            newState = { ...state }
            newState.song = {}
            return newState
        default:
            return state
    }


}
