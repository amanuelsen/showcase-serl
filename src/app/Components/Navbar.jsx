'use client'

import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const Navbarcomponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const pageBackground =
    pathname === '/project'
      ? 'bg-gray-200'
      : pathname === '/kiosk'
        ? 'bg-blue-200'
        : pathname === '/about'
          ? 'bg-green-200'
          : 'bg-white'

  return (
    <div className={` ${pageBackground}`}>
      <Navbar bg='dark' variant='dark' expand='lg' className='shadow-lg'>
        <Container>
          <Navbar.Brand href='/'>ShowcaseSERL</Navbar.Brand>
          <div className='lg:hidden'>
            <button onClick={toggleMobileMenu} className='text-white'>
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div
            className={`lg:flex lg:items-center lg:space-x-6 ${
              isMobileMenuOpen ? 'block' : 'hidden'
            } w-full lg:w-auto`}
          >
            <Nav className='w-full lg:flex lg:w-auto lg:space-x-4'>
              <Link
                href='/'
                className={`block px-4 py-2 text-white ${
                  pathname === '/' ? 'rounded-lg bg-blue-800' : ''
                }`}
              >
                Home
              </Link>
              <Link
                href='/project'
                className={`block px-4 py-2 text-white ${
                  pathname === '/project' ? 'rounded-lg bg-blue-800' : ''
                }`}
              >
                Projects
              </Link>
              <Link
                href='/kiosk'
                className={`block px-4 py-2 text-white ${
                  pathname === '/kiosk' ? 'rounded-lg bg-blue-800' : ''
                }`}
              >
                Kiosk
              </Link>
              <Link
                href='/about'
                className={`block px-4 py-2 text-white ${
                  pathname === '/about' ? 'rounded-lg bg-blue-800' : ''
                }`}
              >
                About
              </Link>
              <Link
                href='/contact'
                className={`block px-4 py-2 text-white ${
                  pathname === '/contact' ? 'rounded-lg  bg-blue-800' : ''
                }`}
              >
                Contact
              </Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarcomponent
