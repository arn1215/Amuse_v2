import '../SongListComponent/songListStyles.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSong, fetchSongs, fetchUserSongs } from "../../store/song";
import { useHistory, useParams } from 'react-router-dom';
import EditFormModal from '../EditFormModal';
import DeleteFormModal from '../DeleteFormModal';
import SongList from './SongList';
import { fetchSongComments } from '../../store/comment';
import UploadFormPage from '../UploadFormPage';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Player from '../PlayerComponent';



const SingleSongPage = () => {
    const history = useHistory()
    const params = useParams()
    const userId = parseInt(params.userId, 10)
    const sessionUserId = useSelector(state => state?.session?.user?.id);
    
    const revsongList = useSelector((state) => Object.values(state.songs).filter(song => song.userId === userId ))
    const songList = revsongList.reverse()
    const [currentSong, setCurrentSong] = useState("")


    const dispatch = useDispatch()

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    useEffect(() => {


        // dispatch(fetchSongComments(null))

    }, [dispatch])



    // const songs = songList.forEach(song => console.log(song))


    return (
        <>
            <div className='profile-container'>
                <h1 className='songs'>Songs</h1>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    arrows={true}
                    autoPlay={false}
                    autoPlaySpeed={90000000}
                    transitionDuration={.1}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px">
                    {songList.map(song => (
                        song ?
                            <SongList key={song.id} song={song} sessionUserId={sessionUserId} userId={userId} /> : null
                    ))}
                </Carousel>
            </div>
            <Player currentSong={currentSong}/>
        </>
    )
}

export default SingleSongPage;