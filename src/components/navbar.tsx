'use client'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  Drawer,
  ListItem,
  List,
} from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar() {
  const pathName = usePathname()
  //temporary
  const session = true
  const isAdmin = true

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }
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
        {isMobile ? (
          <>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='right'
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List className={`${styles.drawer}`}>
                <ListItem>
                  <Link
                    href='./'
                    className={`${styles.Link} ${
                      pathName === '/' ? styles.active : ''
                    }`}
                  >
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href='./about'
                    className={`${styles.Link} ${
                      pathName === '/about' ? styles.active : ''
                    }`}
                  >
                    About
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href='./contact'
                    className={`${styles.Link} ${
                      pathName === '/contact' ? styles.active : ''
                    }`}
                  >
                    Contact
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href='./blog'
                    className={`${styles.Link} ${
                      pathName === '/blog' ? styles.active : ''
                    }`}
                  >
                    Blog
                  </Link>
                </ListItem>
                <ListItem>
                  {session ? (
                    <>
                      {isAdmin && (
                        <Link
                          href='./admin'
                          className={`${styles.Link}  ${
                            pathName === '/admin' ? styles.active : ''
                          }`}
                        >
                          Admin
                        </Link>
                      )}
                      <button className={`${styles.logout}`}>Log out</button>
                    </>
                  ) : (
                    <>
                      {
                        <Link
                          href='./login'
                          className={`${styles.Link}
                 ${pathName === '/login' ? styles.active : ''}`}
                        >
                          Login
                        </Link>
                      }
                    </>
                  )}
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <>
            <Box display='flex' flexGrow={1} justifyContent='space-between'>
              <Link
                href='./'
                className={`${styles.Link} ${
                  pathName === '/' ? styles.active : ''
                }`}
              >
                Home
              </Link>
              <Link
                href='./about'
                className={`${styles.Link} ${
                  pathName === '/about' ? styles.active : ''
                }`}
              >
                About
              </Link>
              <Link
                href='./contact'
                className={`${styles.Link} ${
                  pathName === '/contact' ? styles.active : ''
                }`}
              >
                Contact
              </Link>
              <Link
                href='./blog'
                className={`${styles.Link} ${
                  pathName === '/blog' ? styles.active : ''
                }`}
              >
                Blog
              </Link>
              {session ? (
                <>
                  {isAdmin && (
                    <Link
                      href='./admin'
                      className={`${styles.Link}  ${
                        pathName === '/admin' ? styles.active : ''
                      }`}
                    >
                      Admin
                    </Link>
                  )}
                  <button className={`${styles.logout}`}>Log out</button>
                </>
              ) : (
                <>
                  {
                    <Link
                      href='./login'
                      className={`${styles.Link}
                 ${pathName === '/login' ? styles.active : ''}`}
                    >
                      Login
                    </Link>
                  }
                </>
              )}
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
