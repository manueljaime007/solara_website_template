import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go"
export const CTAButton = ({ path = "#", text = "Get in touch", color = "primary" }) => {

    // classes diferentes conforme a "ordem"
    const base =
        "px-4 py-2 rounded-full font-medium transition duration-200 flex items-center gap-2 w-fit cursor-pointer"

    const styles = {
        primary: "bg-green-600 text-white hover:bg-green-700",
        secondary: "bg-transparent border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
        white: "bg-white border border-green-transparent text-black hover:bg-green-600 hover:text-white",
    }

    return (
        <Link  to={path} className={`${base} ${styles[color]}`}>
            {text}
            <GoArrowUpRight />
        </Link>
    )
}
