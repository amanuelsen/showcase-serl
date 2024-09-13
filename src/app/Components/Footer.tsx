export default function Footer() {
  return (
    <footer className='bg-gray-800 py-8 text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold'>ShowcaseSERL</h2>
            <p className='mt-2 text-gray-400'>
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className='flex space-x-6'>
            <a href='/about' className='text-m hover:text-gray-500'>
              About
            </a>
            <a href='/projects' className='text-m hover:text-gray-500'>
              Projects
            </a>
            <a href='/contact' className='text-m hover:text-gray-500'>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
