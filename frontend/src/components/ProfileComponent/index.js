import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, fetchUserSongs } from "../../store/song";
import LikeComponent from "../LikeComponent";



const ProfileComponent = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersSongs())
      
    }, [dispatch])

    const songList = useSelector((state) => Object.values(state.songs))

    return (
        <>
            <h1>Songs</h1>
            {songList.map(song => {
                return (
                    <>
                    <div className="song-container">
                        <p key={song.id}>{song.title}</p>
                        <audio controls>
                        <source src={`${song.songURL}`} type="audio/ogg" />
                        <LikeComponent />
                        </audio>
                    </div>
                    </>
                )
            })}

        </>
    )
}


export default ProfileComponent;