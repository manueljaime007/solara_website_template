import { IoIosCheckmarkCircle } from 'react-icons/io'
import { CTAButton } from '../ui/CTAButton'
import { FooterNavbar } from './FooterNavbar'

const Footer = () => {
    return (
        <footer className='bg-black text-white px-10 py-10'>
            <div className='flex my-4 gap-20'>
                <div>
                    <h2 className='text-3xl w-150'>
                        It's time to support zero pollution,
                        <span className='ml-2 text-gray-400'>with renewable resources</span>
                    </h2>
                    <div className='flex gap-3 mt-4'>
                        <p className='flex gap-2 text-[.8rem]'>
                            <IoIosCheckmarkCircle className="text-green-500 text-xl mb-5" />
                            Experienced for more than 10 years
                        </p>
                        <p className='flex gap-2 text-[.8rem]'>
                            <IoIosCheckmarkCircle className="text-green-500 text-xl mb-5" />
                            Support for the latest technology
                        </p>
                    </div>
                </div>
                <div>
                    <p className='mb-4'>
                        By increasing the effectiveness and efficiency of electricity use, the use of renewable resources is very profitable for all industrial services.
                    </p>
                    <CTAButton color='white' />
                </div>
            </div>

            <FooterNavbar />

            <div className='flex justify-between text-[.8rem]'>
                <p>2025 Solara Inc. All rights reserved</p>
                <p className='flex justify-between gap-5'>
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer