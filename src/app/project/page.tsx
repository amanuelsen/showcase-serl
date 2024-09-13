'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import data from '../lib/data'
import { useQRCode } from 'next-qrcode'
import Selecttype from '../Components/Selecttype'
import { Card, CardHeader, CardBody } from '@nextui-org/react'

function Projectss() {
  const [selectedCreator, setSelectedCreator] = useState('') // State to track selected creator
  const { Canvas } = useQRCode()

  const filteredProjects = data.filter(
    (project) =>
      selectedCreator === '' ||
      project.who.toLowerCase() === selectedCreator.toLowerCase()
  )

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
            <Card className='py-4'>
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
                  {' '}
                  Made by: {project.who}
                </small>
                <h4 className='text-large font-bold'> {project.title}</h4>
              </CardHeader>
              <CardBody className='flex items-center justify-center overflow-visible py-2'>
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
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projectss
