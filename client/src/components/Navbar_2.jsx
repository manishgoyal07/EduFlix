import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';
import { Domain_Name } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveUser } from '../redux/UserSlice';
import { setFilteredVideos } from '../redux/VideoSlice';
import Chatbot from './Chatbot';


const Navbar_2 = () => {
    const videoData = useSelector(state => state.video.allVideos);
    const [searchText, setSearchText] = useState(' ');

    const { username, fullName, avatar } = useSelector(state => state?.user?.loggedInUser)
    // console.log('user is: ' + username, fullName, avatar);

    const UserDispatch = useDispatch()
    const handleLogout = async (e) => {
        const accessToken = Cookies.get('accessToken')
        e.preventDefault();
        try {
            const res = await fetch(`${Domain_Name}users/logout`, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    "Content-type": "application/x-www-form-urlencoded",
                    'accept': 'application/json'
                }
            })
            const usr = await res.json()
            // console.log(usr);
            // console.log(usr.message.user);
            UserDispatch(RemoveUser())
        } catch (err) {
            console.log(err);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredData = []
        videoData.map((data) => {
            if (data?.title?.includes(searchText) || data?.description?.includes(searchText)) {
                filteredData.push(data)
            }
        })
        UserDispatch(setFilteredVideos(filteredData));
    }

    return (
        <div>
            
            <div className="navbar bg-base-300">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost ml-2">
                        <label htmlFor="my-drawer" className="btn  btn-info drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>

                    </button>
                </div>
                <div className="flex-1 ml-10 ">
                    <Link to='/user/home'><a className="btn btn-ghost text-xl border-red-600 border-2">EduFlix</a></Link>
                </div>
                <div className="flex-none">
                    <div className="form-control">
                        <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search..." className="input input-bordered input-accent w-3/5 mx-60" />
                    </div>
                    <button className='btn btn-outline btn-success mr-48' onClick={handleSearch}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    </button>

                    <label className="cursor-pointer grid place-items-center mx-6">
                        <input type="checkbox" value="light" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    </label>

                    <Chatbot/>


                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-outline btn-info text-2xl font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                            <Link to='/user/uploadVideo'><li><a>Add Video</a></li></Link>
                            <Link to='/user/uploadPost'><li><a>Add Post</a></li></Link>
                        </ul>
                    </div>


                    <div className="dropdown dropdown-end mx-8">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={avatar} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <Link to='userDashboard'><li>
                                <a className="justify-between">
                                    View Profile
                                </a>
                            </li></Link>
                            <Link to='/user/updateProfile'><li><a>Update Profile</a></li></Link>
                            <Link to='/app/login'><li><a onClick={handleLogout}>Logout</a></li></Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 z-50 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Home</a></li>
                        <li><a>Playlists</a></li>
                        <li><a>Watch History</a></li>
                        <li><a>Profile</a></li>
                        <li><a>My Videos</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar_2