import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react';
import { addLike, fetchSongsLikes, removeLike } from '../../store/like';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
//destrucutre songId as a prop
const LikeComponent = ({song, liked}) => {
    
    const dispatch = useDispatch()
    const userId = useSelector(state => state?.session?.user?.id);
    // const song = useSelector(state => state.songs.song)
    const songId = song?.id
    const [isLiked, setIsLiked] = useState(liked === "true" ? true : false)
    const likeList = useSelector((state) => Object.values(state.likes).filter(like => like.songId === songId).length)

    useEffect(() => {
        console.log(songId)
        console.log(song, "THIS THE SONG")
        dispatch(fetchSongsLikes(songId)) 
        console.log( isLiked, "HEY")     
    }, [dispatch])
    
    // const singleSongLikes = likeList.filter(like => like.songId === songId)
    // const count = singleSongLikes.length
    // console.log("count", count)
    // console.log(likeList)
    const onClick = async() => {
        
        const like = {
            songId,
            userId,
        }
        setIsLiked(!isLiked)
        if (isLiked) {
            await dispatch(removeLike(like))
            await dispatch(fetchSongsLikes(songId)) 
        
        } else {
            await dispatch(addLike(like))  
            await dispatch(fetchSongsLikes(songId))
            
        }
        console.log(likeList)
    }

    return (
        userId ? 
        <div>
        { isLiked ? <FaHeart onClick={onClick} /> : <FaHeartBroken onClick={onClick} />}  
        <p>Likes: {likeList}</p>
        </div> : <p style={{color: "white"}}>Log in to like songs</p>
    )
}




export default LikeComponent