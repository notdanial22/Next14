import { Box, Typography } from '@mui/material'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <Box display='flex' flexDirection='row' justifyContent='space-between'>
      <Typography>Danial</Typography>
      <Box>
        <Typography>
          © {currentYear} Briksen Technologies. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}
