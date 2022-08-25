import {Bars} from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Loading = () => {
  return (
    <div>
      <Bars 
      
      
      height={100}
      width={100}
      timeout={2000}
      />

      
    </div>

  )
}

export default Loading