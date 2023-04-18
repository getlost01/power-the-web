import React from 'react'
import { useState } from 'react';

import { FaAngleDown, FaAngleRight } from 'react-icons/fa';


const FrontendRoadmap = ({ setContent, setMenu, menu }) => {
    const topics = []
    const [open, setOpen] = useState(false);
    // const [type, setType] = useState("");
    // console.log(type);

    return (
        <div>
            <div className='flex justify-between items-center'>

                <h2 className='cursor-pointer'
                    onClick={() => setOpen(!open)}
                >Frontend Roadmap</h2>
                {
                    !open ? <FaAngleRight /> : <FaAngleDown />
                }
            </div>
            <div className='flex flex-col gap-y-5'>
                <ul className={`${open ? "" : "hidden"}`}>
                    {
                        topics.length === 0 ? <h1 className='text-sm font-semibold'>Coming soon...</h1> :
                            topics.map((topic, index) => (
                                <li key={index} className='cursor-pointer my-2 hover:bg-slate-600 transition-all ease-linear duration-200a ml-0 px-1 rounded py-2 text-white' onClick={() => { setContent(topic.toLowerCase()); setOpen(!open); }}>{topic}</li>
                            ))

                    }

                </ul>
            </div>
        </div>
    )
}


export default FrontendRoadmap