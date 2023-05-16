import { Container, Paper, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminActivities = () => {

    const navigate = useNavigate();

    const gotoActivity = () => {
        navigate('/admin/kalender/skapa-aktivitet');
    }

    return(
        <Container disableGutters style={{ maxWidth: '100vw', width: '100%' }}>

            <Box sx={{ backgroundColor: 'grey', width: { md: '50rem' }, height: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', marginLeft: '2rem' }}>

                <Typography variant='h1' color='#FFFFFF' margin='1rem'> Kalender </Typography>

                <Box sx={{ width: '80%', height: '.1rem', position: 'absolute', bottom: '0', backgroundColor: '#FFFFFF' }}></Box>

            </Box>

            <Box height={'20rem'} sx={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '50rem', marginLeft: '2rem', backgroundColor: 'grey' }}>
                <Typography variant='h2' marginTop='2rem' color='#FFFFFF'>Datum</Typography>
                <Box width={'80%'} height={'3rem'} textAlign={'center'} sx={{backgroundColor: '#FFFFFF'}}> 14:xx? Föreläsning hos A? </Box>
                <Box width={'80%'} height={'3rem'} textAlign={'center'} margin={'1rem'} sx={{backgroundColor: '#FFFFFF'}}> 14:yy? Föreläsning hos B? </Box>
                <Button variant="contained" onClick={gotoActivity}
                    sx={{ 
                        backgroundColor: '#BA1D37',
                        width: '12rem',
                        height: '3rem',
                        '&:hover': {backgroundColor: '#BA1D60'}}}>
                        Skapa ny aktivitet
                </Button>
            </Box>

        </Container>
    )
}

export default AdminActivities;