"use client"; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import data from '../lib/data';
import Loadingspinner from '../Components/Loading';
import { useQRCode } from 'next-qrcode';
import Selecttype from '../Components/Selecttype';
import { Card, CardHeader, CardBody } from "@nextui-org/react";

function Projectss() {
  const [selectedCreator, setSelectedCreator] = useState(''); // State to track selected creator
  const { Canvas } = useQRCode();
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    data.forEach((project) => {
      setImageLoading((prev) => ({
        ...prev,
        [project.id]: true,
      }));
    });
  }, []);

  const handleImageLoad = (id: number) => {
    setImageLoading((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const filteredProjects = data.filter(
    (project) => selectedCreator === '' || project.who.toLowerCase() === selectedCreator.toLowerCase()
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Selecttype selectedCreator={selectedCreator} setSelectedCreator={setSelectedCreator} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {filteredProjects.map((project) => (
          <Link href={`/project/${project.id}`} key={project.id}>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Image
                  alt={project.title}
                  width={200}
                  height={200}
                  src={project.screenshot}
                  className='h-64 w-full object-cover'
                />
                <p className="text-tiny p-1 uppercase font-bold">{project.description}</p>
                <small className="text-default-500"> Made by: {project.who}</small>
                <h4 className="font-bold text-large"> {project.title}</h4>
              </CardHeader>
              <CardBody className="overflow-visible flex justify-center items-center py-2">
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
  );
}

export default Projectss;
