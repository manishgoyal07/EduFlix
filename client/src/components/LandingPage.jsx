import React from 'react'
import { Link } from 'react-router-dom'
import bgImg from '../assets/pngtree-dark-green-cyan-paper-cut-minimalist-background-for-brochure-poster-banner-image_405384.jpg'
import { useSelector } from 'react-redux'



const LandingPage = () => {
  const loginStatus = useSelector(state=>state?.user?.isUserLoggedIn)
  return (
<div className="hero min-h-screen" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repellendus placeat quo qui sed neque molestiae deserunt eius dolore, error earum, tenetur fuga vel veniam veritatis eveniet ut provident voluptate?</p>
      <Link to={(loginStatus)? '/user/home' : '/app/signup'}><button className="btn btn-info">Get Started</button></Link>
    </div>
  </div>
</div>  )
}

export default LandingPage