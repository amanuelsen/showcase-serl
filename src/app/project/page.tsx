'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import data from '../lib/data'
import { Card, CardHeader } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Selecttype from '@/app/Components/Selecttype'
import Loadingspinner from '../Components/Loading'
function Projectss() {
  const [selectedCreator, setSelectedCreator] = useState('All')
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/profile')
    }
  }, [status, router])

  const filteredProjects = data.filter(
    (project) =>
      selectedCreator === 'All' ||
      project.who.toLowerCase() === selectedCreator.toLowerCase()
  )

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
    <div className='container mx-auto p-4'>
      <div className='mb-4'>
        <Selecttype
          selectedCreator={selectedCreator}
          setSelectedCreator={setSelectedCreator}
        />
      </div>

      <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        {filteredProjects.map((project) => (
          <Link href={`/project/${project.id}`} key={project.id}>
            <Card className='bg-slate-200 py-4'>
              <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
                <Image
                  alt={project.title}
                  width={200}
                  height={200}
                  src={project.screenshot}
                  className='h-64 w-full object-cover'
                />
                <p className='p-1 text-tiny font-bold uppercase'>
                  {project.description}
                </p>
                <small className='text-default-500'>
                  Made by: {project.who}
                </small>
                <h4 className='text-large font-bold'>{project.title}</h4>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projectss
