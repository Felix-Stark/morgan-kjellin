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
    console.log(clickedDate);

    const gotoActivity = (activityTitle: string, activityTime: string, activityText: string, activityId: string) => {
        
        editActivityProps(activityTitle, activityTime, activityText, activityId);

        navigate('/admin/kalender/skapa-aktivitet');
    }

    return(
        <Container disableGutters style={{ maxWidth: '100vw', width: '100%' }}>

            <Box sx={{ backgroundColor: 'grey', width: { md: '50rem' }, height: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', marginLeft: '2rem' }}>

                <Typography variant='h1' color='#FFFFFF' margin='1rem'> Kalender </Typography>

                <Box sx={{ width: '80%', height: '.1rem', position: 'absolute', bottom: '0', backgroundColor: '#FFFFFF' }}></Box>

            </Box>

            <Box height={'20rem'} sx={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '50rem', marginLeft: '2rem', backgroundColor: 'grey' }}>
                <Typography variant='h2' marginTop='2rem' color='#FFFFFF'>{`${ clickedDate.currentYear }-`+`${ clickedDate.monthIndex + 1 }-`+`${ clickedDate.index }`}</Typography>
                {
                    activities.map((activity: Activities, i) => {

                        if (activity.date == `${ clickedDate.currentYear }-`+`${ clickedDate.monthIndex + 1 }-`+`${ clickedDate.index }`) {

                            return <Box key={i} onClick={ () => gotoActivity(activity.title, activity.time, activity.text, activity.id) } width={'80%'} height={'3rem'} textAlign={'center'} margin={'1rem'} sx={{backgroundColor: '#FFFFFF'}}> {activity.time} { activity.title } </Box>

                        }

                    })
                }
                <Button variant="contained" onClick={() => gotoActivity('', '', '', '')}
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