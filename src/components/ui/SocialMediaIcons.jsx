import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  { id: 1, icon: <FaLinkedinIn />, path: "https://linkedin.com" },
  { id: 2, icon: <FaInstagram />, path: "https://www.instagram.com/manuel_jaime007/" },
  { id: 3, icon: <FaGithub />, path: "https://github.com/manueljaime007" },
  { id: 4, icon: <FaTwitter />, path: "https://twitter.com" },
];

export const SocialMediaIcons = () => {
  return (
    <ul className="flex gap-4">
      {socialLinks.map(({ id, icon, path }) => (
        <li key={id}>
          <Link
            to={path}
            target="_blank"
            className="h-10 w-10 flex items-center justify-center 
                       rounded-full bg-[rgba(255,255,255,.0999)] hover:bg-[rgba(255,255,255,.299)] 
                       text-xl transition"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};
