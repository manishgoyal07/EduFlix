import React from 'react'
import { Link } from 'react-router-dom'
import bgImg from '../assets/pngtree-dark-green-cyan-paper-cut-minimalist-background-for-brochure-poster-banner-image_405384.jpg'
import { useSelector } from 'react-redux'



const LandingPage = () => {
  const loginStatus = useSelector(state=>state?.user?.isUserLoggedIn)
  return (
<div className="hero min-h-screen" style={{backgroundImage:"url('https://dynoacademy.com/assets/about.png')"}} >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-rose-600">Welcome to Eduflix</h1>
      <p className="mb-5 text-white font-semibold text-xl">Transform Your Learning Experience with EduFlix: AI-Driven Video Lessons for Students and Teachers!</p>
      <Link to={(loginStatus)? '/user/home' : '/app/signup'}><button className="btn btn-warning">Get Started</button></Link>
    </div>
  </div>
</div>  )
}

export default LandingPage