import workHero from '../../assets/work-hero.svg';
import workHands from '../../assets/work-hands.svg';
import workThinking from '../../assets/work-thinking.svg';
import scrollArrow from '../../assets/work-scrollArrow.svg';
import workHugging from '../../assets/work-hugging.svg';
import workFamily from '../../assets/work-family.svg';
import workManyHands from '../../assets/work-manyHands.svg';
import workHappy from '../../assets/work-happy.svg';
import workSad from '../../assets/work-sad.svg';
import { Container, Paper, Box, Typography, Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export const Work = () => {

  const navigate = useNavigate();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (

      <Container disableGutters style={{ maxWidth: '100vw', width: '100%', margin: "0" }}>

        <CardMedia image={ workHero } 
        style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "100vh", position: 'relative' }}>

          <Typography variant="h1" sx={{ color: '#FFFFFF', margin: '2rem', fontSize: { xs: '4rem', md: '5rem' } }}>Arbeta med mig</Typography>
          <Button variant="contained"
          onClick={ () => navigate('/contact') }
          sx={{ 
            backgroundColor: '#BA1D37',
            width: {xs: '16rem', md: '20rem'},
            height: { xs: '4rem', md: '5rem'},
            margin: '2rem',
            fontSize: {xs: '20px', md: '24px'},
            '&:hover': {backgroundColor: '#BA1D60'}}}>
            Kontakt
          </Button>

          <CardMedia image={ scrollArrow } style={{width: '4rem', height: '4rem', position: 'absolute', bottom: '5rem'}}></CardMedia>

        </CardMedia>

        <Container disableGutters style={{ display: 'flex', flexWrap: 'wrap', minWidth: '100%', margin: "0", position: 'relative'}}>

          <Button variant="contained" id='#back-to-top-anchor' onClick={() => handleClick} sx={{ zIndex: '1', width: {xs: '4rem', md: '5rem'}, height: {xs: '4rem', md: '5rem'}, borderRadius: '50%', backgroundColor: '#BA1D37', position: 'fixed',
           margin: '5rem', bottom: '-2rem', right: '-2rem', '&:hover': {backgroundColor: '#BA1D60'} }}>

            <CardMedia image={ scrollArrow } id='#back-to-top-anchor' onClick={() => handleClick} style={{ position: 'absolute', transform: 'rotate(180deg)' }}
             sx={{ top: { xs: 'calc(25% - 2px)', md: 'calc(25% - 2.5px)'}, left: { xs: 'calc(25% - .5px)', md: 'calc(25%)'},
            width: {xs: '2rem', md: '2.5rem'}, height: {xs: '2rem', md: '2.5rem'} } } >
             </CardMedia>

          </Button>

          <Container disableGutters sx={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative', flexDirection: { xs: 'column', md: 'row' }}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} sx={{opacity: { xs: '0', md: '100%'}, backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>

            <Box margin={0}
              sx={{
                paddingTop: { xs: '4rem', md: '5rem' },
                paddingBottom: { xs: '0rem', md: '4rem' },
                width: {xs: '100%', md: '50%'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: {xs: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '30rem', md: '20rem'}}}>
                  <CardMedia image={workHands} style={{ width: '20rem', height: '25rem' }}>
                    <CardMedia image={workThinking} style={{ width: '10rem', height: '10rem', transform: 'translate(13rem, 18rem)' }}></CardMedia>
                  </CardMedia>
                </Box>

            </Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', md: '50%'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: {xs: 'none', md: '1px solid #BA1D37'},
                paddingBottom: { xs: '2rem', md: '4rem' }
              }}>
                <Box sx={{width: {xs: '30rem', md: '20rem'}}}>
                  <Typography variant="h2" sx={{marginTop: {xs: '5rem', md: '3rem'}}}>Föreläsningar</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
                  <Button variant="contained" onClick={ () => navigate('/contact') }
                  sx={{ 
                    backgroundColor: '#BA1D37',
                    width: '10rem',
                    height: '3rem',
                    margin: '2rem 0',
                    '&:hover': {backgroundColor: '#BA1D60'}}}>
                    Kontakt
                  </Button>
                </Box>
            </Box>

            <Box height={'1px'} sx={{ display: { xs: 'block', md: 'none' }, width: '65%', minWidth: '30rem', margin: '0 auto', borderBottom: { xs: '1px solid #BA1D37', md: 'none'} }}></Box>

          </Container>

          <Container disableGutters sx={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative', flexDirection: { xs: 'column-reverse', md: 'row' }}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} sx={{opacity: { xs: '0', md: '100%'}, backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>
            <Box height={'1px'} sx={{ display: { xs: 'block', md: 'none' }, width: '65%', minWidth: '30rem', margin: '0 auto', borderBottom: { xs: '1px solid #BA1D37', md: 'none'} }}></Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', md: '50%'},
                paddingBottom: { xs: '2rem', md: '4rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: {xs: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '30rem', md: '20rem'}}}>
                  <Typography variant="h2" sx={{paddingTop: {xs: '5rem', md: '3rem'}}}>Relationer</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
                  <Button variant="contained" onClick={ () => navigate('/contact') }
                  sx={{ 
                    backgroundColor: '#BA1D37',
                    width: '10rem',
                    height: '3rem',
                    margin: '2rem 0',
                    '&:hover': {backgroundColor: '#BA1D60'}}}>
                    Kontakt
                  </Button>
                </Box>
            </Box>

            <Box margin={0}
              sx={{
                paddingTop: { xs: '4rem', md: '5rem' },
                paddingBottom: { xs: '0rem', md: '4rem' },
                width: {xs: '100%', md: '50%'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: {xs: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '30rem', md: '20rem'}}}>
                  <CardMedia image={workHugging} sx={{ width: '20rem', height: '25rem', transform: { xs: 'translate(3rem, 0)'}}}>
                    <CardMedia image={workFamily} style={{ width: '10rem', height: '10rem', transform: 'translate(-3rem, 18rem)' }}></CardMedia>
                  </CardMedia>
                </Box>

            </Box>

          </Container>

          <Container disableGutters sx={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative', flexDirection: { xs: 'column', md: 'row' }}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} sx={{opacity: { xs: '0', md: '100%'}, backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', md: '50%'},
                paddingTop: { xs: '4rem', md: '5rem' },
                paddingBottom: { xs: '0rem', md: '4rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: {xs: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '30rem', md: '20rem'}}}>
                  <CardMedia image={workManyHands} style={{ width: '20rem', height: '25rem' }}></CardMedia>
                </Box>

            </Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', md: '50%'},
                paddingBottom: { xs: '2rem', md: '4rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: {xs: 'none', md: '1px solid #BA1D37'},
              }}>
                <Box sx={{width: {xs: '30rem', md: '20rem'}}}>
                  <Typography variant="h2" sx={{paddingTop: {xs: '2.5rem', md: '5rem'}}}>Ledarskaps</Typography>
                  <Typography variant="h2">Utbildningar</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
                  <Button variant="contained" onClick={ () => navigate('/contact') }
                  sx={{ 
                    backgroundColor: '#BA1D37',
                    width: '10rem',
                    height: '3rem',
                    margin: '2rem 0',
                    '&:hover': {backgroundColor: '#BA1D60'}}}>
                    Kontakt
                  </Button>
                </Box>
            </Box>

            <Box height={'1px'} sx={{ display: { xs: 'block', md: 'none' }, width: '65%', minWidth: '30rem', margin: '0 auto', borderBottom: { xs: '1px solid #BA1D37', md: 'none'} }}></Box>

          </Container>

          <Container disableGutters sx={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative', flexDirection: { xs: 'column-reverse', md: 'row' }}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} sx={{opacity: { xs: '0', md: '100%'}, backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>
            <Box height={'1px'} sx={{ display: { xs: 'block', md: 'none' }, width: '65%', minWidth: '30rem', margin: '0 auto', borderBottom: { xs: '1px solid #BA1D37', md: 'none'} }}></Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', md: '50%'},
                paddingBottom: { xs: '2rem', md: '4rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: {xs: 'none', md: '1px solid #BA1D37'},
              }}>
                <Box sx={{width: {xs: '30rem', md: '20rem'}}}>
                  <Typography variant="h2" sx={{paddingTop: {xs: '2.5rem', md: '5rem'}}}>Personlig</Typography>
                  <Typography variant="h2">Utveckling</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
                  <Button variant="contained" onClick={ () => navigate('/contact') }
                  sx={{ 
                    backgroundColor: '#BA1D37',
                    width: '10rem',
                    height: '3rem',
                    margin: '2rem 0',
                    '&:hover': {backgroundColor: '#BA1D60'}}}>
                    Kontakt
                  </Button>
                </Box>
            </Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', md: '50%'},
                paddingTop: { xs: '4rem', md: '5rem' },
                paddingBottom: { xs: '0rem', md: '4rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: {xs: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '30rem', md: '20rem'}}}>
                  <CardMedia image={workHappy} style={{ width: '20rem', height: '25rem' }}></CardMedia>
                </Box>

            </Box>

          </Container>

          <Container disableGutters sx={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative', flexDirection: { xs: 'column', md: 'row' }}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} sx={{ opacity: { xs: '0', md: '100%'}, backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', md: '50%'},
                paddingTop: { xs: '4rem', md: '5rem' },
                paddingBottom: { xs: '0rem', md: '6rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: {xs: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '30rem', md: '20rem'}}}>
                  <CardMedia image={workSad} style={{ width: '20rem', height: '25rem' }}></CardMedia>
                </Box>

            </Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', md: '50%'},
                paddingBottom: { xs: '2rem', md: '8rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: {xs: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '30rem', md: '20rem'}}}>
                  <Typography variant="h2" sx={{paddingTop: {xs: '2.5rem', md: '5rem'}}}>Sorg</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
                  <Button variant="contained" onClick={ () => navigate('/contact') }
                  sx={{ 
                    backgroundColor: '#BA1D37',
                    width: '10rem',
                    height: '3rem',
                    margin: '2rem 0',
                    '&:hover': {backgroundColor: '#BA1D60'}}}>
                    Kontakt
                  </Button>
                </Box>
            </Box>

          </Container>

        </Container>
      </Container>

    )

};
