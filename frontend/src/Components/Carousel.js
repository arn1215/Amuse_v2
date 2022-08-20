import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchArtist, fetchSongs } from "../store/song"
import Card from "./Card"



const Carousel = ({ cards }) => {

  const songs = useSelector(state => state.songs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArtist(2))
  }, [])
  

  return (
    <div class="carousel w-8/12 ml-72">
      <div id="slide1" class="carousel-item relative w-full">
        <div class="card-container flex ml-36 mt-20">
          
          <Card songs={songs} />
          <Card />
          <Card />
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-primary">❮</a>
          <a href="#slide2" class="btn btn-primary">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <div class="card-container flex ml-36">
          <Card />
          <Card />
          <Card />
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-primary">❮</a>
          <a href="#slide3" class="btn btn-primary">❯</a>
        </div>
      </div>
    </div>
  )
}

export default Carousel