import { Container, Paper, Box, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const AdminCreateActivity = () => {

    const theme = createTheme({
        components: {
          MuiInput: {
            styleOverrides: {
              root: {
                backgroundColor: "white", // Desired input background color
                "&:hover": {
                  backgroundColor: "white", // Desired input background color when hovered
                },
                "&.Mui-focused": {
                  backgroundColor: "white", // Desired input background color when focused
                },
                "&.Mui-error": {
                  backgroundColor: "white", // Desired input background color when error occurs
                },
              },
            },
          },
          MuiFilledInput: {
            styleOverrides: {
              root: {
                height: '2.5rem',
                padding: 0,
                backgroundColor: "white", // Desired input background color
                "&:hover": {
                  backgroundColor: "white", // Desired input background color when hovered
                },
                "&.Mui-focused": {
                  backgroundColor: "white", // Desired input background color when focused
                },
                "&.Mui-error": {
                  backgroundColor: "white", // Desired input background color when error occurs
                },
              },
            },
          },
        },
      });

    return(
        <Container disableGutters style={{ maxWidth: '100vw', width: '100%' }}>

                <Box sx={{ backgroundColor: 'grey', width: { md: '50rem' }, height: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', marginLeft: '2rem' }}>

                    <Typography variant='h1' color='#FFFFFF' margin='1rem'> Kalender </Typography>

                    <Box sx={{ width: '80%', height: '.1rem', position: 'absolute', bottom: '0', backgroundColor: '#FFFFFF' }}></Box>

                </Box>
                <ThemeProvider theme={theme}>
                    <Box height={'20rem'} sx={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '50rem', marginLeft: '2rem', backgroundColor: 'grey' }}>
                        <Typography variant='h2' marginTop='2rem' color='#FFFFFF'>Valt datum</Typography>
                        <TextField variant='filled' size='small'></TextField>
                    </Box>
                </ThemeProvider>
        </Container>
    )
}

export default AdminCreateActivity;