"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation"; 

const Navbarcomponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pageBackground =
    pathname === "/project"
      ? "bg-gray-200"
      : pathname === "/kiosk"
      ? "bg-blue-200"
      : pathname === "/about"
      ? "bg-green-200"
      : "bg-white"; // Default background

  return (
    <div className={` ${pageBackground}`}>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg">
        <Container>
          <Navbar.Brand href="/">SURL</Navbar.Brand>
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div
            className={`lg:flex lg:items-center lg:space-x-6 ${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full lg:w-auto`}
          >
            <Nav className="lg:flex lg:space-x-4 w-full lg:w-auto">
              <Link
                href="/"
                className={`block py-2 px-4 text-white ${
                  pathname === "/" ? "bg-blue-500 rounded-lg" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/project"
                className={`block py-2 px-4 text-white ${
                  pathname === "/project" ? "bg-blue-500 rounded-lg" : ""
                }`}
              >
                Projects
              </Link>
              <Link
                href="/kiosk"
                className={`block py-2 px-4 text-white ${
                  pathname === "/kiosk" ? "bg-blue-500 rounded-lg" : ""
                }`}
              >
                Kiosk
              </Link>
              <Link
                href="/about"
                className={`block py-2 px-4 text-white ${
                  pathname === "/about" ? "bg-blue-500 rounded-lg" : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block py-2 px-4 text-white ${
                  pathname === "/contact" ? "bg-blue-500 rounded-lg" : ""
                }`}
              >
                Contact
              </Link>
            </Nav>
          </div>
        </Container>
      </Navbar>

      
    </div>
  );
};

export default Navbarcomponent;
