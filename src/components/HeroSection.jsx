import React from "react";
import { Box, Stack, Typography , Button } from "@mui/material";
import { styled } from '@mui/material/styles';


const NavigationLink = styled(Typography)( ({theme}) => ({
    color: `#c6c9d8`,
    '&:hover' : {
      color: `#f9004d`
    }
}))


const StyledButton = styled(Button)(( {theme}) => ({
  border:'2px solid grey',
  color:'white',
  borderRadius:'4px',
  textTransform:'uppercase',
  boxShadow:'none',
  outline:'none',
  backgroundColor:'transparent',
  padding: '0.3rem 1rem',
  '&:hover':{
      backgroundColor:`#f9004d`,
      border:'2px solid #f9004d'
  }
}))



const ImageContainer = styled(Box)( ({theme}) => ({
  maxWidth: "5rem",
  maxHeight: "5rem",

  "& img":{
    maxWidth:"100%",
    maxHeight:"100%",

  }
}))

// const styledButton = styled(Button)(({theme}) => ({
//   color: `#c6c9d8 `,
//   border:`#c6c9d8`,

//   '&:hover':{
//     color: `#f9004d`,
//     border:`#f9004d`
//   }
// }))


const HeroSection = () => {
  return (
    <Box
     variant="section"
    height="130vh"
      sx={{
        backgroundColor: `#00010c`,
        backgroundImage: `url("http://trydo.rainbowit.net/assets/images/bg/bg-image-1.jpg")`,
        paddingLeft:"5rem",
        paddingRight:"5rem"
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
          <Stack direction="row" gap={4} alignContent="center" alignItems="center" >
            <NavigationLink variant="a" >Home</NavigationLink>
            <NavigationLink  variant="a" >Services</NavigationLink>
            <NavigationLink  variant="a">About</NavigationLink>
            <NavigationLink  variant="a">Pages</NavigationLink>
            <NavigationLink  variant="a">Blocks</NavigationLink>
            <NavigationLink  variant="a">Contact</NavigationLink>
            <StyledButton  variant="outlined" color="inherit" size="large">Login</StyledButton>
          </Stack>
          </Box>
        </Stack>

        </Box>


            {/* hero section */}
          <Box variant="div" >
            <Stack direction="column" justifyContent="space-around" gap={10} >

              <Box variant="div" sx={{marginTop:"5rem"}} >
                <Typography variant="h1" >
                A DIGITAL
                <br/>
                AGENCY.
                </Typography>
              </Box>



              <Box variant="Section" >
                <Stack direction="row" gap={1} alignItems="flex-start" justifyContent="space-evenly" >


                  <Box sx={{
                    maxWidth: "25%"
                  }}>
                    <Stack direction="column" justifyContent="space-around" aligItems="flex-start" gap={2}>
                    <ImageContainer>
                      <img src="http://trydo.rainbowit.net/assets/images/icons/icon-01.png" alt="logo"  />
                      </ImageContainer>


                    <Typography variant="h4" sx={{
                      color:`#c6c9d8`,
                      fontSize:"1.5rem"
                    }}>Business Stratagy</Typography>
                    <Typography variant="p" sx={{
                      fontWeight:"400",
                      fontSize: "1rem",
                      color:`#c6c9d8`,
                      opacity:"0.75"
                    }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</Typography>
                    </Stack>
                  </Box>

                  {/* two */}
                  <Box sx={{
                    maxWidth: "25%"
                  }}>
                    <Stack direction="column" justifyContent="space-around" aligItems="flex-start" gap={1}>
                    <ImageContainer >
                      <img src="http://trydo.rainbowit.net/assets/images/icons/icon-02.png" alt="logo"  />
                      </ImageContainer>


                    <Typography variant="h4" sx={{
                      color:`#c6c9d8`,
                      fontSize:"1.5rem"
                    }}>Website Development</Typography>
                    <Typography variant="p" sx={{
                      fontWeight:"400",
                      fontSize: "1rem",
                      color:`#c6c9d8`,
                      opacity:"0.75"
                    }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</Typography>
                    </Stack>
                  </Box>

                  {/* three */}
                  <Box sx={{
                    maxWidth: "25%"
                  }}>
                    <Stack direction="column" justifyContent="space-around" aligItems="flex-start" gap={1}>
                    <ImageContainer>
                      <img src="http://trydo.rainbowit.net/assets/images/icons/icon-03.png" alt="logo"  />
                      </ImageContainer>

                    <Box  variant="div">
                    <Typography variant="h4" sx={{
                      color:`#c6c9d8`,
                     
                      fontSize:"1.5rem"
                    }}>Marketing & Reporting</Typography>
                    </Box>
                    <Typography variant="p" sx={{
                      fontWeight:"400",
                      fontSize: "1rem",
                      color:`#c6c9d8`,
                      opacity:"0.75"
                    }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Box>



            </Stack>
          </Box>

          
    </Box>
  );
};

export default HeroSection;
