'use client'
import React from 'react'
import { Box, Typography, Link, Container } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'blue'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth='lg'>
        <Typography variant='h6' align='center' gutterBottom>
          ShowcaseSERL
        </Typography>
        <Typography variant='body2' color='text.secondary' align='center'>
          {'© '}
          {new Date().getFullYear()} {'All rights reserved.'}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
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
      </Container>
    </Box>
  )
}
