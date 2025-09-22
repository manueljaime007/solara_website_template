import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go"

const BannerButton = ({ path = "#", text }) => {
    return (
        <Link to={path} className='flex items-center gap-2 border-b-2 pb-3 border-white w-fit'>
            <span>{text}</span> 
            <GoArrowUpRight />
        </Link>
    )
}

export default BannerButton