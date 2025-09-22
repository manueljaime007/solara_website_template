import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

export const BannerHighlightCard = ({ adding_style }) => {
    return (
        <div className={`
             w-60 bg-[rgb(255,255,255,.3)] px-2 py-2 
            backdrop:blur-2xl shadow-md rounded-2xl
            ${adding_style}
        `}>
            <img
                src="/img/banner.jpg"
                alt="banner_highlight_card"
                className='w-35 h-35 object-cover rounded-2xl border-4 border-white'
            />
            <div className='mt-4 text-white flex items-center justify-between p-3 rounded-xl'>
                <p>Discover Our Recent Project</p>
                <div className='border-2 rounded-full p-2'>
                    <GoArrowUpRight className='text-xl' />
                </div>
            </div>

        </div>
    )
}
