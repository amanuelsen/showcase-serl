export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          {/* Top Section: Links and Brand */}
          <div className="flex flex-wrap justify-between items-center">
            {/* Left Side: Brand */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">ShowcaseSERL</h2>
              <p className="mt-2 text-gray-400">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
  
            <div className="flex space-x-6">
              <a href="/about" className="text-m hover:text-gray-500">
                About
              </a>
              <a href="/projects" className="text-m hover:text-gray-500">
                Projects
              </a>
              <a href="/contact" className="text-m hover:text-gray-500">
                Contact
              </a>
            </div>
          </div>
  
        
            
        </div>
      </footer>
    );
  }
  