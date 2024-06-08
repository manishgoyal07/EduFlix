import React, { useEffect, useState } from 'react'
import VideoSuggestionWindow from './VideoSuggestionWindow'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie';
import { Domain_Name } from '../../constants';

const PlayVideoPage = () => {
    const params = useParams()
    // console.log(params?.videoId);
    const [isVideoLiked, setIsVideoLiked] = useState(null)
    const [videoUsername, setVideoUsername] = useState(null)
    const [videoOwner, setVideoOwner] = useState(null);
    // const videoData = useSelector(state => state?.video?.allVideos)
    const [myVideo, setMyVideo] = useState([]);

    const accessToken = Cookies.get('accessToken')


    const toggleLike = async (e) => {
        e.preventDefault();
        // const accessToken = Cookies.get('accessToken')
        const res = await fetch(`${Domain_Name}like/toggle/v/${params?.videoId}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'accept': 'application/json'
            }
        })
        const temp = await res.json()
        console.log(temp);
        setIsVideoLiked(temp?.message?.liked)
    }

    const getVideoOwner = async (e) => {
        // e.preventDefault();
        try {
            const res = await fetch(`${Domain_Name}users/c/${videoUsername}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'accept': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data);
            setVideoOwner(data?.message)
        } catch (err) {
            console.log(err);
        }
    }

    const getVideoData = async (e) => {
        // e.preventDefault();
        try {
            const res = await fetch(`${Domain_Name}videos/${params?.videoId}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'accept': 'application/json'
                }
            })
            const temp = await res.json()
            console.log(temp?.message);
            setMyVideo(temp?.message)
            setIsVideoLiked(temp?.message?.isLiked)
            setVideoUsername(temp?.message?.owner?.username)
            console.log(videoUsername);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getVideoData()
        getVideoOwner()

    }, [params, videoUsername])

    return (
        <div className='flex flex-around'>
            <div className="main-content mx-28 w-3/5 flex flex-col justify-between my-4">
                <div className="artboard artboard-horizontal phone-5">
                    <video src={myVideo?.videoFile?.url} width='900' height='400' className='rounded-xl' alt='Video Not Available' controls />
                    <div className=" border flex flex-row justify-between bg-base-300 my-4">
                        <div className='ml-4'>
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                <img src={videoOwner?.avatar} alt="" srcset="" />                                </div>
                            </div>
                            <h5 className='mx-2 font-semibold'>{videoOwner?.fullName}</h5>
                            <h5 className='mx-2 font-bold'>@{videoOwner?.username}</h5>
                            <div className="badge badge-info badge-outline m-2">{videoOwner?.subscribersCount} subscribers</div>
                        </div>
                        <div className='ml-4'>
                            <h1 className='m-2 font-bold text-xl'>{myVideo?.title}</h1>
                            <h4 className='m-2'>{myVideo?.description}</h4>
                            <div className="badge badge-warning badge-outline m-2">{myVideo?.views} views</div>
                            <div className="badge badge-info badge-outline m-2">{myVideo?.likesCount} likes</div>
                        </div>
                        <button className='m-8' onClick={toggleLike}>
                            {!isVideoLiked ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="#2563eb" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>)}
                        </button>
                        {/* <h4 className='m-2'>{myVideo?.views} views</h4> */}
                    </div>

                    <details className="collapse bg-base-200 my-4">
                        <summary className="collapse-title text-xl font-medium">Comments</summary>
                        <div className="collapse-content">
                            <p>content</p>
                        </div>
                    </details>
                </div>

            </div>
            <VideoSuggestionWindow />
        </div>
    )
}

export default PlayVideoPage