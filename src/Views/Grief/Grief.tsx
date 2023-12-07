import GriefPic from '../../Assets/Grief.svg'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaidIcon from '@mui/icons-material/Paid';
import { Container, Box, Typography, Button } from "@mui/material"
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Place } from '@mui/icons-material';
import emailjs from "emailjs-com";
import { useState } from "react";

const reasons = ["Via mail", "Via Telefon"];

interface CourseFormData {
  name: string;
  email: string;
  phoneNumber: string;
  reason: string;
//   message: string;
}



type Props = {
    firebaseArray: any
}


export const Grief = ({firebaseArray}: Props) => {

    
    useEffect(() => {
        window.scrollTo(0, 0)
    }
    , [])

    const [formData, setFormData] = useState<CourseFormData>({
        name: "",
        email: "",
        phoneNumber: "",
        reason: "",
        // message: "",
      });

    const handleChange = (
        event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
            ) => {
            const { name, value } = event.target;
            setFormData({
            ...formData,
            [name]: value,
            });
      };

    const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs
        .send(
            "service_auwdq18",
            "template_17rbltb",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phoneNumber,
          reason: formData.reason,
        //   message: formData.message,
        },
        "hbA17LMwp8EWGpDL2"
      )
      .then(
        (result) => {
          console.log(result.text);
          if( result.text == 'OK') {
            setOpen(true);
            clearForm();
          }
        },
        (error) => {
          alert(error.text);
          console.log(error.text);
        }
      );
    };
    
    function clearForm() {
        setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            reason: "",
        })
    }

    // Fortsätt med setOpen 
    

    const navigate = useNavigate();
    const heroRef: any  = useRef();

    const scrollToTop = () => {
        if (window.scrollY > 100) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    const scrollToElement = () => {
        const heroHeight = heroRef.current.offsetHeight;
        window.scrollTo({ top: heroHeight, behavior: "smooth" });
    }



    return (
        <Container disableGutters sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Container disableGutters sx={{ display: 'flex', flexDirection: 'row',flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', pt: '2rem', pb: '2rem' }}>
            <CardMedia ref={heroRef} component={"img"} alt="Sorgföreläsningar" image={GriefPic} sx={{ width: '25rem', height: '20rem' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '1rem' }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left",ml: '2rem', pt: '2rem' }}>Title</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", ml: '2rem', pt: '2rem' }}>Subtitle</Typography>

                <Button variant="contained" onClick={ () => navigate('/contact') }
                    sx={{ 
                        backgroundColor: '#BA1D37',
                        width: '10rem',
                        height: '3rem',
                        margin: '2rem ',
                        '&:hover': {backgroundColor: '#BA1D60'}}}>
                    Anmäl dig här
                </Button>
                <Typography variant="h5" onClick={ () => navigate('/contact')} sx={{ fontWeight: '200', textAlign: "left", ml: '2rem' }}> 5.0 (Recensioner)</Typography>
            </Box>
        </Container>

       {/*  Info om föreläsningen */}
        
        <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', borderBottom: '1px solid black', pb: '2rem' ,mb: '2rem'}}>
            <Box className="length" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' ,alignItems: 'center',pl: '4rem', pr: '4rem', borderRight: { md: '1px solid black', xs: 'none' } }}>
                <AccessTimeIcon />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", pt: '2rem' }}>Längd</Typography>
                <Typography variant="h6" sx={{ fontWeight: "normal", textAlign: "center" }}>120min</Typography>
            </Box>
            <Box className="place" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pl: '4rem' , pr: '4rem' , borderRight: { md: '1px solid black', xs: 'none'} }}>
                <PlaceIcon />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", pt: '2rem' }}>Plats</Typography>
                <Typography variant="h6" sx={{ fontWeight: "normal", textAlign: "center" }}>Arvika kommunhus</Typography>
            </Box>
            <Box className="date" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pl: '4rem', pr: '4rem', borderRight: { md: '1px solid black', xs: 'none'} }}>
                <CalendarMonthIcon />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", pt: '2rem' }}>Datum</Typography>
                <Typography variant="h6" sx={{ fontWeight: "normal", textAlign: "center" }}>2023-10-11 18:00</Typography>
            </Box>
            <Box className="participants" sx={{ display: 'flex', flexDirection: 
            'column', alignItems: 'center', pl: '4rem', pr: '4rem' }}>
                <PaidIcon />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", pt: '2rem' }}>Pris / Deltagare</Typography>
                <Typography variant="h6" sx={{ fontWeight: "normal", textAlign: "center" }}>1500kr</Typography>
            </Box>
        </Container>

        {/*  Beskrivning av föreläsningen */}

        <Container disableGutters sx={{display: 'flex', flexDirection: 'column', p: '2rem' }} >
            <Typography variant="h2" sx={{}} >Beskrivning</Typography>
            <Typography variant="h5" sx={{ fontWeight: "normal", mt: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc quis risus dictum faucibus. Nullam sed mauris et elit lacinia aliquet. Sed in nunc sed ipsum aliquam euismod. Donec in nunc quis risus dictum faucibus. Nullam sed mauris et elit lacinia aliquet. Sed in nunc sed ipsum aliquam euismod.</Typography>
            <Typography variant="h3" sx={{pt: '2rem'}} >Beskrivning</Typography>
            <Typography variant="h5" sx={{ fontWeight: "normal", mt: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc quis risus dictum faucibus. Nullam sed mauris et elit lacinia aliquet. Sed in nunc sed ipsum aliquam euismod. Donec in nunc quis risus dictum faucibus. Nullam sed mauris et elit lacinia aliquet. Sed in nunc sed ipsum aliquam euismod.</Typography>
        </Container>
        <Container disableGutters sx={{display: 'flex', flexDirection: 'column', p: '2rem' }} >
                <Typography variant="h2" sx={{}}>Betalning</Typography>
                <Typography variant="h5" sx={{ fontWeight: "normal" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc quis risus dictum faucibus.</Typography>
                
                {/* Kontakt formulär */}

        
        </Container>

    </Container>
    )
}
