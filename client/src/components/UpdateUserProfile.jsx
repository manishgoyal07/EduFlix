import React, { useState } from 'react'
import { Domain_Name } from '../../constants';
import Cookies from 'js-cookie';
import HomeIllustration from '../assets/home-illustration.svg'

const UpdateUserProfile = () => {

    const accessToken = Cookies.get('accessToken');
    const [fullname, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [oldPassword, setOldPassword] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [coverImage, setCoverImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const _NameEmail = new FormData();
            _NameEmail.append('fullName', fullname)
            _NameEmail.append('email', email)
            // const Passwords = new FormData();
            // Passwords.append('oldPassword', oldPassword)
            // Passwords.append('newPassword', newPassword)
            // const _Avatar = new FormData();
            // _Avatar.append('avatar', avatar)
            // const _CoverImage = new FormData();
            // _CoverImage.append('coverImage', coverImage)

            // const options = {
            //     method: 'POST',
            //     mode: 'cors',
            // }

            if (fullname || email) {
                const Data = { fullname, email }
                // console.log(accessToken);
                const _NameEmail_Res = await fetch(`${Domain_Name}users/update-account`, {
                    method: 'PATCH',
                    mode: 'cors',
                    accept: 'application/json',
                    body: JSON.stringify(Data),
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        "Content-type": "application/x-www-form-urlencoded"
                    }
                })
                console.log(_NameEmail_Res.json());
            }
            
            if (oldPassword && newPassword) {
                const Data = { oldPassword, newPassword }
                // console.log(accessToken);
                const _Password_Res = await fetch(`${Domain_Name}users/change-password`, {
                    method: 'POST',
                    mode: 'cors',
                    accept: 'application/json',
                    body: JSON.stringify(Data),
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        "Content-type": "application/x-www-form-urlencoded"
                    }
                })
                console.log(_Password_Res.json());
            }
            if (avatar) {
                const Data = new FormData();
                Data.append('avatar', avatar);
                console.log(avatar);
                const _Avatar_Res = await fetch(`${Domain_Name}users/update-avatar`, {
                    method: 'PATCH',
                    mode: 'cors',
                    body: Data,
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                })
                console.log(_Avatar_Res.json());
            }
            if (coverImage) {
                const Data = new FormData();
                Data.append('coverImage', coverImage);
                console.log(coverImage);
                const _Avatar_Res = await fetch(`${Domain_Name}users/update-coverImage`, {
                    method: 'PATCH',
                    mode: 'cors',
                    body: Data,
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                })
                console.log(_Avatar_Res.json());
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
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
                                    <span className="label-text">Change Email</span>
                                </label>
                                <input type="email" placeholder="Email"  onChange = {(e)=>setEmail(e.target.value)} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Change Full Name</span>
                                </label>
                                <input type="fullName" placeholder="Full Name" onChange = {(e)=>setFullName(e.target.value)} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Old Password</span>
                                </label>
                                <input type="oldpassword" placeholder="Old Password" onChange = {(e)=>setOldPassword(e.target.value)} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter New Password</span>
                                </label>
                                <input type="newpassword" placeholder="New Password" onChange = {(e)=>setNewPassword(e.target.value)} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Change Avatar</span>
                                </label>
                                <input type="file" onChange = {(e)=>setAvatar(e.target.files[0])} className="file-input file-input-bordered file-input-info w-full max-w-xs" /></div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Change Cover Image</span>
                                </label>
                                <input type="file" onChange = {(e)=>setCoverImage(e.target.files[0])} className="file-input file-input-bordered file-input-info w-full max-w-xs" /></div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateUserProfile