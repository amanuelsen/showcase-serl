"use client";

import { useState, useEffect } from "react";
import Navbarcomponent from "../Components/Navbar";
import Button from "react-bootstrap/Button"; // For buttons
import data from "../data";


const AutoCycleKiosk = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const cycleInterval = 5000; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, cycleInterval);

    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const currentProject = data[currentProjectIndex];

  return (
    <div>
      <Navbarcomponent/>

      <div className="kiosk-container bg-gray-100 min-h-screen py-12 flex justify-center items-center relative">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full transition-transform duration-700 ease-in-out text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Kiosk Mode: Auto Cycle</h1>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-gray-800 hover:text-gray-500 p-2 bg-gray-700 rounded-full shadow-lg"
            style={{ zIndex: 1 }}
          >
            &#10094; 
          </button>

          <div className="relative overflow-hidden h-64 rounded-lg shadow-md">
            <img
              src={currentProject.screenshot}
              alt={currentProject.title}
              className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-gray-800 hover:text-gray-500 p-2 bg-gray-700 rounded-full shadow-lg"
            style={{ zIndex: 1 }}
          >
            &#10095; 
          </button>

          <h2 className="text-3xl font-semibold mt-6 text-blue-700">{currentProject.title}</h2>
          <p className="mt-2 text-gray-600">{currentProject.description}</p>
          <p className="text-sm text-gray-500">Made by: {currentProject.who}</p>

          <div className="project-details mt-4 text-left">
            <p className="text-lg font-medium">
              <strong>Tags:</strong> {currentProject.metadata.tags.join(", ")}
            </p>
            <p className="text-lg font-medium">
              <strong>Type:</strong> {currentProject.metadata.type}
            </p>
            <p className="mt-4 text-center">
              <Button href={currentProject.url} color="grey" target="_blank" variant="primary" size="lg">
                Visit Project
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoCycleKiosk;
