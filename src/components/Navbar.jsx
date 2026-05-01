import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Tech', href: '#technologies' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const iconLink = [
  { icon: <FaGithub size={22} />, link: "https://github.com/yavishsahrawat40", label: "GitHub" },
  { icon: <FaLinkedin size={22} />, link: "https://www.linkedin.com/in/yavish-sahrawat-62017325/", label: "LinkedIn" },
  { icon: <FaInstagram size={22} />, link: "https://www.instagram.com/yavi_sahrawat/", label: "Instagram" },
  { icon: <SiLeetcode size={22} />, link: "https://leetcode.com/u/nIdq9yhWKn/", label: "LeetCode" },
]

const handleIconClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer")
}

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 -mx-5 flex min-h-20 items-center justify-between border-b border-white/10 bg-slate-950/75 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8">
      <a href="#" className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-lg font-bold text-cyan-100 shadow-lg shadow-cyan-950/20 backdrop-blur">
        YS
      </a>
      <div className="hidden items-center gap-5 lg:flex">
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-neutral-300 transition hover:text-cyan-200">
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3">
        {iconLink.map((item) => (
          <button
            key={item.label}
            type="button"
            aria-label={`Open ${item.label}`}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-neutral-200 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-200"
            onClick={() => handleIconClick(item.link)}>
            {item.icon}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
