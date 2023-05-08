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
import { useRef } from 'react';

export const Work = () => {

  const navigate = useNavigate();

  const heroRef: any = useRef();

  const scrollToTop = () => {
    if (window.scrollY > 100) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const scrollToElement = () => {
    const heroHeight = heroRef.current.offsetHeight;
    window.scrollTo({ top: heroHeight, behavior: 'smooth' })
  }

  return (

      <Container disableGutters style={{ maxWidth: '100vw', width: '100%', margin: "0" }}>

        <CardMedia ref={heroRef} image={ workHero } 
        style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "100vh", position: 'relative' }}>

          <Typography variant="h1" sx={{ color: '#FFFFFF', margin: '2rem 0', fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' } }}>Arbeta med mig</Typography>
          <Button variant="contained"
          onClick={ () => navigate('/contact') }
          sx={{ 
            backgroundColor: '#BA1D37',
            width: {xs: '12rem', sm: '16rem', md: '20rem'},
            height: { xs: '3rem', sm: '4rem', md: '5rem'},
            margin: '2rem',
            fontSize: {sm: '20px', md: '24px'},
            '&:hover': {backgroundColor: '#BA1D60'}}}>
            Kontakt
          </Button>

          <CardMedia image={ scrollArrow } onClick={scrollToElement} style={{width: '4rem', height: '4rem', position: 'absolute', bottom: '5rem'}}
          sx={{ '&:hover': { cursor: 'pointer' } }}
          ></CardMedia>

        </CardMedia>

        <Container disableGutters style={{ display: 'flex', flexWrap: 'wrap', minWidth: '100%', margin: "0", position: 'relative'}}>

          <Button variant="contained" onClick={ scrollToTop } 
           sx={{ zIndex: '1', width: {xs: '4rem', sm: '4rem', md: '5rem'}, height: {xs: '4rem', sm: '4rem', md: '5rem'}, borderRadius: '50%', backgroundColor: '#BA1D37', position: 'fixed',
           margin: '5rem', bottom: '-2rem', right: '-2rem', '&:hover': {backgroundColor: '#BA1D60'} }}>

            <CardMedia image={ scrollArrow } style={{ position: 'absolute', transform: 'rotate(180deg)' }}
             sx={{ top: { xs: 'calc(25% - 2px)', sm: 'calc(25% - 2px)', md: 'calc(25% - 2.5px)'}, left: { xs: 'calc(25% - 2px)', sm: 'calc(25% - .5px)', md: 'calc(25%)'},
            width: {xs: '2rem', sm: '2rem', md: '2.5rem'}, height: {xs: '2rem', sm: '2rem', md: '2.5rem'} } } >
             </CardMedia>

          </Button>

          <Container disableGutters sx={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative', flexDirection: { xs: 'column', sm: 'column', md: 'row' }}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} sx={{opacity: { xs: '0', sm: '0', md: '100%'}, backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>

            <Box margin={0}
              sx={{
                paddingTop: { xs: '4rem', sm: '4rem', md: '5rem' },
                paddingBottom: { xs: '0rem', sm: '0rem', md: '4rem' },
                width: {sm: '100%', md: '50%'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: {xs: 'none', sm: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '18rem', sm: '30rem', md: '20rem'}}}>
                  <CardMedia image={workHands} sx={{ width: { xs: '14rem', sm: '20rem'}, height: {xs: '20rem', sm: '25rem'} }}>
                    <CardMedia image={workThinking} sx={{ width: { xs: '7rem', sm: '10rem'}, height: { xs: '7rem', sm: '10rem'}, transform: { xs: 'translate(9rem, 16rem)', sm: 'translate(13rem, 18rem)'} }}></CardMedia>
                  </CardMedia>
                </Box>

            </Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', sm: '100%', md: '50%'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: {xs: 'none', sm: 'none', md: '1px solid #BA1D37'},
                paddingBottom: { xs: '2rem', sm: '2rem', md: '4rem' }
              }}>
                <Box sx={{width: {xs: '18rem', sm: '30rem', md: '20rem'}}}>
                  <Typography variant="h2" sx={{marginTop: { xs: '5rem', sm: '5rem', md: '3rem'}, fontSize: { xs: '1.5rem', sm: '2rem' }}}>Föreläsningar</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'} sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
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

            <Box height={'1px'} sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, width: '65%', minWidth: { xs: '18rem', sm: '30rem'}, margin: '0 auto', borderBottom: { xs: '1px solid #BA1D37', sm: '1px solid #BA1D37', md: 'none'} }}></Box>

          </Container>

          <Container disableGutters sx={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} sx={{opacity: { xs: '0', sm: '0', md: '100%'}, backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>
            <Box height={'1px'} sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, width: '65%', minWidth: { xs: '18rem', sm: '30rem'}, margin: '0 auto', borderBottom: { xs: '1px solid #BA1D37', sm: '1px solid #BA1D37', md: 'none'} }}></Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', sm: '100%', md: '50%'},
                paddingBottom: { xs: '2rem', sm: '2rem', md: '4rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: {xs: 'none', sm: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '18rem', sm: '30rem', md: '20rem'}}}>
                  <Typography variant="h2" sx={{paddingTop: {xs: '5rem', sm: '5rem', md: '3rem'}, fontSize: { xs: '1.5rem', sm: '2rem' }}}>Relationer</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'} sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
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
                paddingTop: { xs: '4rem', sm: '4rem', md: '5rem' },
                paddingBottom: { xs: '0rem', sm: '0rem', md: '4rem' },
                width: {xs: '100%', sm: '100%', md: '50%'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: {xs: 'none', sm: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '18rem', sm: '30rem', md: '20rem'}}}>
                  <CardMedia image={workHugging} sx={{width: { xs: '14rem', sm: '20rem'}, height: {xs: '20rem', sm: '25rem'}, transform: { xs: 'translate(3rem, 0)', sm: 'translate(3rem, 0)'}}}>
                    <CardMedia image={workFamily} sx={{ width: { xs: '7rem', sm: '10rem'}, height: { xs: '7rem', sm: '10rem'} , transform: { xs: 'translate(-3rem, 15rem)', sm: 'translate(-3rem, 18rem)'} }}></CardMedia>
                  </CardMedia>
                </Box>

            </Box>

          </Container>

          <Container disableGutters sx={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative', flexDirection: { xs: 'column', sm: 'column', md: 'row' }}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} sx={{opacity: { xs: '0', sm: '0', md: '100%'}, backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', sm: '100%', md: '50%'},
                paddingTop: { xs: '4rem', sm: '4rem', md: '5rem' },
                paddingBottom: { xs: '0rem', sm: '0rem', md: '4rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: {xs: 'none', sm: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '18rem', sm: '30rem', md: '20rem'}}}>
                  <CardMedia image={workManyHands} sx={{ width: { xs: '14rem', sm: '20rem'}, height: {xs: '20rem', sm: '25rem'} }}></CardMedia>
                </Box>

            </Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', sm: '100%', md: '50%'},
                paddingBottom: { xs: '2rem', sm: '2rem', md: '4rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: {xs: 'none', sm: 'none', md: '1px solid #BA1D37'},
              }}>
                <Box sx={{width: {xs: '18rem', sm: '30rem', md: '20rem'}}}>
                  <Typography variant="h2" sx={{paddingTop: {xs: '2.5rem', sm: '2.5rem'}, md: '5rem', fontSize: { xs: '1.5rem', sm: '2rem' }}}>Ledarskaps</Typography>
                  <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>Utbildningar</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'} sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
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

            <Box height={'1px'} sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, width: '65%', minWidth: { xs: '18rem', sm: '30rem'}, margin: '0 auto', borderBottom: { xs: '1px solid #BA1D37', sm: '1px solid #BA1D37', md: 'none'} }}></Box>

          </Container>

          <Container disableGutters sx={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative', flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} sx={{opacity: { xs: '0', sm: '0', md: '100%'}, backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>
            <Box height={'1px'} sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, width: '65%', minWidth: { xs: '18rem', sm: '30rem'}, margin: '0 auto', borderBottom: { xs: '1px solid #BA1D37', sm: '1px solid #BA1D37', md: 'none'} }}></Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', sm: '100%', md: '50%'},
                paddingBottom: { xs: '2rem', sm: '2rem', md: '4rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: {xs: 'none', sm: 'none', md: '1px solid #BA1D37'},
              }}>
                <Box sx={{width: {xs: '18rem', sm: '30rem', md: '20rem'}}}>
                  <Typography variant="h2" sx={{paddingTop: {xs: '2.5rem', sm: '2.5rem', md: '5rem'}, fontSize: { xs: '1.5rem', sm: '2rem' }}}>Personlig</Typography>
                  <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>Utveckling</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'} sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
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
                width: {xs: '100%', sm: '100%', md: '50%'},
                paddingTop: { xs: '4rem', sm: '4rem', md: '5rem' },
                paddingBottom: { xs: '0rem', sm: '0rem', md: '4rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: {xs: 'none', sm: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '18rem', sm: '30rem', md: '20rem'}}}>
                  <CardMedia image={workHappy} sx={{ width: { xs: '14rem', sm: '20rem'}, height: {xs: '20rem', sm: '25rem'} }}></CardMedia>
                </Box>

            </Box>

          </Container>

          <Container disableGutters sx={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative', flexDirection: { xs: 'column', sm: 'column', md: 'row' }}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} sx={{ opacity: { xs: '0', sm: '0', md: '100%'}, backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', sm: '100%', md: '50%'},
                paddingTop: { xs: '4rem', sm: '4rem', md: '5rem' },
                paddingBottom: { xs: '0rem', sm: '0rem', md: '6rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: {xs: 'none', sm: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '18rem', sm: '30rem', md: '20rem'}}}>
                  <CardMedia image={workSad} sx={{ width: { xs: '14rem', sm: '20rem'}, height: {xs: '20rem', sm: '25rem'} }}></CardMedia>
                </Box>

            </Box>

            <Box margin={0}
              sx={{
                width: {xs: '100%', sm: '100%', md: '50%'},
                paddingBottom: { xs: '2rem', sm: '2rem', md: '8rem' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: {xs: 'none', sm: 'none', md: '1px solid #BA1D37'}
              }}>
                <Box sx={{width: {xs: '18rem', sm: '30rem', md: '20rem'}}}>
                  <Typography variant="h2" sx={{paddingTop: {xs: '2.5rem', sm: '2.5rem', md: '5rem'}, fontSize: { xs: '1.5rem', sm: '2rem' }}}>Sorg</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'} sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
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
