import React from 'react';
import { Typography, Box } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '6rem',
          fontWeight: 'bold',
          color: 'text.primary',
          mb: 2,
        }}
      >
        404
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.5rem',
          color: 'text.secondary',
        }}
      >
        The page you are looking for does not exist.
      </Typography>
    </Box>
  );
};

export default NotFound;