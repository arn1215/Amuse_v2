import { useDispatch } from 'react-redux'
import '../SongListComponent/songListStyles.css'
import { getUserSongs, removeSong } from '../../store/song'
import EditFormModal from '../EditFormModal'
import { useState } from 'react'
import "react-multi-carousel/lib/styles.css";
import { FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'






const SongList = ({ song, userId, sessionUserId }) => {
    const dispatch = useDispatch()
    const [active, setActive] = useState("")



    const onClick = async (e) => {
        await dispatch(removeSong(song.id))
        dispatch(getUserSongs(userId))
        setActive("grey-active")
        //e.target.value
        // await dispatch(fetchUserSongs(userId))
        // console.log(+currentSong)


    }

    return (
        <>
            <div className={`scroll-div ${song.id}`} >
                <div className='title-container'>
                    <div className="title">
                        <p className="title" key={song.id}>{song.title}</p>
                    </div>
                    <Link to={`/songs/${song.id}`}>
                        <div className='song-container card'>
                            <div className="flex-container">
                                <img src={song.imageUrl || require('./image.png')} />
                                <div className='image__overlay'>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                {sessionUserId === +userId &&
                    <div style={{ display: 'flex', margin: "30px", width: "100px", alignItems: 'center', justifyContent: "space-around" }}>
                        <EditFormModal id={song.id} song={song} className='loginForm crud edit' />
                        <FaRegTrashAlt style={{ cursor: "pointer" }} className='loginForm crud delete' onClick={onClick} id={song.id} />
                        {/* <CommentContainer songId={song.id}></CommentContainer> */}
                    </div>
                }
            </div>
        </>
    )

}



export default SongList;