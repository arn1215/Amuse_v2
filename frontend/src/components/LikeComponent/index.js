import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react';
import { addLike, fetchSongsLikes, removeLike } from '../../store/like';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
//destrucutre songId as a prop
const LikeComponent = ({song}) => {
    
    const dispatch = useDispatch()
    const userId = useSelector(state => state?.session?.user?.id);
    // const song = useSelector(state => state.songs.song)
    const songId = song?.id
    const [isLiked, setIsLiked] = useState(false)
    const likeList = useSelector((state) => Object.values(state.likes).filter(like => like.songId === songId).length)

    useEffect(() => {
        console.log(likeList)
        console.log(song, "THIS THE SONG")
        setTimeout(() => {
            dispatch(fetchSongsLikes(songId)) 
        }, 1000);
       
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
        </div> : null
    )
}




export default LikeComponent