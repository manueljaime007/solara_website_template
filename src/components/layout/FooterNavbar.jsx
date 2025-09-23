import { Link } from "react-router-dom"

import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SocialMediaIcons } from "../ui/SocialMediaIcons";



const nav_links = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About us", path: "/about" },
    { id: 3, text: "Features", path: "/features" },
    { id: 4, text: "Services", path: "/services" },
    { id: 5, text: "Contact", path: "/contact" },
]

export const FooterNavbar = () => {
    return (
        <div className="my-10 py-4  flex justify-between items-center border-b pb-7 border-white">
            <a href="" className="logo">
                <h1 className="text-2xl font-semibold text-green-400">Solara</h1>
            </a>
            <ul className="flex gap-5">
                {
                    nav_links.map(item => {
                        const { id, path, text } = item
                        return (
                            <li key={id}>
                                <Link className="font-extralight" to={path}>{text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <SocialMediaIcons/>
        </div>
    )
}
