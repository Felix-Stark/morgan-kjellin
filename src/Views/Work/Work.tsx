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

export const Work = () => {



  return (

      <Container disableGutters style={{ maxWidth: '100vw', width: '100%', margin: "0" }}>

        <CardMedia image={ workHero } 
        style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "100vh", position: 'relative' }}>

          <Typography variant="h1" sx={{ color: '#FFFFFF', margin: '2rem' }}>Arbeta med mig</Typography>
          <Button variant="contained" sx={{ 
            backgroundColor: '#BA1D37',
            width: '20rem',
            height: '5rem',
            margin: '2rem',
            fontSize: '24px',
            '&:hover': {backgroundColor: '#BA1D60'}}}>
            Kontakt
          </Button>

          <CardMedia image={ scrollArrow } style={{width: '4rem', height: '4rem', position: 'absolute', bottom: '5rem'}}></CardMedia>

        </CardMedia>

        <Container disableGutters style={{ display: 'flex', flexWrap: 'wrap', minWidth: '100%', margin: "0", position: 'relative'}}>

          <Button variant="contained" sx={{ zIndex: '1', width: '5rem', height: '5rem', borderRadius: '50%', backgroundColor: '#BA1D37', position: 'fixed',
           margin: '5rem', bottom: '-2rem', right: '-2rem', '&:hover': {backgroundColor: '#BA1D60'} }}>

            <CardMedia image={ scrollArrow } style={{width: '2.5rem', height: '2.5rem', position: 'absolute',
             top: 'calc(25% - 2.5px)', left: 'calc(25%)', transform: 'rotate(180deg)' }}>
             </CardMedia>

          </Button>

          <Container disableGutters style={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative'}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} style={{backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>

            <Box width={'50%'} margin={0} paddingBottom={'4rem'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: '1px solid #BA1D37'
              }}>
                <Box width={'20rem'}>
                  <CardMedia image={workHands} style={{ width: '20rem', height: '25rem' }}>
                    <CardMedia image={workThinking} style={{ width: '10rem', height: '10rem', transform: 'translate(8rem, 18rem)' }}></CardMedia>
                  </CardMedia>
                </Box>

            </Box>

            <Box width={'50%'} margin={0} paddingBottom={'4rem'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: '1px solid #BA1D37'
              }}>
                <Box width={'20rem'}>
                  <Typography variant="h2" marginTop={'5rem'}>Föreläsningar</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
                  <Button variant="contained" sx={{ 
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

          <Container disableGutters style={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative'}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} style={{backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>

            <Box width={'50%'} margin={0} paddingBottom={'4rem'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: '1px solid #BA1D37'
              }}>
                <Box width={'20rem'}>
                  <Typography variant="h2" paddingTop={'5rem'}>Relationer</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
                  <Button variant="contained" sx={{ 
                    backgroundColor: '#BA1D37',
                    width: '10rem',
                    height: '3rem',
                    margin: '2rem 0',
                    '&:hover': {backgroundColor: '#BA1D60'}}}>
                    Kontakt
                  </Button>
                </Box>
            </Box>

            <Box width={'50%'} margin={0} paddingBottom={'4rem'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: '1px solid #BA1D37'
              }}>
                <Box width={'20rem'}>
                  <CardMedia image={workHugging} style={{ width: '20rem', height: '25rem' }}>
                    <CardMedia image={workFamily} style={{ width: '10rem', height: '10rem', transform: 'translate(-8rem, 18rem)' }}></CardMedia>
                  </CardMedia>
                </Box>

            </Box>

          </Container>

          <Container disableGutters style={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative'}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} style={{backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>

            <Box width={'50%'} margin={0} paddingBottom={'4rem'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: '1px solid #BA1D37'
              }}>
                <Box width={'20rem'}>
                  <CardMedia image={workManyHands} style={{ width: '20rem', height: '25rem' }}></CardMedia>
                </Box>

            </Box>

            <Box width={'50%'} margin={0} paddingBottom={'4rem'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: '1px solid #BA1D37'
              }}>
                <Box width={'20rem'}>
                  <Typography variant="h2" paddingTop={'5rem'}>Ledarskaps</Typography>
                  <Typography variant="h2">Utbildningar</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
                  <Button variant="contained" sx={{ 
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

          <Container disableGutters style={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative'}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} style={{backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>

            <Box width={'50%'} margin={0} paddingBottom={'4rem'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: '1px solid #BA1D37'
              }}>
                <Box width={'20rem'}>
                  <Typography variant="h2" paddingTop={'5rem'}>Personlig</Typography>
                  <Typography variant="h2">Utveckling</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
                  <Button variant="contained" sx={{ 
                    backgroundColor: '#BA1D37',
                    width: '10rem',
                    height: '3rem',
                    margin: '2rem 0',
                    '&:hover': {backgroundColor: '#BA1D60'}}}>
                    Kontakt
                  </Button>
                </Box>
            </Box>

            <Box width={'50%'} margin={0} paddingBottom={'4rem'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: '1px solid #BA1D37'
              }}>
                <Box width={'20rem'}>
                  <CardMedia image={workHappy} style={{ width: '20rem', height: '25rem' }}></CardMedia>
                </Box>

            </Box>


          </Container>

          <Container disableGutters style={{ display: 'flex', minWidth: '100%', margin: "0", position: 'relative'}}>
            <Box width={'2rem'} height={'2rem'} borderRadius={'50%'} style={{backgroundColor: '#BA1D37', position: 'absolute', right: 'calc(50% - 1rem)', top: '5rem'}}></Box>

            <Box width={'50%'} margin={0} paddingBottom={'6rem'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRight: '1px solid #BA1D37'
              }}>
                <Box width={'20rem'}>
                  <CardMedia image={workSad} style={{ width: '20rem', height: '25rem' }}></CardMedia>
                </Box>

            </Box>

            <Box width={'50%'} margin={0} paddingBottom={'6rem'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: '1px solid #BA1D37'
              }}>
                <Box width={'20rem'}>
                  <Typography variant="h2" paddingTop={'5rem'}>Sorg</Typography>
                  <Typography variant="h5" color="#BA1D37">ONLINE - PÅ PLATS, EFTER BEGÄRAN</Typography>
                  <Typography variant="h6" paddingTop={'2rem'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis maiores earum est alias laborum eius libero ipsa quos, quae ipsam porro quo eum! Quos eos dolore fugiat repellat delectus?</Typography>
                  <Button variant="contained" sx={{ 
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

        <Box style={{ margin: '4rem calc(50% - 90px)', fontSize: '3rem' }}>FOOTER</Box>

      </Container>

    )

};
