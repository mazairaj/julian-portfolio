import Link from "next/link"

import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa"
const socials = [
    { icon: <FaGithub />, path: "https://github.com/mazairaj" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/julian-mazaira-51386399/" },
    { icon: <FaYoutube />, path: "https://www.youtube.com/@SmarterD" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/the_julianmaz/" }
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
              >
                {social.icon}
            </Link>
        })}
    </div>
  )
}

export default Socials