import { Container, Paper, Box, Typography, Button } from '@mui/material';

const AdminCreateActivity = () => {
    return(
        <Container disableGutters style={{ maxWidth: '100vw', width: '100%' }}>

            <Box sx={{ backgroundColor: 'grey', width: { md: '50rem' }, height: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', marginLeft: '2rem' }}>

                <Typography variant='h1' color='#FFFFFF' margin='1rem'> Kalender </Typography>

                <Box sx={{ width: '80%', height: '.1rem', position: 'absolute', bottom: '0', backgroundColor: '#FFFFFF' }}></Box>

            </Box>

            <Box height={'20rem'} sx={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '50rem', marginLeft: '2rem', backgroundColor: 'grey' }}>
                <Typography variant='h2' marginTop='2rem' color='#FFFFFF'>Valt datum</Typography>
                <p>Input fält osv</p>
            </Box>

        </Container>
    )
}

export default AdminCreateActivity;