import { logo } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <nav className="py-5 flex justify-between items-start relative">
        <div className="w-[82px] h-[36px]">
          <img src={logo} alt="Logo" />
        </div>
        <div className="text-dimWhite">
          <ul className="hidden ss:flex space-x-10 text-sm font-thin">
            {navLinks.map((link) => (
              <a href={`#${link.id}`}>
                <li key={link.id}>{link.title}</li>
              </a>
            ))}
          </ul>
          <button
            onClick={() => setMenuToggle(true)}
            className="ss:hidden block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Toggle | Overlay */}
      <div
        className={`absolute bg-black-gradient inset-0 w-full h-fit p-5 z-50 rounded-lg text-white min-h-screen ${
          menuToggle ? "translate-x-0" : "-translate-x-full"
        } transition duration-200`}
      >
        <div className="mb-7 flex items-center justify-between">
          <img src={logo} alt="Logo" className="w-[120px] h-[42px] " />
          <button onClick={() => setMenuToggle(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="space-x-10 text-sm font-thin">
          {navLinks.map((link) => (
            <a href={`#${link.id}`}>
              <li key={link.id}>{link.title}</li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}
