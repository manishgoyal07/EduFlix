import React, { useState } from 'react'
import videoIllustration from '../assets/5443834.webp';
import { Domain_Name } from '../../constants';
import { useDispatch } from 'react-redux';
import { AddUser } from '../redux/UserSlice';
import Cookies from 'js-cookie';
const UploadVideoPage = () => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [videoFile, setVideoFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const accessToken = Cookies.get('accessToken');
    const [uploadStatus, setUploadStatus] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setUploadStatus(true)
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('videoFile', videoFile);
            formData.append('thumbnailFile', thumbnailFile);
            console.log(formData);
            const res = await fetch(`${Domain_Name}videos/upload-video`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'accept': 'application/json'
                },
                body: formData,
            })
            // console.log(res.json());
            const json = await res.json();
            console.log(json);
            setUploadStatus(false);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className='ml-80'>
                            {(uploadStatus) ? <span className="loading loading-spinner loading-lg text-success"></span>
                            : <div className='text-yellow-500'></div>}
                            </div>
                        <img src={videoIllustration} alt='HomeIllustration' className='ml-32' />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="title" placeholder="Title" onChange={e => setTitle(e.target.value)} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="description" placeholder="Description" onChange={e => setDescription(e.target.value)} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Video File</span>
                                </label>
                                <input type="file" onChange={e => setVideoFile(e.target.files[0])} className="file-input file-input-bordered file-input-info w-full max-w-xs" />                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Thumbnail File</span>
                                </label>
                                <input type="file" onChange={e => setThumbnailFile(e.target.files[0])} className="file-input file-input-bordered file-input-info w-full max-w-xs" />                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info" onClick={handleSubmit}>Publish</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadVideoPage