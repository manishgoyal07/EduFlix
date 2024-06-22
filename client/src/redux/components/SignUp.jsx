import React, { useState } from 'react'
import HomeIllustration from '../assets/home-illustration.svg';
import { Domain_Name } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser } from '../redux/UserSlice';
import Body from './Body';
const SignUp = () => {

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [avatar, setAvatar] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const UserDispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append('fullName', fullName);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('username', username);
            formData.append("avatar", avatar);
            formData.append("coverImage", coverImage);
            const res = await fetch(`${Domain_Name}users/register`, {
                method: 'POST',
                body: formData,
            })
            // console.log(res.json());
            const usr = await res.json();
            // console.log(usr);
            // console.log(usr?.message?.user);
            UserDispatch(AddUser(usr?.message?.user))
        } catch (err) {
            console.log(err);
        }
    }

    const loginStatus = useSelector(state=>state?.user?.isUserLoggedIn)

    return (
        (loginStatus) ? <Body/> : 
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
                                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="username" placeholder="Username" onChange={e => setUsername(e.target.value)} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="fullName" placeholder="Full Name" onChange={e => setFullName(e.target.value)} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Avatar</span>
                                </label>
                                <input type="file" onChange={e => setAvatar(e.target.files[0])} className="file-input file-input-bordered file-input-info w-full max-w-xs" />                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Cover Image</span>
                                </label>
                                <input type="file" onChange={e => setCoverImage(e.target.files[0])} className="file-input file-input-bordered file-input-info w-full max-w-xs" />                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Set Password</span>
                                </label>
                                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info" onClick={handleSubmit}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp