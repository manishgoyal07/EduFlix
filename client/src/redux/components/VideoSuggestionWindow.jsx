import React, {useState, useEffect} from 'react'
import HomeVideoCard from './HomeVideoCard'
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer';


const VideoSuggestionWindow = () => {

  const [filteredVideos, setFilteredVideos] = useState(null);

  const videos = useSelector(state => state?.video?.filteredVideos)
  useEffect(() => {
          setFilteredVideos(videos);
  }, [videos])

  return (
    <div className='w-full flex flex-col  mr-16'>
        {!filteredVideos ? <Shimmer /> : <div className='m-4 flex flex-wrap justify-around items-center'>
                {filteredVideos.map((videoData)=><HomeVideoCard data = {videoData}/>)}
                
            </div>}
    </div>
  )
}

export default VideoSuggestionWindow