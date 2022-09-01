import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchSongs, } from "../../store/song"
import CommentContainer from "../CommentContainer"
import Player from "../PlayerComponent"
import React, { useRef } from "react"
import LikeComponent from "../LikeComponent"
import { FaHeart, FaHeartBroken } from "react-icons/fa"
import { addLike, fetchSongsLikes, removeLike } from "../../store/like"
const parseDate = require('postgres-date')

const OneSong = () => {

  const dispatch = useDispatch()
  const id = parseInt(useParams().songId)
  const song = useSelector(state => state.songs[id])
  const user = useSelector(state => state?.session?.user)
  const [liked, setIsLiked] = useState(false)

  const dateHelperFn = (date) => {
    let res;
    res = parseDate(`${date.split(".")[0]}Z`.replace("T", " "))

    return res
  }

  const onClick = async() => {
        
    const like = {
        songId: id,
        userId: user.id,
    }
    setIsLiked(!liked)
    if (liked) {
      
        await dispatch(removeLike(like))
        await dispatch(fetchSongsLikes(id)) 
    
    } else {
        await dispatch(addLike(like))  
        await dispatch(fetchSongsLikes(id))
        
    }
    
}


  useEffect(() => {
    dispatch(fetchSongs())
    const fetchData = async () => {
      const data = await fetch(`/api/likes/${user?.id}/${id}`)
      console.log(data)
      const json = await data.json()
      const bool = JSON.stringify(json).split(":")[1].replace("}", "")
      document.cookie = `isLiked = ${bool}`
    }
    if (user) {
      fetchData()
    }
   
    const cookieData = async () => {
      let bool = await document.cookie.split("isLiked")[1].replace(/["=]/g, "")
      setIsLiked(bool)
    }
    setTimeout(() => {
      setIsLiked(document.cookie.split("isLiked")[1].replace(/["=]/g, "") === "true" ? true : false)
    }, 500)
    console.log(liked, "HEY AGAIN")
  }, [dispatch])

  return (
    <>
      {song ? (
        <>
          <div className="commentflex">
            <div className="page">
              <div className="page-container">
                <img className="songimg" src={song?.imageUrl} alt='cover art' />
                <div className="container-for-details">
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3 style={{ color: "white", width: "300px" }}>{song?.title}</h3>
                    <p style={{ color: 'white' }}>{dateHelperFn(song.createdAt).toString().slice(0, 15)}</p>
                  </div>

                  {/* <button className="playerButtons" style={{all: 'unset', backgroundColor: '', height: 'fit-content'}}onClick={() => childFunc.current()}><FaPlay  /></button>
            <button className="playerButtons" style={{all: 'unset', backgroundColor: '', height: 'fit-content'}} onClick={() => childFunc2.current()}><FaPauseCircle  /></button> */}
                  {
                    <div style={{ marginTop: "10px" }}>
                      {user?.id ?
                      <div style={{ color: 'red'}}>
                        
                        {liked === false ?   <i style={{cursor: 'pointer',fontSize:'40px', color: 'white'}} class="fa fa-thumbs-up" onClick={onClick}></i> : <i style={{cursor: 'pointer',fontSize:'40px', color: '#82ffba'}} class="fa fa-thumbs-up" onClick={onClick}></i>}
{/*                         <p>Likes: {likeList}</p> */}
                      </div> : null}
                    </div>
                  }
                  <Link to={`/users/${song?.userId}`} style={{ marginLeft: "-14px", }}>See more from this artist!</Link>
                </div>
              </div>
            </div>
            <div className="comment">
              <CommentContainer songId={song.id}></CommentContainer>
            </div>
          </div>
          <Player className='player' currentSong={song} />
        </>
      ) : null
      }
    </>
  )
}


export default OneSong;