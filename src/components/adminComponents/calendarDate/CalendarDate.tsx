import { Container, Paper, Box, Typography, Button } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


type Props = {

    index: number;
    monthIndex: number;
    currentYear: number;
    found: boolean;

}

type Activities = {
    date: string;
    title: string;
    text: string;
    time: string;
    id: string;
}

type OutletProps = {
    activities: Activities[];
    activityProps: (currentYear: number, monthIndex: number, index: number) => void;
}

const CalendarDate = ({ index, monthIndex, currentYear, found }: Props) => {

    const [ dateColor, setDateColor ] = useState<string>();

    const navigate = useNavigate();
    const getDay = new Date().getDate();
    const getMonth = new Date().getMonth();
    const getYear = new Date().getFullYear();

    const {activityProps}: OutletProps = useOutletContext<OutletProps>();

    const gotoActivities = (currentYear: number, monthIndex: number, index: number) => {
        activityProps(currentYear, monthIndex, index);
        navigate('aktiviteter');
    }


    useEffect(() => {

        found ? setDateColor('red') : setDateColor('#F6F6F6');

    }, [found]);

    return(
        <Container disableGutters sx={{ width: '5.5rem', height: '5.5rem', margin: '.2rem' }}>

            {

                index == getDay && getMonth == monthIndex && getYear == currentYear && !found ?

                <Box onClick={() => gotoActivities(currentYear, monthIndex, index)} sx={{ backgroundColor: '#4169e1', width: '5.5rem', height: '5.5rem', borderRadius: '.3rem', '&:hover': { cursor: 'pointer'} }}>
                
                    <Typography sx={{fontSize: '1.8rem', margin: '0 .4rem', color: '#F6F6F6'}}>{index}</Typography>

                </Box>

                :

                <Box onClick={() => gotoActivities(currentYear, monthIndex, index)} sx={{ backgroundColor: `${ dateColor }`, width: '5.5rem', height: '5.5rem', borderRadius: '.3rem', '&:hover': { cursor: 'pointer'} }}>
                    {
                        index == getDay && getMonth == monthIndex && getYear == currentYear ? <Typography sx={{fontSize: '1.8rem', margin: '0 .4rem', color: found ? '#F6F6F6' : '#1E1E1E'}}>{index}</Typography> : <Typography sx={{ color: found ? '#F6F6F6' : '#1E1E1E', fontWeight: '600', fontSize: '1.2rem', margin: '0 .4rem'}}>{index}</Typography>
                    }
                    {
                        found ?
                        <Typography sx={{color: '#F6F6F6', fontWeight: '600', fontSize: '1rem', textAlign: 'center'}}>Aktiviteter</Typography>
                        :
                        ''
                    }
                </Box>

            }


        </Container>

    )
}

export default CalendarDate;