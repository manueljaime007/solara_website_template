import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { HiDotsHorizontal } from "react-icons/hi";

export const BannerHighlightCard = ({ adding_style }) => {
    return (
        <div className={`
             w-70 bg-[rgb(255,255,255,.3)] px-2 py-2 
            backdrop:blur-2xl shadow-md rounded-2xl
            ${adding_style}
        `}>
            <HiDotsHorizontal className='text-xl text-gray-200 float-end mr-2' />
            <img
                src="/img/banner.jpg"
                alt="banner_highlight_card"
                className='w-40 h-35 object-cover rounded-2xl'
            />
            <div className='mt-4 text-white flex items-center justify-between p-3 rounded-xl'>
                <p>Discover Our Recent Project</p>
                <div className='border-1 rounded-full p-2'>
                    <GoArrowUpRight className='text-xl' />
                </div>
            </div>

        </div>
    )
}
