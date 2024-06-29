import React, { useEffect, useState } from 'react'
import HomeIllustration from '../assets/home-illustration.svg';
import { Domain_Name } from '../../constants';
import { AddUser } from '../redux/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import Body from './Body';
const Login = () => {

    const [username, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [userData, setUserData] = useState()
    const UserDispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUserData({ username, email, password })
        try {
            const res = await fetch(`${Domain_Name}users/login`, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: JSON.stringify(userData)
            })

            const usr = await res.json()
            // console.log(usr);
            // console.log(usr.message.user);
            UserDispatch(AddUser(usr?.message?.user))
        } catch (err) {
            console.log(err);
        }
    }

    const loginStatus = useSelector(state=>state?.user?.isUserLoggedIn)

    useEffect(()=>{

    }, [loginStatus])

     return (
        (loginStatus)? <Body/> : 
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={HomeIllustration} alt='HomeIllustration' className='ml-32' />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className="input input-bordered input-secondary" required />
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="username" placeholder="Username" onChange={e => setUserName(e.target.value)} className="input input-bordered input-secondary" required />
                            </div>
                            <div className="divider"></div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className="input input-bordered input-secondary" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary" onClick={handleSubmit}>Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login