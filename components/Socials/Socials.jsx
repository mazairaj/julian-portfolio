import Link from "next/link"

import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa"
const socials = [
    { icon: <FaGithub />, name: "Github", path: "https://github.com/mazairaj" },
    { icon: <FaLinkedin />,  name: "LinkedIn", path: "https://www.linkedin.com/in/julian-mazaira-51386399/" },
    { icon: <FaYoutube />, name: "Youtube", path: "https://www.youtube.com/@SmarterD" },
    { icon: <FaInstagram />, name: "Instagram", path: "https://www.instagram.com/the_julianmaz/" }
]


const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => {
            return <Link 
                key={index} 
                href={social.path} 
                className={iconStyles}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit Julian Mazaira's ${social.name} profile`}
              >
                {social.icon}
            </Link>
        })}
    </div>
  )
}

export default Socials