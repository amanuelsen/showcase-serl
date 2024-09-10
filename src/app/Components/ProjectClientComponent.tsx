"use client"; 

import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import { useRouter } from "next/navigation";

interface ProjectType {
  id: number;
  title: string;
  description: string;
  who: string;
  metadata: {
    tags: string[];
    type: string;
  };
  screenshot: string;
  url: string;
}

const ProjectClientComponent = ({ project }: { project: ProjectType }) => {
  const router = useRouter();
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  useEffect(() => {
    if (project.url) {
      QRCode.toDataURL(project.url)
        .then((url: string) => {
          setQrCodeUrl(url);
        })
        .catch((err: Error) => {
          console.error("Error generating QR code:", err);
        });
    }
  }, [project.url]);

  return (
    <div className="container mt-10 mb-10 mx-auto p-6 md:p-10 bg-slate-200 rounded-lg shadow-slate-700">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => router.back()}
          className="bg-slate-700 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out shadow-md"
        >
          Back
        </button>
      </div>

      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{project.description}</p>
        <p className="text-md text-gray-500 italic">Created by: {project.who}</p>
      </div>

      <div className="relative w-full h-full md:h-full overflow-hidden rounded-lg shadow-lg mb-8">
        <img
          src={project.screenshot}
          alt={project.title}
          className="object-cover w-full h-full transition-transform transform hover:scale-105 duration-300 ease-in-out"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Details:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Tags:</span> {project.metadata.tags.join(", ")}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Type:</span> {project.metadata.type}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-lg font-medium">
          URL:{" "}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {project.url}
          </a>
        </p>
      </div>

      {qrCodeUrl && (
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scan QR Code</h2>
          <img
            src={qrCodeUrl}
            alt={`QR code for ${project.title}`}
            className="w-32 h-32 md:w-40 md:h-40 mb-4 shadow-lg border border-gray-300 p-2 rounded-lg transition-transform transform hover:scale-110 duration-300 ease-in-out"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectClientComponent;
