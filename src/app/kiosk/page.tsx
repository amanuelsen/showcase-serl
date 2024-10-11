'use client'

import { useState, useEffect, useRef } from 'react'
import data from '../lib/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Loadingspinner from '../Components/Loading'
import { useSession } from 'next-auth/react'
import { useQRCode } from 'next-qrcode'

const AutoCycleKiosk = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const cycleInterval = 5000
  const { Canvas } = useQRCode()
  const { data: session, status } = useSession()
  const router = useRouter()
  const kioskRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (status == 'unauthenticated') {
      router.push('/profile')
    }
  }, [status, router])

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

  const handleImageLoad = () => {
    setIsImageLoading(false)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      kioskRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const currentProject = data[currentProjectIndex]

  if (status == 'loading') {
    return <Loadingspinner />
  }

  if (!session) {
    return null
  }

  return (
    <div ref={kioskRef} className='flex h-full flex-col overflow-hidden'>
      <div className='mb-6 mt-6 flex flex-grow items-center justify-center'>
        <div className='relative flex h-full w-full max-w-3xl flex-col justify-between rounded-lg bg-slate-200 p-4 text-center shadow-lg'>
          <h1 className='m-2 text-3xl font-bold text-gray-800'>
            Kiosk Mode: Auto Cycle
          </h1>

          <div className='relative h-full flex-grow overflow-hidden rounded-lg shadow-md lg:h-[400px]'>
            <button
              onClick={handlePrevious}
              className='absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white shadow-lg transition-transform duration-300 ease-in-out hover:bg-gray-600'
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
              height={400}
              onLoadingComplete={handleImageLoad}
              className={`h-full w-full object-contain transition-opacity duration-1000 ease-in-out ${
                isImageLoading ? 'opacity-0' : 'opacity-100'
              }`}
            />

            <button
              onClick={handleNext}
              className='absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white shadow-lg transition-transform duration-300 ease-in-out hover:bg-gray-600'
              style={{ zIndex: 1 }}
            >
              &#10095;
            </button>
          </div>

          <div className='mt-4'>
            <h2 className='mb-2 text-2xl font-semibold text-gray-700'>
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

            <div className='mt-4 flex justify-center'>
              <Canvas
                text={currentProject.url}
                options={{
                  errorCorrectionLevel: 'M',
                  margin: 3,
                  scale: 4,
                  width: 200,
                  color: {
                    dark: '#010599FF',
                    light: '#FFBF60FF',
                  },
                }}
              />
            </div>
          </div>

          <button
            onClick={toggleFullscreen}
            className='mt-4 self-center rounded-full bg-blue-600 p-2 text-white shadow-lg transition-transform duration-300 ease-in-out hover:bg-blue-600'
          >
            {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AutoCycleKiosk
