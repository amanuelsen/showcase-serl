'use client'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-sky-400 px-6 py-12 font-sans tracking-wide'>
      <div className='flex flex-col items-center gap-6'>
        <ul className='flex flex-wrap justify-center gap-4 gap-x-7'>
          {/* LinkedIn Icon */}
          <li>
            <a
              href='https://www.linkedin.com/in/senai-amanuel-769016273/'
              className='text-xl hover:text-gray-400'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='inline h-7 w-7'
                viewBox='0 0 176 176'
              >
                <g data-name='Layer 2'>
                  <rect width='176' height='176' fill='#0077b5' rx='24' />
                  <path
                    fill='#fff'
                    d='M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zm82.64 34.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z'
                  />
                </g>
              </svg>
            </a>
          </li>

          {/* GitHub Icon */}
          <li>
            <a
              href='https://github.com/amanuelsen'
              className='text-xl hover:text-gray-400'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='inline h-7 w-7'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579v-2.175c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.494.997.108-.774.419-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.931 0-1.31.467-2.381 1.237-3.221-.124-.303-.536-1.521.118-3.166 0 0 1.008-.322 3.301 1.23a11.54 11.54 0 0 1 3.003-.404c1.02.005 2.046.137 3.003.404 2.293-1.552 3.3-1.23 3.3-1.23.656 1.645.243 2.863.12 3.166.77.84 1.236 1.91 1.236 3.221 0 4.61-2.803 5.624-5.475 5.921.43.37.814 1.096.814 2.213v3.285c0 .32.218.695.824.577C20.565 21.798 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
              </svg>
            </a>
          </li>
        </ul>

        <hr className='w-full border-gray-500' />

        <ul className='flex flex-wrap gap-4 gap-x-7'>
          <li>
            <a
              href='/'
              className='text-base text-gray-200 transition-all hover:underline'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='/project'
              className='text-base text-gray-200 transition-all hover:underline'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='/contact'
              className='text-base text-gray-200 transition-all hover:underline'
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
