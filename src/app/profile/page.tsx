'use client'

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
            <p className='mb-2 text-gray-600'>Mail: {session.user?.email}</p>
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
              Log in with your Google or GitHub account to continue
            </p>

            {/* Sign in with Google */}
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                await signIn('google', { redirectTo: '/' })
              }}
            >
              <button
                type='submit'
                className='mb-4 flex transform items-center justify-center gap-3 rounded-lg bg-blue-800 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300'
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

            {/* Sign in with GitHub */}
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                await signIn('github', { redirectTo: '/' })
              }}
            >
              <button
                type='submit'
                className='flex transform items-center justify-center gap-3 rounded-lg bg-gray-800 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  width='24px'
                  height='24px'
                >
                  <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.09.58 1.24.82.72 1.22 1.88.87 2.34.66.07-.52.28-.87.51-1.07-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.58.82-2.13-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.33-.27 2.02-.27.69 0 1.38.09 2.02.27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.55.82 1.26.82 2.13 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.47 0 1.06-.01 1.92-.01 2.18 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z' />
                </svg>
                <span className='font-semibold'>Sign in with GitHub</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
