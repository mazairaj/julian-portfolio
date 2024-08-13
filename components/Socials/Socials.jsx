import Link from "next/link"

import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa"
const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaInstagram />, path: "" }
]


const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => {
            return <Link key={index} href={social.path} className={iconStyles}>
                {social.icon}
            </Link>
        })}
    </div>
  )
}

export default Socials