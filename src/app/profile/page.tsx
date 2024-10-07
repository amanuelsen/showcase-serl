'use client' // Add this directive to force client-side rendering

import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function SignIn() {
  const { data: session } = useSession()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className='flex h-[700px] items-center justify-center overflow-hidden bg-gray-100'>
      <div className='m-5 flex flex-col items-start rounded-lg bg-white p-8 text-center shadow-lg'>
        {session ? (
          <>
            <h2 className='mb-6 text-2xl font-semibold text-gray-800'>
              Welcome back, {session.user?.name}!{' '}
            </h2>
            <h3 className='mb-3 text-xl font-semibold text-gray-500'>
              You can now navigate around
            </h3>
            {session.user?.image ? (
              <Image
                width={40}
                height={40}
                src={session.user?.image}
                alt='Profile Picture'
                className='mb-4 h-16 w-16 rounded-full'
              />
            ) : (
              <h1 className='bg-red-600'>No image</h1>
            )}
            <p className='mb-2 text-gray-600'>{session.user?.email}</p>
            <button
              onClick={handleSignOut}
              className='flex transform items-center justify-center gap-3 rounded-lg bg-red-600 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300'
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <h2 className='mb-6 text-2xl font-semibold text-gray-800'>
              Welcome Back!
            </h2>
            <p className='mb-8 text-gray-600'>
              Log in with your Google account to continue
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                await signIn('google', { redirectTo: '/' })
              }}
            >
              <button
                type='submit'
                className='flex transform items-center justify-center gap-3 rounded-lg bg-blue-800 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 48 48'
                  width='24px'
                  height='24px'
                  className='inline-block'
                >
                  <path
                    fill='#4285F4'
                    d='M24 9.5c2.29 0 4.35.83 5.97 2.19l4.46-4.46C31.98 4.79 28.21 3 24 3c-7.27 0-13.43 4.33-16.18 10.62l5.19 4.03C14.41 12.45 18.9 9.5 24 9.5z'
                  />
                  <path
                    fill='#34A853'
                    d='M24 44c4.16 0 7.64-1.38 10.19-3.75l-4.72-4.03c-1.43.97-3.25 1.55-5.47 1.55-4.53 0-8.38-3.06-9.75-7.2l-5.06 3.91C10.88 39.38 16.99 44 24 44z'
                  />
                  <path
                    fill='#FBBC05'
                    d='M41.8 24.5c0-1.18-.11-2.32-.31-3.43H24v7.07h10.3c-.44 2.22-1.74 4.06-3.66 5.29l4.72 4.03C39.76 34.64 41.8 29.89 41.8 24.5z'
                  />
                  <path
                    fill='#EA4335'
                    d='M14.25 28.57c-.74-2.22-.74-4.62 0-6.84l-5.19-4.03C6.04 21.38 5 24.61 5 28s1.04 6.62 4.06 9.27l5.19-3.91z'
                  />
                </svg>

                <span className='font-semibold'>Sign in with Google</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
