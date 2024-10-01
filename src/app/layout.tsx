import React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './ui/globals.css'
import { Box } from '@mui/material'
import Navbarcomp from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

import Footer from './Components/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} flex-grow ${geistMono.variable} antialiased`}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            background: '#51e2f5',
          }}
        >
          <Box component='main' sx={{ flexGrow: 1 }}>
            <Navbarcomp />
            {children}
          </Box>
          <Footer />
        </Box>
      </body>
    </html>
  )
}
