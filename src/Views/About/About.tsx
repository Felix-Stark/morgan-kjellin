import { Container, Paper, Typography, Box, Grid, Link } from "@mui/material";
import React from "react";
import testP from '../../assets/profile-photo.jpg'



export const About = () => {
  return <Container  sx={{   width: {xs: "80%", md: "100%" },textAlign:"center" ,  paddingTop: '25px', }}>

    <Box sx={{ boxShadow: 3 , display: 'flex', marginBottom:"5vh",flexDirection:{ xs: "column-reverse", md: "row"}, justifyContent: 'space-between'}}>
      <Paper sx={{padding: "1rem", borderRadius:'0px', color:"white", bgcolor:"#342C39"}}>
        <Typography variant="h4" sx={{  marginBottom:"2vh"}}>Morgan Kjellin</Typography>
        <Typography variant="h6" sx={{ fontSize: '1em', margin: "auto"}}>
          Jag är föreläsare & entreprenör och har sedan 1995 delat med mig av min resa. 
          Med mina egna erfarenheter av att ändra mina tankar och mitt sätt att vara på, 
          så har jag kunnat hjälpa många andra personer.
        </Typography>
      </Paper>
      <Box component="img"sx={{bgcolor:'gray',maxWidth: { xs: "100%", md: 250 },}} alt="bild"src={testP}/>
    </Box>
    <Box sx={{boxShadow: 3 , display: 'flex', marginBottom:"5vh",  flexDirection:{ xs: "column", md: "row"}, justifyContent: 'space-between'}}>
      <Box component="img"sx={{bgcolor:'gray',maxWidth: { xs: "100%", md: 250 },}}alt="bild"src={testP}/>
      <Paper  sx={{padding:"1rem", borderRadius:'0px', bgcolor:"#342C39", color:"white"}}>
        <Typography variant="h4" sx={{  marginBottom:"2vh"}}>Före detta missbrukare</Typography>
        <Typography variant="h6" sx={{ fontSize: '1em', margin: "auto"}}>
          Under sina år som narkoman var Morgan med om flera tragiska händelser.
          Han delar med sig av historier från detta liv då han fick se sitt hem stå i lågor, 
          hur han blev avskedad från jobb och om goda relationer som gick förlorade under dessa år.
          Vännerna försökte förgäves att få honom att själv inse att han var illa ute.
          De sista åren kändes som att leva på en soptipp och det tog många år innan han kunde ta steget och få hjälp genom ett behandlingshem.
        </Typography>
      </Paper>
    </Box>
    <Paper elevation={3} sx={{padding: "1rem", borderRadius:'0px', color:"white", bgcolor:"#342C39", marginBottom:"2.5vh"}}>
      <Typography variant="h4" sx={{  marginBottom:"1rem"}}>Morgans egna ord</Typography>
      <Typography variant="h6" sx={{ fontSize: '1em', margin: "auto"}}>
        “Mina erfarenheter har fått mig att växa som människa. 
        Jag vill dela med mig av historien om vägen ur mitt missbruk och berätta om vilka verktyg och metoder som har hjälpt mig, så att jag nu kan hjälpa andra. 
        Jag borde många gånger ha tänkt först och gjort sen, men det gjorde jag inte då. Idag lever jag med eftertänksamhet och reflektion. 
        Jag tar hand om mig själv och för mig handlade det om att förändra sina vanor. Det är väldigt färdefulla erfarenheter och metoder jag vill dela med mig av.
        Förändring är möjligt för alla och det jag lärt mig har hjälpt mig att vara fortsatt drogfri även genom de kriser jag upplevt efter att jag blivit drogfri.”
       <Typography variant="h6" sx={{  marginBottom:"1rem", marginTop: "1rem"}}>“FÖRÄNDRING ÄR MÖJLIGT FÖR ALLA!”</Typography>
      </Typography>
    </Paper>
    {/* <Typography variant="body1" color="initial"></Typography>  */}
    <Link component="button" underline="hover" sx={{color:"black" }}>BOKA MIG FÖR EN FÖRELÄSNING!</Link>
  </Container>
};
