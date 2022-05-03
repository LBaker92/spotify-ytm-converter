import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography variant='h1'
      align='center'
      component='h1'>
        404
        <Typography variant='h3'
        align='center'
        component='h3'
        paragraph>
          NOT FOUND
        </Typography>
      </Typography>
      
      <Link to='/'>Return the the main page</Link>
    </Box>
  )
}