import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import classes from "../stlyes/styles.css";
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

const StyledSlider = styled(Box)(({theme}) =>({

    borderRadius:'15px',
    height:'100%',
    backgroundRepeat:'no-repeat',
    position:'relative',
    backgroundSize:'cover',
    transition:'all  ease-in 0.1s',
    '& span':{
        color:'white',
        fontWeight:'bold',
        fontSize:'1.2rem'
    },
    '& h6':{
        backgroundColor:'transparent',
        color:`#c6c9d8`,
        fontSize:'1rem',
        
        
    },
    '&:hover':{
        '& .layer':{
            zIndex:'2',
            opacity:'0.8',
            backgroundImage:`linear-gradient(#f6004c 10%,#000)`,
            height:'100%',
            width:'100%',
            borderRadius:'15px'
        },
        borderRadius:'15px',

    }

    
})) 

const Slider = () => {
  return (
    <Box variant="section" sx={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <Stack direction="column" justifyContent="space-around">
        {/* title */}
        <Box variant="div" sx={{ paddingLeft: "9rem" }}>
          <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="flex-start"
          >
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", fontSize: "3rem" }}
            >
              Our Works
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: "1rem",
                color: "rgba(29,29,36,.75)",
                textAlign: "left",
                width: "35%",
              }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </Typography>
          </Stack>
        </Box>
        <Box>

        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={classes.Swiper}
      >
        <SwiperSlide className={classes.swiperSlide}>
            <StyledSlider sx={{backgroundImage:`url(http://trydo.rainbowit.net/assets/images/portfolio/portfolio-1.jpg)` }} >

               <Box Variant="div" sx={{position:'absolute' , zIndex:'5' , width:'100%' , height:'100%' , boxSizing:'border-box'}}>
                 <Stack direction='column' justifyContent='flex-end' alignItems='center' sx={{width:'100%' , height:'100%'  }}>
                   <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' gap={2} sx={{marginBottom:"6rem"}}>
                   <Typography variant="h6" >Development</Typography>
                   <Typography variant='p' > Getting tickets to the big show</Typography>
                   <StyledButton variant="outlined">Case Study</StyledButton>
                   </Stack>
                   </Stack>

                   </Box>
                
                <Box className="layer" Variant='div' sx={{position:'absolute' , backgroundColor:'#f6004c' , width:'100%' , height:'100%' , zIndex:'2' , opacity:'0' , borderRadius:'15px' , transition:'all ease-in 0.1s' }}>
                </Box>
            </StyledSlider>
         
        </SwiperSlide>

        <SwiperSlide className={classes.swiperSlide}>
            <StyledSlider sx={{backgroundImage:`url(http://trydo.rainbowit.net/assets/images/portfolio/portfolio-2.jpg)` }} >

            <Box Variant="div" sx={{position:'absolute' , zIndex:'5' , width:'100%' , height:'100%' , boxSizing:'border-box'}}>
                 <Stack direction='column' justifyContent='flex-end' alignItems='center' sx={{width:'100%' , height:'100%'  }}>
                   <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' gap={2} sx={{marginBottom:"6rem"}}>
                   <Typography variant="h6" >Development</Typography>
                   <Typography variant='p' > Getting tickets to the big show</Typography>
                   <StyledButton variant="outlined">Case Study</StyledButton>
                   </Stack>
                   </Stack>

                   </Box>
                
                <Box className="layer" Variant='div' sx={{position:'absolute' , backgroundColor:'#f6004c' , width:'100%' , height:'100%' , zIndex:'2' , opacity:'0' , borderRadius:'15px' , transition:'all ease-in 0.1s' }}>
                </Box>
            </StyledSlider>
         
        </SwiperSlide>

        <SwiperSlide className={classes.swiperSlide}>
            <StyledSlider sx={{backgroundImage:`url(http://trydo.rainbowit.net/assets/images/portfolio/portfolio-3.jpg)` }} >

            <Box Variant="div" sx={{position:'absolute' , zIndex:'5' , width:'100%' , height:'100%' , boxSizing:'border-box'}}>
                 <Stack direction='column' justifyContent='flex-end' alignItems='center' sx={{width:'100%' , height:'100%'  }}>
                   <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' gap={2} sx={{marginBottom:"6rem"}}>
                   <Typography variant="h6" >Development</Typography>
                   <Typography variant='p' > Getting tickets to the big show</Typography>
                   <StyledButton variant="outlined">Case Study</StyledButton>
                   </Stack>
                   </Stack>

                   </Box>
                
                <Box className="layer" Variant='div' sx={{position:'absolute' , backgroundColor:'#f6004c' , width:'100%' , height:'100%' , zIndex:'2' , opacity:'0' , borderRadius:'15px' , transition:'all ease-in 0.1s' }}>
                </Box>
            </StyledSlider>
         
        </SwiperSlide>

        <SwiperSlide className={classes.swiperSlide}>
            <StyledSlider sx={{backgroundImage:`url(http://trydo.rainbowit.net/assets/images/portfolio/portfolio-4.jpg)` }} >

            <Box Variant="div" sx={{position:'absolute' , zIndex:'5' , width:'100%' , height:'100%' , boxSizing:'border-box'}}>
                 <Stack direction='column' justifyContent='flex-end' alignItems='center' sx={{width:'100%' , height:'100%'  }}>
                   <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' gap={2} sx={{marginBottom:"6rem"}}>
                   <Typography variant="h6" >Development</Typography>
                   <Typography variant='p' > Getting tickets to the big show</Typography>
                   <StyledButton variant="outlined">Case Study</StyledButton>
                   </Stack>
                   </Stack>

                   </Box>
                <Box className="layer" Variant='div' sx={{position:'absolute' , backgroundColor:'#f6004c' , width:'100%' , height:'100%' , zIndex:'2' , opacity:'0' , borderRadius:'15px' , transition:'all ease-in 0.1s' }}>
                </Box>
            </StyledSlider>
         
        </SwiperSlide>

        <SwiperSlide className={classes.swiperSlide}>
            <StyledSlider sx={{backgroundImage:`url(http://trydo.rainbowit.net/assets/images/portfolio/portfolio-1.jpg)` }} >

            <Box Variant="div" sx={{position:'absolute' , zIndex:'5' , width:'100%' , height:'100%' , boxSizing:'border-box'}}>
                 <Stack direction='column' justifyContent='flex-end' alignItems='center' sx={{width:'100%' , height:'100%'  }}>
                   <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' gap={2} sx={{marginBottom:"6rem"}}>
                   <Typography variant="h6" >Development</Typography>
                   <Typography variant='p' > Getting tickets to the big show</Typography>
                   <StyledButton variant="outlined">Case Study</StyledButton>
                   </Stack>
                   </Stack>

                   </Box>
                
                <Box className="layer" Variant='div' sx={{position:'absolute' , backgroundColor:'#f6004c' , width:'100%' , height:'100%' , zIndex:'2' , opacity:'0' , borderRadius:'15px' , transition:'all ease-in 0.1s' }}>
                </Box>
            </StyledSlider>
         
        </SwiperSlide>

        <SwiperSlide className={classes.swiperSlide}>
            <StyledSlider sx={{backgroundImage:`url(http://trydo.rainbowit.net/assets/images/portfolio/portfolio-2.jpg)` }} >

            <Box Variant="div" sx={{position:'absolute' , zIndex:'5' , width:'100%' , height:'100%' , boxSizing:'border-box'}}>
                 <Stack direction='column' justifyContent='flex-end' alignItems='center' sx={{width:'100%' , height:'100%'  }}>
                   <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' gap={2} sx={{marginBottom:"6rem"}}>
                   <Typography variant="h6" >Development</Typography>
                   <Typography variant='p' > Getting tickets to the big show</Typography>
                   <StyledButton variant="outlined">Case Study</StyledButton>
                   </Stack>
                   </Stack>

                   </Box>
                
                <Box className="layer" Variant='div' sx={{position:'absolute' , backgroundColor:'#f6004c' , width:'100%' , height:'100%' , zIndex:'2' , opacity:'0' , borderRadius:'15px' , transition:'all ease-in 0.1s' }}>
                </Box>
            </StyledSlider>
         
        </SwiperSlide>

        <SwiperSlide className={classes.swiperSlide}>
            <StyledSlider sx={{backgroundImage:`url(http://trydo.rainbowit.net/assets/images/portfolio/portfolio-3.jpg)` }} >

            <Box Variant="div" sx={{position:'absolute' , zIndex:'5' , width:'100%' , height:'100%' , boxSizing:'border-box'}}>
                 <Stack direction='column' justifyContent='flex-end' alignItems='center' sx={{width:'100%' , height:'100%'  }}>
                   <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' gap={2} sx={{marginBottom:"6rem"}}>
                   <Typography variant="h6" >Development</Typography>
                   <Typography variant='p' > Getting tickets to the big show</Typography>
                   <StyledButton variant="outlined">Case Study</StyledButton>
                   </Stack>
                   </Stack>

                   </Box>
                
                <Box className="layer" Variant='div' sx={{position:'absolute' , backgroundColor:'#f6004c' , width:'100%' , height:'100%' , zIndex:'2' , opacity:'0' , borderRadius:'15px' , transition:'all ease-in 0.1s' }}>
                </Box>
            </StyledSlider>
         
        </SwiperSlide>

        <SwiperSlide className={classes.swiperSlide}>
            <StyledSlider sx={{backgroundImage:`url(http://trydo.rainbowit.net/assets/images/portfolio/portfolio-4.jpg)` }} >

            <Box Variant="div" sx={{position:'absolute' , zIndex:'5' , width:'100%' , height:'100%' , boxSizing:'border-box'}}>
                 <Stack direction='column' justifyContent='flex-end' alignItems='center' sx={{width:'100%' , height:'100%'  }}>
                   <Stack direction='column' justifyContent='flex-start' alignItems='flex-start' gap={2} sx={{marginBottom:"6rem"}}>
                   <Typography variant="h6" >Development</Typography>
                   <Typography variant='p' > Getting tickets to the big show</Typography>
                   <StyledButton variant="outlined">Case Study</StyledButton>
                   </Stack>
                   </Stack>

                   </Box>
                
                <Box className="layer" Variant='div' sx={{position:'absolute' , backgroundColor:'#f6004c' , width:'100%' , height:'100%' , zIndex:'2' , opacity:'0' , borderRadius:'15px' , transition:'all ease-in 0.1s' }}>
                </Box>
            </StyledSlider>
         
        </SwiperSlide>

      </Swiper>


      </Box>
        <Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Box variant="section">
              <Typography variant="h4">Our Fun Facts</Typography>
            </Box>
            <Box variant="section">
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box sx={{ color: "#f9004d", width: "30%" }}>
                  <Stack
                    direction="column"
                    justifyContent="space-around"
                    alignContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                      199
                      <Typography
                        variant="sub"
                        sx={{
                          verticalAlign: "super",
                          fontSize: "smaller",
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </Typography>
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "rgba(29,29,36,.75)",
                        fontSize: "1rem",
                        width: "60%",
                        textAlign: "center",
                      }}
                    >
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those.
                    </Typography>
                  </Stack>
                </Box>

                <Box sx={{ color: "#f9004d", width: "30%" }}>
                  <Stack
                    direction="column"
                    justifyContent="space-around"
                    alignContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                      575
                      <Typography
                        variant="sub"
                        sx={{
                          verticalAlign: "super",
                          fontSize: "smaller",
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </Typography>
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "rgba(29,29,36,.75)",
                        fontSize: "1rem",
                        width: "60%",
                        textAlign: "center",
                      }}
                    >
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those.
                    </Typography>
                  </Stack>
                </Box>

                <Box sx={{ color: "#f9004d", width: "30%" }}>
                  <Stack
                    direction="column"
                    justifyContent="space-around"
                    alignContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                      69
                      <Typography
                        variant="sub"
                        sx={{
                          verticalAlign: "super",
                          fontSize: "smaller",
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </Typography>
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "rgba(29,29,36,.75)",
                        fontSize: "1rem",
                        width: "60%",
                        textAlign: "center",
                      }}
                    >
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those.
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Slider;
