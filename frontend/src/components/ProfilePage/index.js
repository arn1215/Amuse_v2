import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { clearSongs, fetchArtist, fetchSongs, removeSong } from "../../store/song";
import Player from "../PlayerComponent";
import { ScaleLoader } from "react-spinners";
import { FaBars, FaEdit, FaTrash } from "react-icons/fa";
import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const ProfilePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSong, setCurrentSong] = useState()
  const [active, setActive] = useState("")
  let title = currentSong?.title
  let image = currentSong?.imageUrl
  const params = useParams()
  const dispatch = useDispatch()
  const src = "https://amuse-bucket.s3.amazonaws.com/DriveMeCrazy.png"
  const artist = useSelector(state => state?.songs?.artistInfo)
  let userId = useSelector(state => state.session?.user?.id)
  const history = useHistory()

  const onClick = (song) => {
    setCurrentSong(song)
    setActive("grey-active")
  }

  const onDelete = (id) => {
    dispatch(removeSong(id))
    window.location.reload(false)
    
  }

  const onEnd = () => {
    setCurrentSong("")
    currentSong.SongURL = null;
  }

  useEffect(() => {
    dispatch(clearSongs())
    dispatch(fetchSongs())
    dispatch(fetchArtist(params.userId)).then(setIsLoaded(true))

  }, [])

  return (
    <>
      {artist.username &&
        <div className="outer" style={{ backgroundColor: " #dfdfdf", height: "91%", display: "flex", justifyContent: "center", marginTop: "-3px" }} >
          <div className="inner" style={{ backgroundColor: "white", height: "100%", width: "65%", display: "flex", flexDirection: "column", overflow: "scroll" }}>
            <div className="banner" style={{ backgroundColor: "#ff9c40", height: "300px", display: "flex", alignItems: "center" }}>
              <a href={src} style={{ marginLeft: "10%" }}>
                <img src={src} style={{ backgroundColor: "white", height: "220px", width: "220px", borderRadius: "50%", marginLeft: "10%" }} />
              </a>
              <div className="artist-detail" style={{ height: "220px", width: "350px", marginLeft: "30px" }}>
                <h3 style={{ color: "white" }}>{artist.username}</h3>
                <h6>Artist Location</h6>
              </div>
            </div>
            {artist.Songs.map(song => {
              return (
                <div key={song.id} className={song?.id === currentSong?.id ? `${active}` : "grey"} style={{ cursor: "pointer", backgroundColor: "#dfdfdf", height: "20%", width: "50%", marginTop: "4%", marginLeft: "4%", display: "flex", alignItems: "center", borderRadius: "4px" }} onClick={() => onClick(song)}>
                  <Link to={`/songs/${song.id}`} style={{ height: "80%", marginTop: "4%" }}>
                    <img src={song?.imageUrl} style={{ height: "80%", marginLeft: "15px", borderRadius: "4px" }} />
                  </Link>
                  <div className="songInfo" style={{ height: "80%", width: "60%", marginLeft: "15px" }}>
                    <h5 style={{ marginTop: "3%" }}>{song.title}</h5>
                  {song?.id === currentSong?.id ? <ScaleLoader /> : null}
                  </div>
                    <Popup trigger={<div className="bars" style={{ marginBottom: "100px", marginLeft: "30px" }}><FaBars  /></div>} position="right center">
                      {userId === song.userId ? 
                      <div style={{display: "flex", justifyContent: "space-between"}}>

                      <div onClick={() => onDelete(song.id)} style={{cursor: "pointer"}}>
                      <FaTrash /> 
                      </div>
                      <div style={{cursor: "pointer"}}>
                      <FaEdit /> 
                      </div>
                      </div>
                      : null
                    
                      }
                    </Popup>
                </div>
              )
            })}
          </div>
        </div>
      }
      <>

        <AudioPlayer
          autoPlay={false}
          className='h5'
          src={currentSong && currentSong.songURL ? currentSong.songURL : null}
          layout="stacked-reverse"
          loop={false}

          header={
            <div className="now-playing" style={{ marginLeft: "100px", marginTop: '10px' }}>
              <span><img className="playerImg" src={image} style={{ width: '30px' }} /></span>
              <span> {title}</span>
              {/* <p>{`${isPlaying}`}</p> */}
            </div>
          }
        />

      </>

    </>
  )
}


export default ProfilePage;