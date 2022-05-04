import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import "swiper/css";
import "swiper/css/pagination";



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



const StyledSlider = styled(Box)(({ theme }) => ({
  borderRadius: "15px",
  width:'46rem',
  height: "530px",
  backgroundRepeat: "no-repeat",
  position: "relative",
  backgroundSize: "cover",
  transition: "all  ease-in 0.1s",
  "& span": {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  "& h6": {
    backgroundColor: "transparent",
    color: `#c6c9d8`,
    fontSize: "1rem",
  },
  "&:hover": {
    "& .layer": {
      zIndex: "2",
      opacity: "0.8",
      backgroundImage: `linear-gradient(#f6004c 10%,#000)`,
      height: "100%",
      width: "100%",
      borderRadius: "15px",
    },
    borderRadius: "15px",
  },
}));

const LatestNews = () => {
  return (
    <Box
      Variant="div"
      sx={{ paddingTop: "10rem", paddingBottom: "10rem"}}
    >
      <Stack direction="column" justifyContent="space-around">
        <Box sx={{paddingLeft:'9rem' , paddingRight:"9rem"}}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap={1}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", fontSize: "3rem" }}
            >
              Latest News
            </Typography>
            <Typography
              Variant="p"
              sx={{
                width: "35%",
                color: `rgba(29,29,36,.75)`,
                fontSize: "1rem",
              }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </Typography>
          </Stack>
        </Box>
        <Box >
          <Stack direction="column">
            <Box
              sx={{
                paddingTop: "4rem",
                paddingBottom: "4rem",
                paddingRight:'4rem',
                paddingLeft:'4rem',
                marginLeft:'5rem',
                marginRight:'5rem',
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                gap={2}
              >
                <StyledSlider sx={{backgroundImage:`url(http://trydo.rainbowit.net/assets/images/blog/blog-01.jpg)`}}>
                <Box Variant="div" sx={{position:'absolute' , zIndex:'5' , width:'100%' , height:'100%' , boxSizing:'border-box'}}>
                 <Stack direction='column' justifyContent='flex-end' alignItems='center' sx={{width:'100%' , height:'100%'  }}>
                   <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' gap={2} sx={{marginBottom:"2rem"}}>
                   <Typography variant="h6" >Development</Typography>
                   <Typography variant='p' > Getting tickets to the big show</Typography>
                   <StyledButton variant="outlined">Case Study</StyledButton>
                   </Stack>
                   </Stack>

                   </Box>
                
                <Box className="layer" Variant='div' sx={{position:'absolute' , backgroundColor:'#f6004c' , width:'100%' , height:'100%' , zIndex:'2' , opacity:'0' , borderRadius:'15px' , transition:'all ease-in 0.1s' }}>
                </Box>
                </StyledSlider >
                <StyledSlider sx={{backgroundImage:`url(http://trydo.rainbowit.net/assets/images/blog/blog-02.jpg)`}}>
                <Box Variant="div" sx={{position:'absolute' , zIndex:'5' , width:'100%' , height:'100%' , boxSizing:'border-box'}}>
                 <Stack direction='column' justifyContent='flex-end' alignItems='center' sx={{width:'100%' , height:'100%'  }}>
                   <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' gap={2} sx={{marginBottom:"2rem"}}>
                   <Typography variant="h6" >Development</Typography>
                   <Typography variant='p' > Getting tickets to the big show</Typography>
                   <StyledButton variant="outlined">Case Study</StyledButton>
                   </Stack>
                   </Stack>

                   </Box>
                
                <Box className="layer" Variant='div' sx={{position:'absolute' , backgroundColor:'#f6004c' , width:'100%' , height:'100%' , zIndex:'2' , opacity:'0' , borderRadius:'15px' , transition:'all ease-in 0.1s' }}>
                </Box>
                </StyledSlider >
                <StyledSlider sx={{backgroundImage:`url(http://trydo.rainbowit.net/assets/images/blog/blog-03.jpg)`}}>
                <Box Variant="div" sx={{position:'absolute' , zIndex:'5' , width:'100%' , height:'100%' , boxSizing:'border-box'}}>
                 <Stack direction='column' justifyContent='flex-end' alignItems='center' sx={{width:'100%' , height:'100%'  }}>
                   <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' gap={2} sx={{marginBottom:"2rem"}}>
                   <Typography variant="h6" >Development</Typography>
                   <Typography variant='p' > Getting tickets to the big show</Typography>
                   <StyledButton variant="outlined">Case Study</StyledButton>
                   </Stack>
                   </Stack>

                   </Box>
                
                <Box className="layer" Variant='div' sx={{position:'absolute' , backgroundColor:'#f6004c' , width:'100%' , height:'100%' , zIndex:'2' , opacity:'0' , borderRadius:'15px' , transition:'all ease-in 0.1s' }}>
                </Box>
                </StyledSlider>
              </Stack>
            </Box>
            <Box ssx={{margin:'3rem' }}>
                <Stack direction='row' justifyContent='center' alignItems='center' flexWrap='wrap' gap={5}>
                    <Box><img src="http://trydo.rainbowit.net/assets/images/brand/brand-01.png" alt="logo"/></Box>
                    <Box><img src="http://trydo.rainbowit.net/assets/images/brand/brand-02.png" alt="logo"/></Box>
                    <Box><img src="http://trydo.rainbowit.net/assets/images/brand/brand-03.png" alt="logo"/></Box>
                    <Box><img src="http://trydo.rainbowit.net/assets/images/brand/brand-04.png" alt="logo" /></Box>
                    <Box><img src="http://trydo.rainbowit.net/assets/images/brand/brand-05.png" alt="logo" /></Box>
                    <Box><img src="http://trydo.rainbowit.net/assets/images/brand/brand-06.png" alt="logo" /></Box>
                    <Box><img src="http://trydo.rainbowit.net/assets/images/brand/brand-03.png" alt="logo" /></Box>
                    <Box><img src="http://trydo.rainbowit.net/assets/images/brand/brand-02.png" alt="logo" /></Box>
                </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default LatestNews;
