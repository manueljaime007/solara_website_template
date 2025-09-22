import React from 'react'
import { Link } from 'react-router-dom'

export const NavButton = ({ path = "#", text, order = "primary" }) => {

    // classes diferentes conforme a "ordem"
    const base =
        "px-4 py-2 rounded-full font-medium transition duration-200"

    const styles = {
        primary: "bg-green-600 text-white hover:bg-green-700",
        secondary: "bg-transparent border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
    }

    return (
        <Link to={path} className={`${base} ${styles[order]}`}>
            {text}
        </Link>
    )
}
