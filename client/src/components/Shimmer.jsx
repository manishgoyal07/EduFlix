import React from 'react'

const ShimmerCard = () => {
    return (
        <div className="flex flex-col gap-4 w-72 m-8">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    )
}

const Shimmer = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <span className="loading loading-spinner mx-2 text-primary"></span>
                <span className="loading loading-spinner mx-2 text-secondary"></span>
                <span className="loading loading-spinner mx-2 text-accent"></span>
                <span className="loading loading-spinner mx-2 text-neutral"></span>
                <span className="loading loading-spinner mx-2 text-info"></span>
                <span className="loading loading-spinner mx-2 text-success"></span>
                <span className="loading loading-spinner mx-2 text-warning"></span>
                <span className="loading loading-spinner mx-2 text-error"></span>
            </div>
            <div className='flex flex-wrap items-center justify-between'>
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
            </div>
        </div>
    )
}

export default Shimmer