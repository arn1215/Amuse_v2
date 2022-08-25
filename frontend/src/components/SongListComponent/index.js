import './songListStyles.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSong, clearSongs, fetchLikedSongs, fetchSongs, likedSongs } from "../../store/song";
import CommentContainer from '../CommentContainer';
import LikeComponent from '../LikeComponent';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import banner from "../SongListComponent/image4.jpg"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'

import Player from '../PlayerComponent';
import { useHistory, useParams } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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

const ProfileComponent = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const [currentSong, setCurrentSong] = useState("")
    let title = currentSong?.title
    let image = currentSong?.imageUrl
    const [isPlaying, setIsPlaying] = useState(false)
    const [current, setCurrent] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    const revSongList = useSelector((state) => Object?.values(state?.songs))
    const user = useSelector(state => state.session.user);
    const songList = revSongList.reverse()
    const revLikeList = useSelector((state) => Object?.values(state?.songs.likedSongs))
    const likeList = revLikeList.reverse()

    useEffect(() => {


        dispatch(clearSong())
        dispatch(fetchSongs())
        if (user){
            dispatch(fetchLikedSongs(user?.id))
        }
        setIsLoaded(true)

    }, [dispatch, user])


const playOnClick = (song) => {

    setCurrentSong(song)
    setIsPlaying(true)
}




return (
    <>
        {isLoaded && (
            <>
                <div className='background'>
                    <div className='white-background'>
                        <div className='feed-title'>
                            <div className='banner-container'>
                                <img src="https://amuse-bucket.s3.amazonaws.com/alexander-popov-hTv8aaPziOQ-unsplash.png" alt="banner" />
                                <div className='centered'>
                                    <h2 style={{ color: "white" }}>
                                        What's next in music is first on amuse.
                                    </h2>
                                    <p style={{ color: "white", maxWidth: "800px" }} >Upload your first track and begin your journey. Amuse gives you space to create, find your fans, and connect with other artists.</p>
                                </div>
                            </div>
                            <h3 className='recent'>Recently Added</h3>
                            <div className='carousel'>

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
                                    itemClass="carousel-item-padding-40-px"
                                >
                                    {songList.map(song => (
                                        song && song.title ?
                                            <div key={song?.id}>
                                                <div className="scroll-div" >
                                                    <div className='song-container card' key={song?.id} onClick={() => history.push(`songs/${song?.id}`)} >
                                                        <div className="flex-container">
                                                            <img src={song?.imageUrl || require('./image.png')} />
                                                            <div className='image__overlay'>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='title1'>
                                                        <p className='title1 p'>
                                                            {song?.title}
                                                        </p>
                                                    </div>
                                                    <div className="play-button">

                                                        {currentSong.id === song.id && isPlaying ?
                                                            null : <p className="play-button" key={song?.id}><FaPlayCircle className="play-button" onClick={() => playOnClick(song)} /></p>
                                                        }
                                                    </div>
                                                </div>
                                            </div> : null
                                    ))}
                                </Carousel>
                            </div>
                            {user && likeList[0] &&
                                <h3 className='recent'>Liked Songs</h3>
                            }
                            <div>

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
                                    itemClass="carousel-item-padding-40-px"
                                >
                                    {likeList.map(song => (
                                        song && song.title ?
                                            <div key={song?.id}>
                                                <div className="scroll-div" >
                                                    <div className='song-container card' key={song?.id} onClick={() => history.push(`songs/${song?.id}`)} >
                                                        <div className="flex-container">
                                                            <img src={song?.imageUrl || require('./image.png')} />
                                                            <div className='image__overlay'>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='title1'>
                                                        <p className='title1 p'>
                                                            {song?.title}
                                                        </p>
                                                    </div>
                                                    <div className="play-button">

                                                        {currentSong.id === song.id && isPlaying ?
                                                            null : <p className="play-button" key={song?.id}><FaPlayCircle className="play-button" onClick={() => playOnClick(song)} /></p>
                                                        }
                                                    </div>
                                                </div>
                                            </div> : null
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='play'>
                    <AudioPlayer
                        autoPlay={params.songId ? true : false}
                        className='h5'
                        src={currentSong ? currentSong.songURL : current}
                        layout="stacked-reverse"
                        onEnded={setCurrent}
                        header={
                            <div className="now-playing" style={{ marginLeft: "100px", marginTop: '10px' }}>
                                <span><img className="playerImg" src={image} style={{ width: '30px' }} /></span>
                                <span> {title}</span>
                                {/* <p>{`${isPlaying}`}</p> */}
                            </div>
                        }
                    />
                </div>
            </>
        )}
    </>
)
}

export default ProfileComponent;