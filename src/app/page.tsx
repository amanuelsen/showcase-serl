"use client"; // Required for client-side rendering
import React, { useState, useEffect } from "react";
import Link from "next/link";
import QRCode from "qrcode";
import data from "./data";
import Loadingspinner from "./Components/Loading";
import Navbarcomponent from "./Components/Navbar";
function Homepage() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [qrCodeUrls, setQrCodeUrls] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const generateQR = async (text: string, id: number) => {
    try {
      const url = await QRCode.toDataURL(text);
      setQrCodeUrls((prev) => ({
        ...prev,
        [id]: url,
      }));
    } catch (err) {
      console.error("QR Code generation error:", err);
    }
  };

  useEffect(() => {
    data.forEach((project) => {
      generateQR(project.url, project.id);
    });
  }, []);

  const filteredProjects = data.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery) ||
      project.metadata.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery)
      ) ||
      project.who.toLowerCase().includes(searchQuery)
  );
  
  const numberOfProjects = data.length; 

  return (
    <div>
      <Navbarcomponent />
      <div className="text-center mt-10"> 
        <h2 className="text-3xl font-bold text-blue-600">
          The total number of projects is {numberOfProjects}
        </h2>
      </div>

      <div className="container mx-auto p-4">
        <input
          type="text"
          placeholder="Search by title or tags..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border border-gray-400 rounded mb-4 w-full"
        />

        {loading ? (
          <Loadingspinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border rounded-lg overflow-hidden shadow-lg p-4 bg-white"
              >
                <Link href={`/project/${project.id}`}>
                  <img
                    src={project.screenshot}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">
                    {project.title}
                  </h2>
                </Link>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-500 mt-1">Made by: {project.who}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
