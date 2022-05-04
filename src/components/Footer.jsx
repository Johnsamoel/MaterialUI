import {Box , Stack, Typography , Button} from '@mui/material'; 
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledLinks = styled(Typography)(({theme}) => ({
textTransform:'uppercase',
color:'#c6c9d8',
fontWeight:'500',
fontSize:'0.9rem',
'&:hover':{
    color:`#f9004d`
}
}))

const StyledRightFooter = styled(Box)(({theme}) => ({
    paddingTop:'4rem',
    height:'100%',
    backgroundImage:'url("http://trydo.rainbowit.net/assets/images/bg/bg-image-8.jpg")',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    // color:`#1d1d24`,

}))

const StyledBox = styled(Box)(({theme}) => ({
    backgroundImage:`url('http://trydo.rainbowit.net/assets/images/logo/big-logo.png')`,
    backgroundRepeat:'no-repeat',
    backgroundPositionX:'right',
    width: '75%',
    height:'60%',
    color:'#fff',
    padding:'3rem',
    '& span':{
        fontSize:'1rem'
    },
    '& h3':{
        fontSize:'5rem',
        fontWeight:'900px'
    }

}));


const StyledButton = styled(Button)(( {theme}) => ({
    border:'2px solid #b1b4c1',
    color:'#fff',
    borderRadius:'6px',
    textTransform:'uppercase',
    fontWeight:'500',
    boxShadow:'none',
    outline:'none',
    backgroundColor:'transparent',
    padding: '1rem 4rem',
    '&:hover':{
        backgroundColor:`#f9004d`,
        border:'2px solid #f9004d',
        color:'#fff'
    }
}))

const Footer = () => {
    return (
        <Box sx={{height:'580px'  }}>
            <Stack direction='row' justifyContent='space-around' alignItems='flex-end'   sx={{height:'100%' }}>
            <Box sx={{width:'55%' , height:'100%'  , borderTopRightRadius:'4px' , backgroundImage:`url("http://trydo.rainbowit.net/assets/images/pattern-1.png")`, background:`linear-gradient(145deg,#f81f01,#ee076e)`}}>
                <Stack direction='column' justifyContent='center' alignItems='center' sx={{height:'100%' , width:'100%' }}>
                <StyledBox>
                    <Typography variant='span'>READY TO DO THIS</Typography>
                    <Typography variant='h3'>READY TO DO THIS</Typography>
                    <StyledButton>Contact US</StyledButton>
                </StyledBox>
                </Stack>
            </Box>


            <Box  sx={{width:'45%' , height:'90%'}}>
                <StyledRightFooter>
                    <Stack sx={{  height:'90%'}} direction='column' justifyContent='center' alignItems='center' gap={4}>
                        <Box>
                            <Stack direction='row' justifyContent='space-around' alignItems='flex-start'  gap={15}>
                                <Box>
                                    <Stack direction='column' justifyContent='space-around' alignItems='flex-start' gap={4}>
                                    <Box><Typography variant='h4'  sx={{fontSize:'1.5rem' }}>Quick Links</Typography></Box>
                                    <Stack direction='column' justifyContent='space-around' alignItems='flex-start' gap={2}>
                                    <StyledLinks variant={Link}>Work</StyledLinks>
                                    <StyledLinks variant={Link}>About</StyledLinks>
                                    <StyledLinks variant={Link}>Let's talk</StyledLinks>
                                    </Stack>
                                    </Stack>
                                    </Box>


                                    <Box>
                                    <Stack direction='column' justifyContent='space-around' alignItems='flex-start' gap={4}>
                                    <Box><Typography variant='h4' sx={{fontSize:'1.5rem' }}>Say Hello</Typography></Box>
                                    <Stack direction='column' justifyContent='space-around' alignItems='flex-start' gap={2}>
                                    <StyledLinks variant={Link}>admin@example.com</StyledLinks>
                                    <StyledLinks variant={Link}>hr@example.com</StyledLinks>
                                    <Stack direction='row' justifyContent='space-around' alignItems='center' gap={2}>
                                    <FacebookIcon sx={{color:'rgba(198,201,216,.75)'}} />
                                    <TwitterIcon  sx={{color:'rgba(198,201,216,.75)'}} />
                                    <InstagramIcon sx={{color:'rgba(198,201,216,.75)'}}/>
                                    <LinkedInIcon sx={{color:'rgba(198,201,216,.75)'}} />
                                    </Stack>
                                    </Stack>
                                    </Stack>
                                    </Box>
                            </Stack>
                        </Box>
                        <Box>
                            <Typography variant='p' sx={{textAlign:'center'}}>Copyright © 2021 Rainbow-Themes. All Rights Reserved.</Typography>
                        </Box>
                    </Stack>
                </StyledRightFooter>
            </Box>
            </Stack>
        </Box>
    );
};

export default Footer;