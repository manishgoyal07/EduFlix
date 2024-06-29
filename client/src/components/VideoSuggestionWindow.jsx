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
    <div className='w-full flex flex-col items-center'>
      <div className="join grid grid-cols-2 ml-24 mt-4">
  <button className="join-item btn btn-outline">{} Community Posts</button>
</div>
        {!filteredVideos ? <Shimmer /> : <div className='m-4 flex flex-wrap justify-around items-center'>
                {filteredVideos.map((videoData)=><HomeVideoCard data = {videoData}/>)}
                
            </div>}
    </div>
  )
}

export default VideoSuggestionWindow