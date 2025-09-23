import { Link } from "react-router-dom"
import { NavButton } from "../ui/NavButton"

const nav_links = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About us", path: "/about" },
    { id: 3, text: "Features", path: "/features" },
    { id: 4, text: "Services", path: "/services" },
    { id: 5, text: "Contact", path: "/contact" },
]

export const Navbar = () => {
    return (
        <header className="py-4 px-10 flex justify-between items-center">
            <a href="" className="logo">
                <h1 className="text-2xl font-semibold text-green-400">Solara</h1>
            </a>
            <nav>
                <ul className="flex gap-5">
                    {
                        nav_links.map(item => {
                            const { id, path, text } = item
                            return (
                                <li key={id}>
                                    <Link to={path}>{text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div>
                <div className="flex gap-5">
                    <NavButton
                        order="primary"
                        path="/login"
                        text="Log in"
                    />                    
                    <NavButton
                        order="secondary"
                        path="/contact"
                        text="Get in touch"
                    />
                </div>
            </div>
        </header>
    )
}
