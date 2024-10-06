'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import data from './lib/data'
import Loadingspinner from './Components/Loading'
import Image from 'next/image'
import { Card, CardHeader, CardBody } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

function Homepage() {
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/profile')
    }
  }, [status, router])

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

  if (status === 'loading') {
    return (
      <div>
        <Loadingspinner />
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div>
      <div className='mt-10 text-center'>
        <h2 className='text-3xl font-bold text-gray-800'>
          The total number of projects is: {numberOfProjects}
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
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/project/${project.id}`}>
                <Card className='bg-slate-200 py-4'>
                  <CardHeader className='m-3 flex-col items-start justify-between px-4 pb-0 pt-2'>
                    <p className='text-tiny font-bold uppercase'>
                      {project.description}
                    </p>
                    <small className='text-default-500'>
                      {' '}
                      Made by: {project.who}
                    </small>
                    <h4 className='text-large font-bold'> {project.title}</h4>
                  </CardHeader>
                  <CardBody className='min-h-80 overflow-visible py-2'>
                    <Image
                      alt={project.title}
                      width={200}
                      height={200}
                      src={project.screenshot}
                      className='h-full w-full object-cover'
                    />
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Homepage
