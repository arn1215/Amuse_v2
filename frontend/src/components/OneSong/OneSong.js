import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchSongs, } from "../../store/song"
import CommentContainer from "../CommentContainer"
import Player from "../PlayerComponent"
import React, { useRef } from "react"
import LikeComponent from "../LikeComponent"
const parseDate = require('postgres-date')

const OneSong = () => {

  const dispatch = useDispatch()
  const id = parseInt(useParams().songId)
  const song = useSelector(state => state.songs[id])
  const user = useSelector(state => state?.session?.user)



  const dateHelperFn = (date) => {
    let res;
    res = parseDate(`${date.split(".")[0]}Z`.replace("T", " "))

    return res
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
    fetchData()
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
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                  <h3 style={{ color: "white", width: "300px"}}>{song?.title}</h3>
                  <p style={{color: 'white'}}>{dateHelperFn(song.createdAt).toString().slice(0, 15)}</p>
                  </div>

                  {/* <button className="playerButtons" style={{all: 'unset', backgroundColor: '', height: 'fit-content'}}onClick={() => childFunc.current()}><FaPlay  /></button>
            <button className="playerButtons" style={{all: 'unset', backgroundColor: '', height: 'fit-content'}} onClick={() => childFunc2.current()}><FaPauseCircle  /></button> */}
                  {
                    <div style={{ marginTop: "10px" }}>
                      <LikeComponent song={song} songId={song?.id} />
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