'use client'
import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  CssBaseline,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import '@/app/globals.css'

const Navbar: React.FC = () => {
  return (
    <AppBar
      position='static'
      elevation={0}
      sx={{
        width: '80%',
        margin: 'auto',
        borderRadius: '30px',
        backgroundColor: 'transparent',
      }}
    >
      <Toolbar>
        <Typography variant='h6' component='div' flexGrow={1}>
          Logo
        </Typography>
        <Box display='flex' flexGrow={1} justifyContent='space-between'>
          <Link href='./' className='Link'>
            Home
          </Link>

          <Link href='./about' className='Link'>
            About
          </Link>
          <Link href='./contact' className='Link'>
            Contact
          </Link>
          <Link href='./blog' className='Link'>
            Blog
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
