import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Footer from '@/components/footer'

export default function homePage() {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography variant='h1'>Creative Thoughts Agency.</Typography>
          <br />
          <Typography>
            Discover the harmony of nature's symphony as gentle streams serenade
            the forest floor, inviting you to immerse yourself in tranquility.{' '}
          </Typography>
          <Box display='flex' flexDirection='row'>
            <Button
              variant='contained'
              disableElevation
              sx={{ marginRight: '2px' }}
            >
              Learn more
            </Button>
            <Button
              variant='contained'
              color='secondary'
              disableElevation
              disableRipple
              disableTouchRipple
            >
              Contact
            </Button>
          </Box>
          <Image src='/brands.png' alt='' width={480} height={50} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          display='flex'
          position='relative'
          height='100%'
          sx={{
            height: {
              xs: '300px',
              sm: '350px',
              md: '100%',
              lg: '100%',
              xl: '100%',
            },
            width: '100%',
          }}
        >
          <Image src='/hero.gif' alt='' fill sizes='fill' priority={false} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}
