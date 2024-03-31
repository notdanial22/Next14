import { Box, Button, Grid, TextField } from '@mui/material'
import Image from 'next/image'

export default function contactPage() {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box
          display='flex'
          position='relative'
          height='100%'
          sx={{
            width: '100%',
            height: {
              xs: '300px',
              sm: '350px',
              md: '100%',
              lg: '100%',
              xl: '100%',
            },
          }}
        >
          <Image src='/contact.png' alt='' fill sizes='fill' priority={false} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box display='flex' flexDirection='column'>
          <TextField
            variant='outlined'
            label='Name'
            fullWidth={true}
            InputProps={{
              style: {
                color: 'white',
                backgroundColor: '#2d2b42',
                borderColor: 'grey',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'gray',
                borderColor: 'grey',
              },
            }}
            sx={{ mt: 4 }}
          ></TextField>
          <TextField
            variant='outlined'
            label='Email address'
            fullWidth={true}
            InputProps={{
              style: {
                color: 'white',
                backgroundColor: '#2d2b42',
                borderColor: 'grey',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'gray',
                borderColor: 'grey',
              },
            }}
            sx={{ mt: 2 }}
          ></TextField>
          <TextField
            variant='outlined'
            label='Phone number (optional)'
            fullWidth={true}
            InputProps={{
              style: {
                color: 'white',
                backgroundColor: '#2d2b42',
                borderColor: 'grey',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'gray',
                borderColor: 'grey',
              },
            }}
            sx={{ mt: 2 }}
          ></TextField>
          <TextField
            variant='outlined'
            label='Description'
            fullWidth={true}
            multiline
            rows={6}
            InputProps={{
              style: {
                color: 'white',
                backgroundColor: '#2d2b42',
                borderColor: 'grey',
              },
            }}
            InputLabelProps={{
              style: {
                color: 'gray',
                borderColor: 'grey',
              },
            }}
            sx={{ mt: 2 }}
          ></TextField>
        </Box>
        <Box width='100%' mt={2}>
          <Button
            variant='contained'
            sx={{
              style: {
                color: 'primary',
              },
              width: '100%',
              padding: '10px',
            }}
          >
            Send
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
