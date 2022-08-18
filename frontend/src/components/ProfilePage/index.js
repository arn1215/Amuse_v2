import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { clearSongs, editSong, fetchArtist, fetchSongs, removeSong } from "../../store/song";
import Player from "../PlayerComponent";
import { ScaleLoader } from "react-spinners";
import { FaBackspace, FaBackward, FaBars, FaClock, FaEdit, FaRegSave, FaSave, FaTrash, FaXbox } from "react-icons/fa";
import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditForm from "../EditFormModal/EditForm";
import EditFormModal from "../EditFormModal";


const ProfilePage = () => {
  const [currentSong, setCurrentSong] = useState()
  let title = currentSong?.title
  let image = currentSong?.imageUrl
  const [isLoaded, setIsLoaded] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title ? title : "")
  const [isEditing, setIsEditing] = useState({ editing: false, id: null })
  const [active, setActive] = useState("")
  const params = useParams()
  const dispatch = useDispatch()
  const src = "https://amuse-bucket.s3.amazonaws.com/9c2fbf6efe95fdc919467a4db69d72cb"
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

  const submitEdit = () => {
    const song = {
      title: editedTitle,
      userId,
      songId: isEditing?.id
    }

    dispatch(editSong(song))


  }

  useEffect(() => {
    dispatch(clearSongs())
    dispatch(fetchSongs())
    dispatch(fetchArtist(params.userId)).then(setIsLoaded(true))


  }, [params])

  return (
    <>
      {artist.username &&
        <div style={{display: "flex", height: "91%", flexDirection: "column", justifyContent: "center", width: "100%" }}>
                        <div className="banner" style={{position: "relative", zIndex: "2", alignSelf:"center", backgroundColor: "#ff9c40", height: "300px", display: "flex", alignItems: "center" , width: "65%"}}>
                <a href={src} style={{ marginLeft: "10%" }}>
                  <img src={src} style={{ backgroundColor: "white", height: "220px", width: "220px", borderRadius: "50%", marginLeft: "10%" }} />
                </a>
                <div className="artist-detail" style={{ height: "220px", width: "350px", marginLeft: "30px" }}>
                  <h3 style={{ color: "white" }}>{artist.username}</h3>
                  <h6>Artist Location</h6>
                </div>
              </div>
          <div className="outer" style={{ backgroundColor: " #dfdfdf", height: "91%", display: "flex", justifyContent: "center", marginTop: "-3px" }} >
            <div className="inner" style={{ backgroundColor: "white", height: "100%", width: "65%", display: "flex", flexDirection: "row", overflow: "scroll" }}>

              {artist.Songs.map(song => {
                return (
                  <div key={song.id} className={song?.id === currentSong?.id ? `${active}` : "grey"} style={{ cursor: "pointer", backgroundColor: "#dfdfdf", height: "20%", width: "50%", marginTop: "4%", marginLeft: "4%", display: "flex", alignItems: "center", borderRadius: "4px" }} onClick={() => onClick(song)}>
                    <Link to={`/songs/${song.id}`} style={{ height: "80%", marginTop: "4%" }}>
                      <img src={song?.imageUrl} style={{ height: "80%", marginLeft: "15px", borderRadius: "4px" }} />
                    </Link>
                    <div className="songInfo" style={{ height: "80%", width: "60%", marginLeft: "15px" }}>
                      {isEditing.editing && song.id === isEditing?.id ?
                        <>
                          <Popup
                            open={isEditing}
                            modal
                            onClose={() => setIsEditing(!isEditing)}
                          >
                            <EditForm song={song} id={song.id} active={isEditing} />
                          </Popup>
                        </>
                        : <h5 style={{ marginTop: "3%" }}>{song.title}</h5>}
                      {song?.id === currentSong?.id ? <ScaleLoader /> : null}
                    </div>
                    <Popup trigger={<div className="bars" style={{ marginBottom: "100px", marginLeft: "30px" }}><FaBars /></div>} position="right center">
                      {userId === song.userId ?
                        <div style={{ display: "flex", justifyContent: "space-between" }}>

                          <div onClick={() => onDelete(song.id)} style={{ cursor: "pointer" }}>
                            <FaTrash />
                          </div>
                          <div style={{ cursor: "pointer" }} onClick={() => setIsEditing({ editing: true, id: song.id })}>
                            <FaEdit />
                          </div>
                        </div>
                        : null

                      }
                    </Popup>
                  </div>
                )
              })}
              <div style={{ border: "1px solid red" }}>yo</div>
            </div>
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