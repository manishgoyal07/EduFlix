import React from 'react'
import HomeVideoCard from './HomeVideoCard'
import { useSelector } from 'react-redux'

const UserDashboard = () => {
    const {username, fullName, avatar} = useSelector(state => state?.user?.loggedInUser)
    const userLoginStatus = useSelector(state => state?.user?.isUserLoggedIn)
    console.log('user is: ' + username, fullName, avatar);

    return (
        <div className='-z-50'>
            <div className="mockup-window border bg-base-300">
                <div className=" bg-base-200">
                    <div className='flex flex-row ml-40 my-4'>
                        <div className="avatar">
                            <div className="w-36 h-36 rounded-full ">
                                <img src={avatar} />
                            </div>
                        </div>
                        <div className='flex flex-col ml-28'>
                            <div className='text-bold text-4xl my-2'>{fullName}</div>
                            <div className='text-bold text-2xl my-2'>@{username}</div>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-info my-2" >Subscribe</button>
                            {/* <button className="btn btn-info my-2">Unsubscribe</button> */}
                            {(!userLoginStatus && username !== username) ? <div></div> :  <button className="btn btn-info my-2" onClick={() => document.getElementById('my_modal_2').showModal()}>More Info</button>
                            }
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">About</h3>
                                    <div className='flex flex-col justify-between items-center'>
                                        <div className="stats stats-vertical shadow">
                                            <div className="stat">
                                                <div className="stat-title">Downloads</div>
                                                <div className="stat-value">31K</div>
                                                <div className="stat-desc">Jan 1st - Feb 1st</div>
                                            </div>

                                            <div className="stat">
                                                <div className="stat-title">New Users</div>
                                                <div className="stat-value">4,200</div>
                                                <div className="stat-desc">↗︎ 400 (22%)</div>
                                            </div>

                                            <div className="stat">
                                                <div className="stat-title">New Registers</div>
                                                <div className="stat-value">1,200</div>
                                                <div className="stat-desc">↘︎ 90 (14%)</div>
                                            </div>
                                        </div>
                                        {/* <div className='flex flex-col'>
                                            <div>Manish Goyal</div>
                                            <div>manishgoyalbsr7@gmail.com</div>
                                            <div>@manishgoyal_in</div>
                                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eum quam asperiores! Error animi laborum incidunt! Quo, illo voluptas. Numquam dignissimos architecto, vitae, recusandae neque libero ut autem voluptas molestiae eaque, fugiat dolore expedita sunt. Incidunt aliquam hic eius saepe itaque ex rerum fugit, neque perspiciatis, perferendis minima vitae modi.</div>
                                        </div> */}
                                    </div>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                    </div>
                    <div role="tablist" className="tabs tabs-lifted">
                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Videos" />
                        <div role="tabpanel" className="tab-content flex justify-center items-center bg-base-100 border-base-300 rounded-box p-6">
                            <div className="carousel carousel-center rounded-box">
                                <div className="carousel-item">
                                    <HomeVideoCard />
                                </div>
                                <div className="carousel-item">
                                    <HomeVideoCard />
                                </div>
                                <div className="carousel-item">
                                    <HomeVideoCard />
                                </div>
                                <div className="carousel-item">
                                    <HomeVideoCard />
                                </div>
                                <div className="carousel-item">
                                    <HomeVideoCard />
                                </div>
                                <div className="carousel-item">
                                    <HomeVideoCard />
                                </div>
                                <div className="carousel-item">
                                    <HomeVideoCard />
                                </div>
                                <div className="carousel-item">
                                    <HomeVideoCard />
                                </div>
                                <div className="carousel-item">
                                    <HomeVideoCard />
                                </div>

                            </div>
                        </div>

                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="History" checked />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">History</div>

                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Playlists" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Playlists</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard