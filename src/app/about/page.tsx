import Image from 'next/image'
import styles from './about.module.css'
import { Box, Grid, Typography } from '@mui/material'

export default function aboutPage() {
  return (
    <Grid container mt={3}>
      <Grid item xs={12} md={6}>
        <Box display='flex' flexDirection='column'>
          <Typography color='primary' variant='h4'>
            About Agency
          </Typography>
          <Typography variant='h3' mt={2}>
            We create digital idea that are bigger,bolder, brave and better.
          </Typography>
          <Typography mt={3}>
            From conceptualization to execution, we embrace the spirit of
            adventure, always daring to dream bigger and think outside the box.
            Our mission is to inspire, disrupt, and transform, paving the way
            for a future where digital possibilities are limitless.
          </Typography>
          <Box
            display='flex'
            flexDirection='row'
            mt={4}
            justifyContent='space-between'
          >
            <Box display='flex' flexDirection='column'>
              <Typography variant='h4' color='primary'>
                {' '}
                10 K+
              </Typography>
              <Typography variant='subtitle2'>Years of experience</Typography>
            </Box>
            <Box display='flex' flexDirection='column'>
              <Typography variant='h4' color='primary'>
                {' '}
                234 K+
              </Typography>
              <Typography variant='subtitle2'>People reached</Typography>
            </Box>
            <Box display='flex' flexDirection='column'>
              <Typography variant='h4' color='primary'>
                {' '}
                5 K+
              </Typography>
              <Typography variant='subtitle2'>Services and plugins</Typography>
            </Box>
          </Box>
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
          <Image src='/about.png' alt='' fill sizes='fill' priority={false} />
        </Box>
      </Grid>
    </Grid>
  )
}
