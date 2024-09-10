"use client";
import { useState, useEffect } from 'react';  // Import React hooks
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navbarcomponent from '../Components/Navbar';
import Loadingspinner from '../Components/Loading';

export default function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 500);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      <Navbarcomponent />
      <Container>
        {loading ? (
          <Loadingspinner />
        ) : (
          <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
            <h1 className="text-3xl text-gray-800 font-extrabold text-center">Contact us</h1>
            <form className="mt-8 space-y-4">
              <input type="text" placeholder="Name"
                     className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
              <input type="email" placeholder="Email"
                     className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
              <input type="text" placeholder="Subject"
                     className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
              <textarea placeholder="Message" rows="6"
                        className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
              <button type="button"
                      className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">Send</button>
            </form>
          </div>
        )}
      </Container>
    </div>
  );
}
