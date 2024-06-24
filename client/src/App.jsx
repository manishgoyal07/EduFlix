import { useEffect, useState } from 'react'
import './App.css'
import Navbar_1 from './components/Navbar_1';
import Navbar_2 from './components/Navbar_2';
import Body from './components/Body';
import Footer from './components/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PlayVideoPage from './components/PlayVideoPage';
import ErrorPage from './components/ErrorPage';
import UpdateUserProfile from './components/UpdateUserProfile';
import { useDispatch, useSelector } from 'react-redux';
import UserDashboard from './components/UserDashboard';
import Cookies from 'js-cookie';
import { Domain_Name } from '../constants';
import { AddUser } from './redux/UserSlice';
import UploadVideoPage from './components/UploadVideoPage';
import { setAllVideos, setFilteredVideos } from './redux/VideoSlice';
import LandingPage from './components/LandingPage';


const App = () => {

  const Dispatch = useDispatch()
  const getCurrentUser = async (e) => {
    // e.preventDefault();
    const accessToken = Cookies.get('accessToken')
    try {
      const res = await fetch(`${Domain_Name}users/currentUser`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'accept': 'application/json'
        }
      })
      const usr = await res.json()
      // console.log(usr);
      Dispatch(AddUser(usr?.message))
    } catch (err) {
      console.log(err);
    }
  }
  const getAllVideos = async (e) => {
    // e.preventDefault();
    const accessToken = Cookies.get('accessToken')
    try {
      const res = await fetch(`${Domain_Name}videos/all-videos`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'accept': 'application/json'
        }
      })
      const vdo = await res.json()
      console.log(vdo?.message?.docs);
      Dispatch(setAllVideos(vdo?.message?.docs));
      Dispatch(setFilteredVideos(vdo?.message?.docs));
    } catch (err) {
      console.log(err);
    }
  }

  const loginStatus = useSelector(state => state.user.isUserLoggedIn)

  useEffect(() => {
    // if (loginStatus) {
    getCurrentUser();
    getAllVideos();
    // }
  }, [])
  return (
    <RouterProvider router={AppRouter}/>
  )
}


const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />

  },
  {
    path: '/app',
    element: <div className='flex flex-col'>
      <Navbar_1 />
      <Outlet />
    </div>,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
    ],
  },
  {
    path: '/user',
    element: <div className='flex flex-col'>
      <Navbar_2 />
      <Outlet />
      <Footer />
    </div>,
    children: [
      {
        path: 'home',
        element: <Body />
      },
      {
        path: 'updateProfile',
        element: <UpdateUserProfile />
      },
      {
        path: 'uploadVideo',
        element: <UploadVideoPage />
      },
      {
        path: 'playVideo/:videoId',
        element: <PlayVideoPage />
      },
      {
        path: 'userDashboard',
        element: <UserDashboard />
      },

    ]
  }
])


export default App
