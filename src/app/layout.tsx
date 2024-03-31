'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    secondary: {
      main: '#ffffff',
    },
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang='en'>
        <body className={inter.className}>
          <Navbar />
          <br />
          <div className='child-container'>{children}</div>
        </body>
      </html>
    </ThemeProvider>
  )
}
