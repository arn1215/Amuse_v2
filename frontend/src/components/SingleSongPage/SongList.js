import { useDispatch } from 'react-redux'
import '../SongListComponent/songListStyles.css'
import { fetchUserSongs, getUserSongs, removeSong } from '../../store/song'
import EditFormModal from '../EditFormModal'
import { useEffect } from 'react'
import CommentContainer from '../CommentContainer'
import UploadFormPage from '../UploadFormPage'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../FooterComponent'






const SongList = ({ song, userId, sessionUserId }) => {
    const dispatch = useDispatch()




    const onClick = async (e) => {
        await dispatch(removeSong(song.id))
        dispatch(getUserSongs(userId))
        //e.target.value
        // await dispatch(fetchUserSongs(userId))
        // console.log(+currentSong)


    }

    return (
        <>
            <div className={`scroll-div ${song.id}`} >
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