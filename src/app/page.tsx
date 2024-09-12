'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import data from './lib/data'
import Image from 'next/image'
import Loadingspinner from './Components/Loading'
function Homepage() {
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase())
  }

  const filteredProjects = data.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery) ||
      project.metadata.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery)
      ) ||
      project.who.toLowerCase().includes(searchQuery)
  )

  const numberOfProjects = data.length

  return (
    <div>
      <div className='mt-10 text-center'>
        <h2 className='text-3xl font-bold text-blue-600'>
          The total number of projects is {numberOfProjects}
        </h2>
      </div>

      <div className='container mx-auto p-4'>
        <input
          type='text'
          placeholder='Search by title or tags...'
          value={searchQuery}
          onChange={handleSearchChange}
          className='mb-4 w-full rounded border border-gray-400 p-2'
        />

        {loading ? (
          <Loadingspinner />
        ) : (
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className='overflow-hidden rounded-lg border bg-white p-4 shadow-lg'
              >
                <Link href={`/project/${project.id}`}>
                  <Image
                    width={400}
                    height={200}
                    src={project.screenshot}
                    alt={project.title}
                    className='h-64 w-full object-cover'
                  />
                  <h2 className='mb-2 mt-4 text-2xl font-semibold text-gray-800'>
                    {project.title}
                  </h2>
                </Link>
                <p className='text-gray-600'>{project.description}</p>
                <p className='mt-1 text-sm text-gray-500'>
                  Made by: {project.who}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Homepage
