import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchArtist } from "../../store/song";
import Player from "../PlayerComponent";

import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'

const ProfilePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSong, setCurrentSong] = useState()
  const params = useParams()
  const dispatch = useDispatch()
  const src = "https://amuse-bucket.s3.amazonaws.com/DriveMeCrazy.png"
  const artist = useSelector(state => state?.songs?.artistInfo)



  useEffect(() => {
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
                <>
                  <div className="grey" style={{cursor: "pointer", backgroundColor: "#dfdfdf", height: "20%", width: "50%", marginTop: "4%", marginLeft: "4%", display: "flex", alignItems: "center", borderRadius: "4px" }} onClick={() => setCurrentSong(song)}>
                    <Link to={`/songs/${song.id}`} style={{ height: "80%", marginTop: "4%" }}>
                      <img src={song?.imageUrl} style={{ height: "80%", marginLeft: "15px", borderRadius: "4px" }} />
                    </Link>
                    <div className="songInfo" style={{ height: "80%", width: "60%", marginLeft: "15px" }}>
                      <h5 style={{ marginTop: "3%" }}>{song.title}</h5>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      }
      <Player currentSong={currentSong} />

    </>
  )
}


export default ProfilePage;