'use client'
import React from 'react'
import { Box, Typography, Link, Container } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',

        backgroundColor: '#1976d2',
      }}
    >
      <Container
        maxWidth='lg'
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Typography variant='body4' color='text.secondary' align='center'>
          {'© '}
          {new Date().getFullYear()} {'All rights reserved.'}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <Link href='/about' color='inherit' sx={{ mx: 2 }}>
            About
          </Link>
          <Link href='/projects' color='inherit' sx={{ mx: 2 }}>
            Projects
          </Link>
          <Link href='/contact' color='inherit' sx={{ mx: 2 }}>
            Contact
          </Link>
        </Box>

        {/* Social Links */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <Link
            href='https://www.linkedin.com/in/senai-amanuel-769016273/'
            target='_blank'
            color='inherit'
            sx={{ mx: 2 }}
          >
            <LinkedInIcon fontSize='large' />
          </Link>
          <Link
            href='https://github.com/amanuelsen'
            target='_blank'
            color='inherit'
            sx={{ mx: 2 }}
          >
            <GitHubIcon fontSize='large' />
          </Link>
        </Box>
      </Container>
    </Box>
  )
}
