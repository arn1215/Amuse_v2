import './songListStyles.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSong, clearSongs, fetchSongs } from "../../store/song";
import CommentContainer from '../CommentContainer';
import LikeComponent from '../LikeComponent';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import banner from "../SongListComponent/image4.jpg"

import Player from '../PlayerComponent';
import { useHistory } from 'react-router-dom';
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
    const dispatch = useDispatch()
    const history = useHistory()
    const [currentSong, setCurrentSong] = useState("")
    const [isPlaying, setIsPlaying] = useState(false)
    const revSongList = useSelector((state) => Object?.values(state?.songs))
    const songList = revSongList.reverse()

    useEffect(() => {
  
  
        dispatch(clearSong())
        dispatch(fetchSongs())

    }, [dispatch])


    const playOnClick = (song) => {
     setCurrentSong(song)
     setIsPlaying(!isPlaying)
    }




    return (
        <>
            <div className='background'>
                <div className='white-background'>
                    <div className='feed-title'>
                        <div className='text'>
                        </div>
                        <img src="https://amuse-bucket.s3.amazonaws.com/vishnu-r-nair-m1WZS5ye404-unsplash.jpg" alt="banner"></img>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0px'}}>
                            <h2>
                            What's next in music is first on amuse.
                            </h2>
                            <p>Upload your first track and begin your journey. Amuse gives you space to create, find your fans, and connect with other artists.</p>
                        </div>                     
                        <h3 className='recent'>Recently Added</h3>
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            responsive={responsive}
                            arrows={true}
                            autoPlay={false}
                            autoPlaySpeed={90000000}
                            customTransition="all .5"
                            transitionDuration={.1}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {songList.map(song => (
                                song && song.title ?
                                <div key={song?.id}>
                                    <div  className="scroll-div" >
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
                                            {!isPlaying && 
                                            <p className="play-button" key={song?.id}><FaPlayCircle className="play-button" onClick={() => playOnClick(song)} /></p>
                                            }
                                            {currentSong.id === song.id && isPlaying && 
                                            <p className="play-button" key={song?.id}><FaPauseCircle className="play-button" onClick={() => setCurrentSong(null)} /></p>
                                            
                                            }
                                        </div>
                                    </div>
                                </div> : null
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className='play'>
                <Player currentSong={currentSong} />
            </div>
        </>
    )
}

export default ProfileComponent;