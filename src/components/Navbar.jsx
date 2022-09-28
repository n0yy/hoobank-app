import { logo } from "../assets"
import { navLinks } from "../constants"

export default function Navbar() {
  return (
    <nav className="py-5 flex justify-between items-start">
        <div className="w-[82px] h-[36px]">
            <img src={logo} alt="Logo" />
        </div>
        <div className="text-dimWhite">
            <ul className="flex space-x-10 text-sm font-thin">
                {navLinks.map((link) => (
                    <a href=""><li key={link.id}>{link.title}</li></a>
                ))}
            </ul>
        </div>
    </nav>
  )
}
