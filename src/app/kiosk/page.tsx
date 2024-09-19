'use client'

import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import data from '../lib/data'
import Image from 'next/image'
import Loadingspinner from '../Components/Loading'

const AutoCycleKiosk = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isImageLoading, setIsImageLoading] = useState(true)
  const cycleInterval = 5000

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % data.length)
    }, cycleInterval)

    return () => clearInterval(intervalId)
  }, [])

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % data.length)
    setIsImageLoading(true)
  }

  const handlePrevious = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    )
    setIsImageLoading(true)
  }

  const currentProject = data[currentProjectIndex]

  const handleImageLoad = () => {
    setIsImageLoading(false)
  }

  return (
    <div className='flex min-h-screen flex-col overflow-hidden bg-gray-100'>
      <div className='mb-10 mt-10 flex flex-grow items-center justify-center'>
        <div className='relative flex h-[600px] w-full max-w-5xl flex-col justify-between rounded-lg bg-white p-6 text-center shadow-lg'>
          <h1 className='m-2 text-4xl font-bold text-gray-800'>
            Kiosk Mode: Auto Cycle
          </h1>

          <div className='relative h-[500px] flex-grow overflow-hidden rounded-lg shadow-md lg:h-[500px]'>
            <button
              onClick={handlePrevious}
              className='absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-3 text-white shadow-lg hover:bg-gray-600'
              style={{ zIndex: 1 }}
            >
              &#10094;
            </button>

            {isImageLoading && (
              <div className='absolute inset-0 flex items-center justify-center'>
                <Loadingspinner />
              </div>
            )}

            <Image
              src={currentProject.screenshot}
              alt={currentProject.title}
              width={400}
              height={200}
              onLoadingComplete={handleImageLoad}
              className={`h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                isImageLoading ? 'opacity-0' : 'opacity-100'
              }`}
            />

            <button
              onClick={handleNext}
              className='absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-3 text-white shadow-lg hover:bg-gray-600'
              style={{ zIndex: 1 }}
            >
              &#10095;
            </button>
          </div>

          <div className='mt-4'>
            <h2 className='mb-2 text-3xl font-semibold text-gray-700'>
              {currentProject.title}
            </h2>
            <p className='mb-2 text-gray-600'>{currentProject.description}</p>
            <p className='mb-4 text-sm text-gray-500'>
              Made by: {currentProject.who}
            </p>

            <div className='text-left text-lg font-medium'>
              <p>
                <strong>Tags:</strong> {currentProject.metadata.tags.join(', ')}
              </p>
              <p>
                <strong>Type:</strong> {currentProject.metadata.type}
              </p>
            </div>

            <div className='mt-6'>
              <Button
                href={currentProject.url}
                target='_blank'
                variant='primary'
                color='#1976d2'
                size='lg'
              >
                Visit Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutoCycleKiosk
