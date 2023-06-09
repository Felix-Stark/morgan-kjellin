import { Container, Paper, Box, Typography, Button } from '@mui/material';
import { useNavigate, useOutletContext } from 'react-router-dom';

type Activities = {
    date: string;
    title: string;
    text: string;
    time: string;
    id: string;
}

type ClickedDate = {
    currentYear: number;
    monthIndex: number;
    index: number;
  }
  
type OutletProps = {
    activities: Activities[];
    activityProps: (currentYear: number, monthIndex: number, index: number) => void;
    clickedDate: ClickedDate;
    editActivityProps: (activityTitle: string, activityTime: string, activityText: string, activityId: string) => void;
}

const AdminActivities = () => {

    const navigate = useNavigate();

    const {activities, clickedDate, editActivityProps}: OutletProps = useOutletContext<OutletProps>();


    const gotoActivity = (activityTitle: string, activityTime: string, activityText: string, activityId: string) => {
        
        editActivityProps(activityTitle, activityTime, activityText, activityId);

        navigate('/admin/kalender/skapa-aktivitet');
    }

    return(
        <Container disableGutters style={{ maxWidth: '100vw', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Box sx={{ backgroundColor: '#342C39', width: { md: '50rem' }, height: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>

                <Typography variant='h1' color='#FFFFFF' margin='2rem'> Kalender </Typography>

                <Box sx={{ width: '46rem', height: '.1rem', position: 'absolute', bottom: '-.5rem', zIndex: '5', backgroundColor: '#FFFFFF' }}></Box>

            </Box>

            <Box minHeight={'40rem'} sx={{ display: 'flex', position: 'relative', alignItems: 'center', flexDirection: 'column', width: '50rem', backgroundColor: '#342C39' }}>
                <Typography variant='h3' marginTop='3rem' color='#FFFFFF'>{`Här visas dina aktiviteter för ${ clickedDate.currentYear }-`+`${ clickedDate.monthIndex + 1 }-`+`${ clickedDate.index }`}</Typography>
                <Typography variant='h5' marginBottom='2rem' color='#FFFFFF'>(klicka för att läsa mer)</Typography>
                {
                    activities.map((activity: Activities, i) => {

                        if (activity.date == `${ clickedDate.currentYear }-`+`${ clickedDate.monthIndex + 1 }-`+`${ clickedDate.index }`) {

                            return <Box key={i} onClick={ () => gotoActivity(activity.title, activity.time, activity.text, activity.id) } width={'80%'} height={'3rem'} textAlign={'center'} margin={'1rem'} sx={{display: 'flex', textAlign: 'start', alignItems: 'center', backgroundColor: '#F6F6F6', borderRadius: '.3rem', '&:hover': { cursor: 'pointer'}}}>
                                <Typography sx={{ width: '50%', paddingLeft: '4rem', fontWeight: '600' }}>Tid: {activity.time}</Typography>
                                <Typography sx={{ width: '50%', fontWeight: '600' }}>Aktivitet: { activity.title.substring(0, 25) + '...' }</Typography>
                            </Box>

                        }

                    })
                }
                <Button variant="contained" onClick={() => gotoActivity('', '', '', '')}
                    sx={{ 
                        backgroundColor: '#BA1D37',
                        width: '12rem',
                        height: '3rem',
                        margin: '4rem',
                        '&:hover': {backgroundColor: '#BA1D60'}}}>
                        Skapa ny aktivitet
                </Button>
            </Box>

        </Container>
    )
}

export default AdminActivities;