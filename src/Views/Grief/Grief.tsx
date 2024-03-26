import GriefPic from '../../Assets/Grief.svg'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaidIcon from '@mui/icons-material/Paid';
import {Card, CardContent, Container, Box, Typography, Button, Grid } from "@mui/material"
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from "react-router-dom";
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

const contactAlt = ["Via mail", "Via Telefon"];

interface CourseFormData {
  name: string;
  email: string;
  phoneNumber: string;
  contactAlt: string;
//   message: string;
}



type Props = {
    firebaseArray: any
}


    export const Grief = ({firebaseArray}: Props) => {
        const [open, setOpen] = useState(false);
    
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
            "service_auwdq18",
            "template_17rbltb",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phoneNumber,
          contactAlt: formData.contactAlt,
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
            contactAlt: "",
        })
    }

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
            <Box className="length" sx={{width: '18rem', display: 'flex', flexDirection: 'column',alignItems: 'center',pl: '4rem', pr: '4rem', pt: '2rem', borderRight: { md: '1px solid black', xs: 'none' } }}>
                <AccessTimeIcon  />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", pt: '2rem' }}>Längd</Typography>
                <Typography variant="h6" sx={{ fontWeight: "normal", textAlign: "center" }}>120min</Typography>
            </Box>
            <Box className="place" sx={{width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center', pl: '4rem' , pr: '4rem' , pt: '2rem', borderRight: { md: '1px solid black', xs: 'none'} }}>
                <PlaceIcon />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", pt: '2rem' }}>Plats</Typography>
                <Typography variant="h6" sx={{ fontWeight: "normal", textAlign: "center" }}>Arvika</Typography>
            </Box>
            <Box className="date" sx={{width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center', pl: '4rem', pr: '4rem', pt: '2rem', borderRight: { md: '1px solid black', xs: 'none'} }}>
                <CalendarMonthIcon />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", pt: '2rem' }}>Datum</Typography>
                <Typography variant="h6" sx={{ fontWeight: "normal", textAlign: "center" }}>2023-10-11 Kl. 18</Typography>
            </Box>
            <Box className="participants" sx={{width: '18rem', display: 'flex', flexDirection: 
            'column', alignItems: 'center', pl: '4rem', pr: '4rem', pt: '2rem'  }}>
                <PaidIcon />
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left", pt: '2rem' }}>Pris / Deltagare</Typography>
                <Typography variant="h6" sx={{ fontWeight: "normal", textAlign: "center" }}>1500kr</Typography>
            </Box>
        </Container>

        {/*  Beskrivning av föreläsningen */}

        <Container disableGutters sx={{ display: 'flex', flexDirection: 'column', p: '2rem' }} >
            <Typography variant="h2" sx={{}} >Beskrivning</Typography>
            <Typography variant="h5" sx={{ fontWeight: "normal", mt: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc quis risus dictum faucibus. Nullam sed mauris et elit lacinia aliquet. Sed in nunc sed ipsum aliquam euismod. Donec in nunc quis risus dictum faucibus. Nullam sed mauris et elit lacinia aliquet. Sed in nunc sed ipsum aliquam euismod.</Typography>
            <Typography variant="h3" sx={{pt: '2rem'}} >Beskrivning</Typography>
            <Typography variant="h5" sx={{ fontWeight: "normal", mt: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc quis risus dictum faucibus. Nullam sed mauris et elit lacinia aliquet. Sed in nunc sed ipsum aliquam euismod. Donec in nunc quis risus dictum faucibus. Nullam sed mauris et elit lacinia aliquet. Sed in nunc sed ipsum aliquam euismod.</Typography>
        </Container>

        <Container disableGutters sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', ld: 'row', xl: 'row' } }}>

            {/*  Betalnings information start */}

            <Box sx={{ flexWrap: 'wrap', p: '2rem', marginTop: { xs: "1rem", md: "0" } }}>
                <Typography variant="h2" sx={{ pb: '2rem'}}>Betalning</Typography>
                <Typography variant="h5" sx={{ fontWeight: "normal" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc quis risus dictum faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc quis risus dictum faucibus</Typography>
            </Box>

            {/* Betalning slut */ }
                        
            
            {/*Här startar Kontakt formuläret */}
                
            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                sx={{
                width: "100%",
                height: "50rem",
                maxWidth: "40rem",
                margin: "0 auto",
                borderRadius: "4px",
                marginTop: { xs: "1rem", md: "0" },
                marginBottom: { xs: "18rem", md: "0" },
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

                <Typography variant="h3" sx={{ padding: { xs: "12px", md: "24px" } }}>
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
        <Container disableGutters sx={{ p: '2rem' }}>
        <Grid container spacing={3}> {/* Lägger till utrymme mellan varje Card */}
            <Grid item xs={12} sm={6} md={4}> {/* Justera gridstorleken för olika skärmstorlekar */}
                <Box width={1} display="flex" flexDirection="column" > {/* Ger Card en fast bredd */}
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Review 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            "Hej!
                            Jag deltog i sorgbearbetningskursen hos Morgan för ca 10 år sedan och det var en verklig ögonöppnare för mig. 
                            Kursen hjälpte mig med många olika saker men något jag uppmärksammade var att skilja mellan ursäkter och förlåtelse, 
                            något jag tidigare trodde var likvärdigt. Det var en stark och personlig upplevelse som har gett mig en djupare förståelse för detta. 
                            Med vänliga hälsningar, Ulf, 38 år"
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}> {/* Justera gridstorleken för olika skärmstorlekar */}
                <Box width={1}> {/* Ger Card en fast bredd */}
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Review 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Hej!
 Att gå sorgbearbetningskursen under åtta veckor var en verklig ögonöppnare för mig. En av de mest betydelsefulla förändringarna var att jag upplevde att andra människor hade blivit mer förstående och bättre, tills jag insåg att det egentligen var jag själv som hade förändrats – till det bättre. Det var en djupt personlig upptäckt som har haft en stor positiv inverkan på mitt liv. Med vänliga hälsningar, Carina, 50 år"
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}> {/* Justera gridstorleken för olika skärmstorlekar */}
                <Box width={1}> {/* Ger Card en fast bredd */}
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Review 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Hej!
Att få tillgång till så mycket kunskap under dessa veckor har verkligen förändrat mitt liv. Tidigare trodde jag på intellektuella kommentarer och klichéer från andra, och jag använde dem själv när jag kände mig osäker på vad eller hur jag skulle uttrycka mig. Men idag har jag fått rätt verktyg och är så tacksam. Jag tror att många fler skulle kunna dra nytta av att ha tillgång till bättre verktyg för kommunikation och förståelse. En annan viktig lärdom jag fick var att inte döma andra. Det har varit en viktig insikt som har hjälpt mig att vara mer öppen och förstående gentemot andra människor. Med vänliga hälsningar, Sten, 44 år"
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}> {/* Justera gridstorleken för olika skärmstorlekar */}
                <Box width={1}> {/* Ger Card en fast bredd */}
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Review 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Min ursprungliga anledning att gå sorgbearbetningskursen var att kunna stötta en närstående som hade drabbats av sorg. Men redan från början insåg jag att min egen sorg fanns och att det fanns mycket jag kunde lära mig. Ett av de mest betydelsefulla områdena för mig var att lära mig hur man möter någon i sorg utan att känna sig hjälplös eller osäker på vad man ska säga eller göra. Tidigare upplevde jag det som väldigt jobbigt när jag inte visste hur jag skulle bemöta någon som sörjde, så ibland undvek jag situationen genom att gå över gatan och låtsas att jag inte såg den andra personen. Idag har jag lärt mig vad jag kan göra för att stötta och vara närvarande för någon i sorg, men också vad jag bör undvika att göra. Med vänliga hälsningar, Kristina, 54 år"
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            {/* Repetera för varje recension */}
        </Grid>
    </Container>
    </Container>
    );
};