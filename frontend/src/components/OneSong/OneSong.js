import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchSong, fetchSongs, getSong, getSongs } from "../../store/song"
import CommentContainer from "../CommentContainer"
import Player from "../PlayerComponent"
import React, { useRef } from "react"
import AudioVisualizer from "@tiagotrindade/audio-visualizer"
import { FaPauseCircle, FaPlay, FaPlayCircle } from "react-icons/fa"
import LikeComponent from "../LikeComponent"


const OneSong = () => {
  
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(true);
  const [bool, setBool] = useState(false)
  
  
  const id = parseInt(useParams().songId)
  const song = useSelector(state => state.songs[id]) 


  const [backupData, setBackupData] = useState("") 
  const audio = useRef()
  const childFunc = useRef()
  const childFunc2 = useRef()
  
  useEffect(() => {
    dispatch(fetchSongs())
  }, [dispatch])
  
  
  
  
 


  return (
    <>
    {isLoaded && song ?  (
      <>
      <div className="commentflex">
        <div className="page">
            <h4>{song?.title}</h4>
          <div className="page-container">
            <img  className="songimg" src={song?.imageUrl} alt='cover art' />
            <Link to={`/users/${song?.userId}`}>See more from this artist!</Link>
            {/* <button className="playerButtons" style={{all: 'unset', backgroundColor: '', height: 'fit-content'}}onClick={() => childFunc.current()}><FaPlay  /></button>
            <button className="playerButtons" style={{all: 'unset', backgroundColor: '', height: 'fit-content'}} onClick={() => childFunc2.current()}><FaPauseCircle  /></button> */}
            {/* <LikeComponent song={song} songId={song?.id} /> */}
            <p>{song?.createdAt?.slice(0, 10).replaceAll("-", " ")}</p>   
          </div>
        </div>
        <div className="comment">
          <CommentContainer songId={song.id}></CommentContainer>
        </div> 
          <Player ref={audio} className='player' childFunc={childFunc} childFunc2={childFunc2} bool={bool} currentSong={song} />       
      </div>
      </>
      ) : null
    }
    </>
  )
}


export default OneSong;