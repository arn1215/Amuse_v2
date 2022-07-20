import { useEffect, useRef, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-h5-audio-player/lib/styles.css'

import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import Footer from './FooterComponent'



const Player = ({ currentSong, bool, childFunc, childFunc2 }) => {
    
    
    let title = currentSong?.title
    let image = currentSong?.imageUrl

    



    return (
        <>
            
            <AudioPlayer
                autoPlay={false}
                className='h5'
                src={ currentSong ? currentSong.songURL : null }
                layout="stacked-reverse"
                header={
                    <div className="now-playing" style={{ marginLeft: "100px", marginTop: '10px' }}>
                        <span><img className="playerImg" src={image} style={{ width: '30px' }} /></span>
                        <span> {title}</span>
                        {/* <p>{`${isPlaying}`}</p> */}                  
                    </div>
                }
            />
            
        </>
    )
}












export default Player;