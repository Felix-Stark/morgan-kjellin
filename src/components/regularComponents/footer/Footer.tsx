import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Box, Grid, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: '#161616',
      color: '#CFCFCF',
      py: { xs: 5, sm: 3 },
      px: { xs: 2, sm: 6 },
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ textAlign: { xs: 'center', sm: 'center' } }}>
          <Grid item xs={12} sm={4} >
            <Typography variant="h5" sx={{ fontSize: 20, mb: 2 ,transition: 'color 0.3s ease-in-out',
                  '&:hover': {
                    color: '#BA1D37',
                    cursor: 'default',
                  } }}>
              Information
            </Typography>
            <Link to="/about" style={{ color: '#CFCFCF', textDecoration: 'none' }}>
              <Typography variant="body1" sx={{ mb: 2, transition: 'color 0.3s ease-in-out',
                    '&:hover': {
                      color: '#FFFFFF',
                      fontSize: '1.1rem',
                    }, }}>
                  Om mig
              </Typography>
              </Link>
            <Typography variant="body1" sx={{ mb: 4 , transition: 'color 0.3s ease-in-out',
                  '&:hover': {
                    color: '#FFFFFF',
                    fontSize: '1.1rem',
                  },}}>
              <Link to="/contact" style={{ color: '#CFCFCF', textDecoration: 'none' }}>
                Kontakt
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Stack sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: 26,  marginBottom: 1, fontWeight: "bold", transition: 'color 0.3s ease-in-out',
                  '&:hover': {
                    color: '#BA1D37',
                    cursor: 'default',
                  },}}>  
                Morgan Kjellin
              </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
                aria-label="facebook"
                sx={{ color: '#CFCFCF', transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: '#FFFFFF',
                  fontSize: '1.1rem',
                }, }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener"
                aria-label="linkedin"
                sx={{ color: '#CFCFCF', transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: '#FFFFFF',
                  fontSize: '1.1rem',
                }, }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener"
                aria-label="youtube"
                sx={{ color: '#CFCFCF', transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: '#FFFFFF',
                  fontSize: '1.1rem',
                }, }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
              <Typography variant="body2" sx={{'&:hover': {
                  cursor: 'default',
                },}}>
                © {new Date().getFullYear()}, All Rights Reserved
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" sx={{ fontSize: 20, mb: 2, transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: '#BA1D37',
                  cursor: 'default',
                }, }}>
              Kontakt
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: '#FFFFFF',
                  fontSize: '1.1rem',
                }, }}>
              <Link to="/contact" style={{ color: '#CFCFCF', textDecoration: 'none' }}>
                Email: kontakt@morgankjellin.com
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: '#FFFFFF',
                  fontSize: '1.1rem',
                }, }}>
              <Link to="/contact" style={{ color: '#CFCFCF', textDecoration: 'none' }}>
                Telefon: +46 123 456 789
              </Link>
            </Typography>
          </Grid>
     </Grid>
     </Container>   
     </Box>
     );
};
