import React, { useEffect, useState } from 'react'
import { Domain_Name } from '../../constants';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const CommentForm = () => {

    const accessToken = Cookies.get('accessToken');

    const {videoId} = useParams()
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(comment, videoId);
        try{
            const res = await fetch(`${Domain_Name}comment/${videoId}`, {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    "Content-type": "application/x-www-form-urlencoded"
                },
            })
            const jsn = await res.json();
            console.log(jsn);
            setComment('')
        } catch(err){
            console.log(err.message);
        }
    }




    return (
        <div className='flex items-center m-4'>

            <textarea
                placeholder="Type here"
                className="textarea textarea-bordered textarea-secondary textarea-xs text-lg w-full max-w-4xl"
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
                <button className="btn mx-2 btn-sm btn-success" onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default CommentForm