import {Card, CardContent, Container, Box, Typography, Button, Grid } from "@mui/material"
import CardMedia from '@mui/material/CardMedia';
// import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Place } from '@mui/icons-material';
import emailjs from "emailjs-com";
import { useState } from "react";
import {
    TextField,
    MenuItem,
    TextareaAutosize,
    useMediaQuery,
    Dialog, DialogTitle, DialogActions
  } from "@mui/material";
import { init } from 'emailjs-com';
import GriefPic from '../../Assets/Grief.svg'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaidIcon from '@mui/icons-material/Paid';

const contactAlt = ["Via mail", "Via Telefon"];
const courseAlt = ["Sorgbearbetning", "OptimumMind"];

interface CourseFormData {
  name: string;
  email: string;
  phoneNumber: string;
  contactAlt: string;
  courseAlt?: string;
//   message: string;
}



type Props = {
    firebaseArray: any
}


    export const Grief = ({firebaseArray}: Props) => {
        const [open, setOpen] = useState(false);
        const [isFullContent, setIsFullContent] = useState<Record<number, boolean>>({});

        const getContent = (content: any, index: number) => {
            const words = content.split(' ');
            if (isFullContent[index] === undefined || !isFullContent[index] && words.length > 61) {
                return words.slice(0, 61).join(' ') + '...';
            }
            return content;
        };

    
    useEffect(() => {
        window.scrollTo(0, 0)
    }
    , [])

    const width = useMediaQuery("(max-width:600px)") ? "xs" : "md";
    const [formData, setFormData] = useState<CourseFormData>({
        name: "",
        email: "",
        phoneNumber: "",
        contactAlt: "",
        courseAlt: "",
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
        console.log(formData);
        emailjs
        .send(
            "service_auwdql8",
            "template_692fpbo",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phoneNumber,
          contactAlt: formData.contactAlt,
          courseAlt: formData.courseAlt,
        //   message: formData.message,
        },
        "hbA17LMwp8EWGpDL2"
      )
      .then(
        (result) => {
          console.log('EmailJS result:', result.text);
          if( result.text == 'OK') {
            setOpen(true);
            clearForm();
          }
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          alert(error.text);
        }
      );
    };
    
    function clearForm() {
        setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            contactAlt: "",
            courseAlt: "",
        })
    }

    
    const heroRef: any  = useRef();

    const scrollToElement = (event: any) => {
    const targetId = event.currentTarget.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    };


    // Theme för kontaktformulär 

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
    
      const handleClose = () => {
        setOpen(false);
      }



    return (
        <Container disableGutters sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Container disableGutters sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, // Staplar elementen vertikalt på små skärmar och horisontellt på större
                flexWrap: 'wrap', 
                alignItems: 'center', 
                justifyContent: 'center', 
                pt: '2rem', 
                pb: '2rem' 
            }}>
                <CardMedia 
                    ref={heroRef} 
                    component={"img"} 
                    alt="Sorgföreläsningar" 
                    image={GriefPic} 
                    sx={{ 
                        width: { xs: '100%', sm: '25rem' }, // Full bredd på små skärmar, fast bredd på större
                        height: { xs: 'auto', sm: '20rem' } // Auto höjd på små skärmar för att behålla bildförhållandet, fast höjd på större
                    }} 
                />
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    marginLeft: { sm: '1rem', xs: 0 }, // Ingen marginal till vänster på små skärmar
                    width: { xs: '100%', sm: 'auto' } // Full bredd på små skärmar, auto bredd på större
                }}>
                    <Typography variant="h2" sx={{ 
                        fontWeight: "bold", 
                        textAlign: "left",
                        ml: '2rem', 
                        pt: '2rem',
                        fontSize: { xs: '1.8rem', sm: '2rem', md: '2rem' } // Anpassar storleken på texten för olika skärmstorlekar
                    }}>
                        { firebaseArray.length > 0 ? firebaseArray[9].title : ''}
                    </Typography>
                    <Typography variant="h3" sx={{ 
                        fontWeight: "bold", 
                        textAlign: "left", 
                        ml: '2rem', 
                        pt: '2rem',
                        fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.5rem' } // Anpassar storleken på texten för olika skärmstorlekar
                    }}>
                        { firebaseArray.length > 0 ? firebaseArray[9].content : ''}
                    </Typography>

                    <Button variant="contained" onClick={scrollToElement} data-target="scrollTarget"
                        sx={{ 
                            backgroundColor: '#BA1D37',
                            width: '10rem',
                            height: '3rem',
                            margin: '2rem ',
                            '&:hover': {backgroundColor: '#BA1D60'}
                        }}>
                        Anmäl dig här
                    </Button>
                </Box>
            </Container>

       {/*  Info om föreläsningen */}
        
        <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', borderBottom: '1px solid black', pb: '1rem' ,mb: '1rem'}}>
            <Box className="length" sx={{width: '18rem', display: 'flex', flexDirection: 'column',alignItems: 'center',pl: '4rem', pr: '4rem', pt: '2rem', borderRight: { md: '1px solid black', xs: 'none' } }}>
                <AccessTimeIcon  />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", pt: '1rem' }}>
                    {firebaseArray.length > 0 ? firebaseArray[12].title : ''}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "normal", textAlign: "center" }}>
                    {firebaseArray.length > 0 ? firebaseArray[12].content : ''}
                </Typography>
            </Box>
            <Box className="place" sx={{width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center', pl: '4rem' , pr: '4rem' , pt: '2rem', borderRight: { md: '1px solid black', xs: 'none'} }}>
                <PlaceIcon />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", pt: '1rem' }}>
                    {firebaseArray.length > 1 ? firebaseArray[13].title : ''}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "normal", textAlign: "center" }}>
                    {firebaseArray.length > 1 ? firebaseArray[13].content : ''}
                </Typography>
            </Box>
            <Box className="date" sx={{width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center', pl: '4rem', pr: '4rem', pt: '2rem', borderRight: { md: '1px solid black', xs: 'none'} }}>
                <CalendarMonthIcon />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", pt: '1rem' }}>
                    {firebaseArray.length > 2 ? firebaseArray[11].title : ''}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "normal", textAlign: "center" }}>
                    {firebaseArray.length > 2 ? firebaseArray[11].content : ''}
                </Typography>
            </Box>
            <Box className="participants" sx={{width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center', pl: '4rem', pr: '4rem', pt: '2rem'  }}>
                <PaidIcon />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", pt: '1rem' }}>
                    {firebaseArray.length > 3 ? firebaseArray[14].title : ''}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "normal", textAlign: "center" }}>
                    {firebaseArray.length > 3 ? firebaseArray[14].content : ''}
                </Typography>
            </Box>
        </Container>

        {/*  Beskrivning av föreläsningen */}

        <Container disableGutters sx={{ display: 'flex', flexDirection: 'column', p: '2rem' }} >
            <Typography variant="h2" sx={{}}>{firebaseArray.length > 0 ? firebaseArray[15].title : ''}</Typography>
            <Typography variant="h5" sx={{ fontWeight: "normal", mt: '2rem' }}>{firebaseArray.length > 0 ? firebaseArray[15].content : ''}</Typography>
        </Container>

        <Container disableGutters sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', ld: 'row', xl: 'row' } }}>

            {/*  Betalnings information start */}

            <Box sx={{ flexWrap: 'wrap', p: '2rem', marginTop: { xs: "1rem", md: "0" } }}>
                <Typography variant="h2" sx={{ pb: '2rem'}}>{firebaseArray.length > 0 ? firebaseArray[10].title : ''}</Typography>
                <Typography variant="h5" sx={{ fontWeight: "normal" }}>{firebaseArray.length > 0 ? firebaseArray[10].content : ''}</Typography>
            </Box>

            {/* Betalning slut */ }
                        
            
            {/*Här startar Kontakt formuläret */}
                
            <Box
                id="scrollTarget"
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                sx={{
                width: "100%",
                height: "40rem",
                maxWidth: "40rem",
                margin: "0 auto",
                borderRadius: "4px",
                marginTop: { xs: "1rem", md: "0" },
                marginBottom: { xs: "5rem", md: "0" },
                }}
            >
                <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                    height: "500px",
                    maxWidth: "700px",
                    backgroundColor: "primary.main",
                    color: "white",
                    borderRadius: width === "xs" ? 0 : 4,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    padding: { xs: "16px", md: "32px" },
                    width: { xs: "90%", md: "40%" },
                }}
                >
                <Typography variant="h2" sx={{ padding: { xs: "12px", md: "24px" } }}>
                    Anmälan till kurs!
                </Typography>

                <Typography variant="h4" sx={{fontSize: "16px"}}>
                    Vänligen fyll i de obligatoriska fälten så skickar vi en bekräftelse på din anmälan.
                </Typography>
                </Box>
                <ThemeProvider theme={theme}>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    alignItems="center"
                    sx={{
                    height: { xs: "100%", sm: "100%", md: "500px" },
                    maxWidth: "700px",
                    margin: "0 auto",
                    borderRadius: width === "xs" ? 0 : {
                        xs: 0,
                        md: "0 1rem 1rem 0",
                        lg: "0 1rem 1rem 0",
                        xl: "0 1rem 1rem 0",
                    },
                    width: { xs: "90%", md: "80%" },
                    }}
                >
                    <Box
                    component="form"
                    onSubmit={handleSubmit}
                    display="flex"
                    flexDirection="column"
                    sx={{
                        width: "100%",
                        height: "100%",
                        maxWidth: "800px",
                        margin: "0 auto",
                        borderRadius: width === "xs" ? 0 : {
                        xs: 0,
                        md: "0 1rem 1rem 0",
                        lg: "0 1rem 1rem 0",
                        xl: "0 1rem 1rem 0",
                        },
                        overflow: "hidden",
                    }}
                    >
                    <Box
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        sx={{ height: "80%" }}
                    >
                        <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            backgroundColor: "rgba(52, 52, 52)",
                            padding: 4,
                        }}
                        flexGrow={1}
                        >
                        <TextField
                            name="name"
                            autoComplete="name"
                            label="Namn"
                            variant="filled"
                            InputLabelProps={{
                            style: {
                                color: "black",
                                fontSize: "18px",
                                fontWeight: "bold",
                            },
                            }}
                            value={formData.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                            sx={{ backgroundColor: "rgba(0,0,0,0.10)" }}
                        />
                        <TextField
                            name="email"
                            label="E-post"
                            variant="filled"
                            InputLabelProps={{
                            style: {
                                color: "black",
                                fontSize: "18px",
                                fontWeight: "bold",
                            },
                            }}
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                            sx={{ backgroundColor: "rgba(0,0,0,0.10)" }}
                        />
                        <TextField
                            name="phoneNumber"
                            label="Telefon"
                            variant="filled"
                            InputLabelProps={{
                            style: {
                                color: "black",
                                fontSize: "18px",
                                fontWeight: "bold",
                            },
                            }}
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            sx={{ backgroundColor: "rgba(0,0,0,0.10)" }}
                        />
                        <TextField
                            name="contactAlt"
                            variant="filled"
                            select
                            label="Kontaktalternativ"
                            InputLabelProps={{
                            style: {
                                color: "black",
                                fontSize: "18px",
                                fontWeight: "bold",
                            },
                            }}
                            value={formData.contactAlt}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                            sx={{ backgroundColor: "rgba(0,0,0,0.10)", color: "white" }}
                        >
                            {contactAlt.map((contactAlt) => (
                            <MenuItem key={contactAlt} value={contactAlt}>
                                {contactAlt}
                            </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            name="courseAlt"
                            variant="filled"
                            select
                            label="Kursalternativ"
                            InputLabelProps={{
                                style: {
                                color: "black",
                                fontSize: "18px",
                                fontWeight: "bold",
                                },
                            }}
                            value={formData.courseAlt}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                            sx={{ backgroundColor: "rgba(0,0,0,0.10)", color: "white" }}
                            >
                            {courseAlt.map((option) => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))}
                            </TextField>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                        backgroundColor: "rgba(52, 52, 52)",
                        padding: 4,
                        height: "20%",
                        }}
                    >
                        <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: "#BA1D37",
                            fontWeight: 700,
                            borderRadius: 2,
                            py: 2,
                            px: 8,
                            '&:hover': {backgroundColor: '#BA1D60'}
                        }}
                        >
                        Skicka
                        </Button>
                    </Box>
                    </Box>
                </Box>
                </ThemeProvider>
            </Box>
            <Dialog open={ open } onClose={ handleClose }>
                <DialogTitle>Din kontakt förfrågan har skickats</DialogTitle>
                <DialogActions sx={{ display:"flex" , justifyContent:"center"}}>
                <Button onClick={ handleClose } sx={{ bgcolor: "red", color: "white" }}>Stäng</Button>
                </DialogActions>
            </Dialog>
            
            {/* Här slutar kontakt formuläret */}
                        
        </Container>
        {/* Här börjar recensionerna */}
        <Container disableGutters sx={{ p: '1rem' }}>
    <Grid container spacing={3}> {/* Lägger till utrymme mellan varje Card */}
        <Grid item xs={12} sm={6} md={3}>
            <Box width={1} display="flex" flexDirection="column" style={{height: '100%'}}>
                <Card elevation={5} style={{flexGrow: 1}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {firebaseArray.length > 0 ? firebaseArray[5].title : ''} 
                        </Typography>
                        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary" onClick={() => setIsFullContent(prevState => ({...prevState, [5]: !prevState[5]}))}>
                            {firebaseArray.length > 0 ? getContent(firebaseArray[5].content, 5) : ''}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Box width={1} display="flex" flexDirection="column" style={{height: '100%'}}>
                <Card elevation={5} style={{flexGrow: 1}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {firebaseArray.length > 0 ? firebaseArray[6].title : ''} 
                        </Typography>
                        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary" onClick={() => setIsFullContent(prevState => ({...prevState, [6]: !prevState[6]}))}>
                            {firebaseArray.length > 0 ? getContent(firebaseArray[6].content, 6) : ''}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Box width={1} display="flex" flexDirection="column" style={{height: '100%'}}>
                <Card elevation={5} style={{flexGrow: 1}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {firebaseArray.length > 0 ? firebaseArray[7].title : ''} 
                        </Typography>
                        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary" onClick={() => setIsFullContent(prevState => ({...prevState, [7]: !prevState[7]}))}>
                            {firebaseArray.length > 0 ? getContent(firebaseArray[7].content, 7) : ''}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Box width={1} display="flex" flexDirection="column" style={{height: '100%'}}>
                <Card elevation={5} style={{flexGrow: 1}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {firebaseArray.length > 0 ? firebaseArray[8].title : ''} 
                        </Typography>
                        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary" onClick={() => setIsFullContent(prevState => ({...prevState, [8]: !prevState[8]}))}>
                            {firebaseArray.length > 0 ? getContent(firebaseArray[8].content, 8) : ''}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    </Grid>
</Container>
    </Container>
    );
};
