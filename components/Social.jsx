import Link from "next/link";

import {FaGithub, FaFacebook, FaLinkedin,FaInstagram} from "react-icons/fa";

const socials= [
    {icon: <FaGithub/>, path:'https://github.com/hachi121'},
    {icon: <FaFacebook/>, path:'https://www.facebook.com/monangeloarabit'},
    {icon: <FaLinkedin/>, path:'https://www.linkedin.com/in/mon-angelo-arabit-b2a3592aa/'},
    {icon: <FaInstagram/>, path:'https://www.instagram.com/_itsmonday/'},
]

const Social = ({containerStyles, iconStyle}) => {
  return <div className={containerStyles}>
    {socials.map((item,index)=> {
        return <Link key={index} href={item.path} className={iconStyle}>
            {item.icon}
        </Link>
    })}
  </div>
}

export default Social
