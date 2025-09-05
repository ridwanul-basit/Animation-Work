import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShowNavbar(false)
      } else {
        // scrolling up → show navbar
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <div
      className={`navbar bg-[#FCFB71] px-10 border-0 fixed top-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Left side (Logo + Login for small screens) */}
      <div className="navbar-start flex flex-col items-start">
        <a className="text-2xl text-[#5E362C] font-bold font-gloock" style={{ fontFamily: 'Gloock, serif' }}>Buenas Ondas</a>

        <div className="flex gap-2 mt-2 place-items-center">
          <a className="w-full lg:hidden">Log In</a>
          <div className="w-9 lg:hidden">
            <img
              className="rounded-full"
              alt="User"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      </div>

      {/* Center menu (hidden on small, visible on large) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl text-[#5E362C]">
          <li><a>About</a></li>
          <li><a>Blog</a></li>
          <li><a>Events</a></li>
          <li><a>Details</a></li>
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end">
        <div className="dropdown lg:hidden flex flex-col items-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-2 w-40 p-2 text-[#5E362C]"
          >
            <li><a>About</a></li>
            <li><a>Blog</a></li>
            <li><a>Events</a></li>
            <li><a>Details</a></li>
          </ul>

          <a className="btn btn-sm mt-2 w-full bg-[#5E362C] text-[#FCFB71] text-xl">Donate Now</a>
        </div>

        {/* Large screen: Login + Donate */}
        <div className="hidden lg:flex gap-3 lg:place-items-center">
          <a>Log In</a>
          <div className="w-7">
            <img
              className="rounded-full"
              alt="User"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
          <a className="btn bg-[#5E362C] text-[#FCFB71] text-xl rounded-3xl p-6">Donate Now</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
