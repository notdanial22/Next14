import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
} from '@mui/material'
import Link from 'next/link'

export default function Navbar() {
  return (
    <AppBar
      elevation={0}
      position='static'
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
