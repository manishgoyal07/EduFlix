import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">404 Not found</h1>
                    <h3 className="mb-5 text-2xl font-bold">Looks like the page you're looking for does not exist</h3>
                    <Link to='/user/home'><button className="btn btn-info">Back Home</button></Link>
                </div>
            </div>
        </div>)
}

export default ErrorPage