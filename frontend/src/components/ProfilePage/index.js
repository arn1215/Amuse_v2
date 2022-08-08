import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtist } from "../../store/song";


const ProfilePage = () => {
 
  const params = useParams()
  const dispatch = useDispatch()
  const src = "https://amuse-bucket.s3.amazonaws.com/DriveMeCrazy.png"
  const artist = useSelector(state => state?.songs?.artistInfo)
  console.log(artist[params.userId][0].username)

  useEffect(() => {
    dispatch(fetchArtist(28))
  }, [])
  
  return (
    <div className="outer" style={{ backgroundColor: " #dfdfdf", height: "100%", display: "flex", justifyContent: "center", marginTop: "-3px" }}>
      <div className="inner" style={{ backgroundColor: "white", height: "100%", width: "65%", display: "flex", flexDirection: "column" }}>
        <div className="banner" style={{ backgroundColor: "#ff9c40", height: "300px", display: "flex", alignItems: "center" }}>
            <img src={src} style={{ backgroundColor: "white", height: "220px", width: "220px", borderRadius: "50%", marginLeft: "10%" }}/>     
          <div className="artist-detail" style={{ height: "220px", width: "350px", marginLeft: "30px"}}>
            <h3 style={{ color:"white"}}></h3>
            <h6>Artist Location</h6>
            
          </div>
        </div>
      </div>
    </div>
  )
}


export default ProfilePage;