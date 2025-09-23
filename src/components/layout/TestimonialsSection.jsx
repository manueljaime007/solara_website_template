import React from 'react'
import { CTAButton } from '../ui/CTAButton'

const TestimonialsSection = () => {
    return (
        <section className='py-10 px-25 flex flex-col items-center justify-center gap-10'>
            <h2 className='text-center text-3xl w-100'>
                See how we solve problems,
                <span className='ml-2 text-gray-400'>right on target</span>
            </h2>

            <div className='bg-[#F2F4F4] h-[400px] flex gap-10 p-8'>
                <div className='w-1/2 flex flex-col justify-center'>
                    <h2 className='text-2xl font-semibold'>Medtronic</h2>
                    <p className='my-4'>
                        "We have used services from Solara for most of our stations, this is our strategic step to continue to increase the number of solar panel usage for our stations, we are very satisfied with the services from Solara"
                    </p>
                    <CTAButton />
                    <p className='my-5'>
                        <strong>Djennifer Kolobaly - </strong>
                        <span className='text-gray-400'>CTO EV Medtronic</span>
                    </p>
                </div>
                <div className='flex-1 h-full'>
                    <img
                        src="/img/testimonial_section.jpg"
                        alt="testimonial_section"
                        loading='lazy'
                        className='object-cover h-full w-full rounded-3xl'
                    />
                </div>
            </div>
            <div>
                <div className='mx-auto h-[2px] w-[400px] bg-gray-300 relative mb-4 '>
                    <div className='absolute h-[2px] w-[10%] bg-green-400'></div>
                </div>
                <p className='text-[.7rem]'>
                    Electric car charging station
                    <span className="mx-2 text-gray-400">Resicionat ticker panels</span>
                    <span className=" text-gray-400">Wind power for industry</span>
                </p>
            </div>
        </section>
    )
}

export default TestimonialsSection