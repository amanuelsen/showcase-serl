'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useQRCode } from 'next-qrcode'

interface ProjectType {
  id: number
  title: string
  description: string
  who: string
  metadata: {
    tags: string[]
    type: string
  }
  screenshot: string
  url: string
}

const ProjectClientComponent = ({ project }: { project: ProjectType }) => {
  const router = useRouter()
  const { Canvas } = useQRCode()

  return (
    <div className='container mx-auto mb-10 mt-10 min-h-screen w-[90%] overflow-hidden rounded-lg bg-slate-200 p-6 shadow-slate-700 md:w-[70%] md:p-10 lg:w-[60%]'>
      <div className='mb-4 flex justify-end'>
        <button
          onClick={() => router.back()}
          className='rounded-full bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:bg-blue-600'
        >
          Back
        </button>
      </div>

      <div className='mt-6 text-center'>
        <h1 className='mb-4 text-4xl font-bold text-gray-800'>
          {project.title}
        </h1>
        <p className='mb-6 text-lg text-gray-600'>{project.description}</p>
        <p className='text-md italic text-gray-500'>
          Created by: {project.who}
        </p>
      </div>

      <div className='relative mb-8 h-[200px] w-full overflow-hidden rounded-lg shadow-lg md:h-full'>
        <Image
          src={project.screenshot}
          alt={project.title}
          width={400}
          height={200}
          className='h-full w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-105'
        />
      </div>

      <div className='mt-8'>
        <h2 className='mb-4 text-2xl font-semibold text-gray-800'>
          Project Details:
        </h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='flex items-center'>
            <p className='text-lg font-medium text-gray-700'>
              <span className='font-semibold'>Tags:</span>{' '}
              {project.metadata.tags.join(', ')}
            </p>
          </div>
          <div className='flex items-center'>
            <p className='text-lg font-medium text-gray-700'>
              <span className='font-semibold'>Type:</span>{' '}
              {project.metadata.type}
            </p>
          </div>
        </div>
      </div>

      <div className='mt-6'>
        <p className='text-lg font-medium'>
          URL:{' '}
          <a
            href={project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 underline hover:text-blue-800'
          >
            {project.url}
          </a>
        </p>
      </div>

      <div className='mt-8 flex flex-col items-center'>
        <h2 className='mb-4 text-2xl font-semibold text-gray-800'>
          Scan QR Code
        </h2>
        <Canvas
          text={project.url}
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
  )
}

export default ProjectClientComponent
