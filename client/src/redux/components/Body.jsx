import React, { useEffect, useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'
import HomeVideoCard from './HomeVideoCard';
import PlayVideoPage from './PlayVideoPage';
import Shimmer from './Shimmer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Body = () => {
    // const [isLoaded, setIsLoaded] = useState(false);
    // const func = ()=>{
    //     setTimeout(()=>{
    //         setIsLoaded(true);
    //     }, 3000)
    // }
    // func()

    const [filteredVideos, setFilteredVideos] = useState(null);

    const videos = useSelector(state => state?.video?.filteredVideos)
    useEffect(() => {
            // console.log(filteredVideos);
            setFilteredVideos(videos);
    }, [videos, filteredVideos])
// const vid = filteredVideos[0]
    return (
        <div className='w-full my-8 flex flex-col items-center'>
            {!filteredVideos ? <Shimmer /> : <div className='m-4 flex flex-wrap justify-around items-center'>
                {filteredVideos.map((videoData)=><HomeVideoCard data = {videoData} key={videoData?.data?._id}/>)}
                
            </div>}
        </div>
    )
}

export default Body