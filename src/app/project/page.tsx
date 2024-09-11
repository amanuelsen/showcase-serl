'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import QRCode from 'qrcode'
import Navbarcomp1 from '../Components/Navbar'
import data from '../lib/data'
import Loadingspinner from '../Components/Loading'

function Projectss() {
  const [searchQuery, setSearchQuery] = useState('')
  const [qrCodeUrls, setQrCodeUrls] = useState<{ [key: number]: string }>({})
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>(
    {}
  )

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase())
  }

  const generateQR = async (text: string, id: number) => {
    try {
      const url = await QRCode.toDataURL(text)
      setQrCodeUrls((prev) => ({
        ...prev,
        [id]: url,
      }))
    } catch (err) {
      console.error('QR Code generation error:', err)
    }
  }

  useEffect(() => {
    data.forEach((project) => {
      generateQR(project.url, project.id)
      setImageLoading((prev) => ({
        ...prev,
        [project.id]: true,
      }))
    })
  }, [])

  const handleImageLoad = (id: number) => {
    setImageLoading((prev) => ({
      ...prev,
      [id]: false,
    }))
  }

  const filteredProjects = data.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery) ||
      project.metadata.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery)
      ) ||
      project.who.toLowerCase().includes(searchQuery)
  )

  return (
    <div>
      <Navbarcomp1 />

      <div className='container mx-auto p-4'>
        <input
          type='text'
          placeholder='Search by title or tags...'
          value={searchQuery}
          onChange={handleSearchChange}
          className='mb-4 w-full rounded border border-gray-400 p-2'
        />

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className='overflow-hidden rounded-lg border bg-white p-4 shadow-lg'
            >
              <Link href={`/project/${project.id}`}>
                <div className='relative h-64 w-full'>
                  {imageLoading[project.id] && (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <Loadingspinner />
                    </div>
                  )}
                  <Image
                    src={project.screenshot}
                    alt={project.title}
                    width={400}
                    height={200}
                    className={`h-64 w-full object-cover transition-opacity duration-500 ${
                      imageLoading[project.id] ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoadingComplete={() => handleImageLoad(project.id)}
                  />
                </div>
                <h2 className='mb-2 mt-4 text-2xl font-semibold text-gray-800'>
                  {project.title}
                </h2>
              </Link>
              <p className='text-gray-600'>{project.description}</p>
              <p className='mt-1 text-sm text-gray-500'>
                Made by: {project.who}
              </p>

              <div className='mt-4'>
                {qrCodeUrls[project.id] ? (
                  <Image
                    width={200}
                    height={100}
                    src={qrCodeUrls[project.id]}
                    alt={`QR code for ${project.title}`}
                  />
                ) : (
                  <Loadingspinner />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projectss
