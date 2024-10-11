'use client'
import { useState, useEffect } from 'react' // Import React hooks
import Container from 'react-bootstrap/Container'
import Loadingspinner from '../Components/Loading'

export default function Contact() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Container>
        {loading ? (
          <Loadingspinner />
        ) : (
          <div className='m-3 mx-auto max-w-xl rounded-lg bg-white p-4 font-[sans-serif]'>
            <h1 className='text-center text-3xl font-extrabold text-gray-800'>
              Contact us
            </h1>
            <form className='mt-8 space-y-4'>
              <input
                type='text'
                placeholder='Name'
                className='w-full rounded-md bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-blue-500 focus:bg-transparent'
              />
              <input
                type='email'
                placeholder='Email'
                className='w-full rounded-md bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-blue-500 focus:bg-transparent'
              />
              <input
                type='text'
                placeholder='Subject'
                className='w-full rounded-md bg-gray-100 px-4 py-3 text-sm text-gray-800 outline-blue-500 focus:bg-transparent'
              />
              <textarea
                placeholder='Message'
                rows='6'
                className='w-full rounded-md bg-gray-100 px-4 pt-3 text-sm text-gray-800 outline-blue-500 focus:bg-transparent'
              ></textarea>
              <button
                type='button'
                className='w-full rounded-md bg-blue-500 px-4 py-3 text-sm tracking-wide text-white hover:bg-blue-600'
              >
                Send
              </button>
            </form>
          </div>
        )}
      </Container>
    </div>
  )
}
