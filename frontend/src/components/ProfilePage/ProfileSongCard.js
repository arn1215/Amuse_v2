

const ProfileSongCard = ({song}) => {
  return (
    <div className="grey" style={{ backgroundColor: "#dfdfdf", height: "20%", width:"60%", marginTop:"4%", marginLeft:"4%", display: "flex", alignItems: "center" }}>
      <img src={song?.imageUrl} style={{height: "80%", marginLeft: "15px"}}/>
      <div className="songInfo" style={{ height: "80%", width: "60%", marginLeft: "15px"}}>
        <h5 style={{marginTop: "0px"}}>{song.title}</h5>
      </div>
    </div>
  )
}

export default ProfileSongCard