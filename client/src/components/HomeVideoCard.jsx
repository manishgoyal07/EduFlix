import React from 'react'
import { Link } from 'react-router-dom'

const HomeVideoCard = ({data}) => {
    const owner = data?.owner
    // console.log(data);
    return (
        <div>
        <Link to={`/user/playVideo/${data?._id}`}>
            <div className="card my-4 w-80 bg-base-300 -z-10 shadow-xl " onClick={''}>
                <figure><img src={data?.thumbnail?.url} alt="Shoes" className='mt-4 rounded-xl' /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">
                        {data?.title}
                    </h2>
                    <p>{data?.description}</p>
                    <div className="card-actions justify-between items-center">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-8">
                                <span className="text-xs">UI</span>
                            </div>
                        </div>
                        <div className="badge badge-primary">Channel Name</div>
                        <div className="badge badge-outline">{data?.views} Views</div>
                    </div>
                </div>
                
            </div>
        </Link>
        
        </div>
    )
}

export default HomeVideoCard