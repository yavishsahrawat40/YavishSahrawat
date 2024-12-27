import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const iconLink = [
  { icon: <FaGithub size={30} />, link: "https://github.com/yavishsahrawat40" },
  { icon: <FaLinkedin size={30} />, link: "https://www.linkedin.com/in/yavish-sahrawat-62017325/" },
  { icon: <FaInstagram size={30} />, link: "https://www.instagram.com/yavi_sahrawat/" },
]

const handdleIconCLick = (url) => {
  window.open(url, "_blank")
}

const Navbar = () => {
  return (
    <nav className='flex justify-between w-full h-60'>
      <div>
        <img className='w-20' src="/src/assets/Y.png" alt="" />
      </div>
      <div className='m-8 flex justify-center items-center gap-6 w-32 h-5'>
        {iconLink.map((icon, index) => (
          <div key={index} className='cursor-pointer' onClick={() => handdleIconCLick(icon.link)}>
            <div className=''></div>
            {icon.icon}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
