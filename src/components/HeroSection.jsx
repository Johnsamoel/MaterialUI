import React from "react";
import { Box, Stack, Typography , Button } from "@mui/material";
import { styled } from '@mui/material/styles';


const NavigationLink = styled(Typography)( ({theme}) => ({
    color: `#c6c9d8`,
    '&:hover' : {
      color: `#f9004d`
    }
}))


const ImageContainer = styled(Box)( ({theme}) => ({
  maxWidth: "5rem",
  maxHeight: "5rem",

  "& img":{
    maxWidth:"100%",
    maxHeight:"100%"
  }
}))


const HeroSection = () => {
  return (
    <Box
      component="div"
      
      sx={{
        backgroundImage: `url("http://trydo.rainbowit.net/assets/images/bg/bg-image-1.jpg")`,
        backgroundColor: `#00010c`,
        
      }}
    >
      <Box component="div"  >
   
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
              paddingRight: "3rem",
              paddingLeft: "3rem",
              paddingTop: "2rem",
              paddingBottom:"2rem"
          }}
        >
          <Box>
          
            <img
              src="http://trydo.rainbowit.net/assets/images/logo/logo.png"
              alt="logo"
            />
          </Box>

          <Box component="Links" variant="div">
          <Stack direction="row" gap={4} alignContent="center" alignItems="center">
            <NavigationLink variant="a" >Home</NavigationLink>
            <NavigationLink  variant="a" >Services</NavigationLink>
            <NavigationLink  variant="a">About</NavigationLink>
            <NavigationLink  variant="a">Pages</NavigationLink>
            <NavigationLink  variant="a">Blocks</NavigationLink>
            <NavigationLink  variant="a">Contact</NavigationLink>
            <Button  variant="outlined" color="success" size="large">Login</Button>
          </Stack>
          </Box>
        </Stack>

        </Box>


            {/* hero section */}
          <Box variant="div" >
            <Stack direction="column" justifyContent="space-around">

              <Box variant="div" >
                <Typography variant="h1" >
                A DIGITAL
                <br/>
                AGENCY.
                </Typography>
              </Box>
              <Box variant="Section" >
                <Stack direction="row" gap={1} alignItems="center" justifyContent="center">
                  <Box>
                    <Stack direction="column" justifyContent="flex-start">
                    <ImageContainer>
                      <img src="http://trydo.rainbowit.net/assets/images/icons/icon-01.png" alt="logo"  />
                      </ImageContainer>


                    <Typography variant="h4">Business Stratagy</Typography>
                    <Typography variant="p" sx={{
                      opacity:"0.75",
                      fontWeight:"400",
                      fontSize: "1rem",
                      
                    }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</Typography>
                    </Stack>
                  </Box>
                  <Box>1</Box>
                  <Box>1</Box>
                </Stack>
              </Box>
            </Stack>
          </Box>



          
    </Box>
  );
};

export default HeroSection;
