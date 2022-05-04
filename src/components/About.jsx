import { Box, Stack, Typography } from "@mui/material";
import { styled} from '@mui/material/styles'


const StyledImgContainer = styled(Box)(({theme}) => ({
    maxWidth:"100%",
    maxHeight:"100%",
    position: 'relative',
    zIndex:"2",
    bottom:"20%",
    left:"23%",
    backgroundColor:"transparent",
    "& img": {
        maxWidth:"100%",
        maxHeight:"100%",
        borderRadius:'12px'

    }
}))

const About = () => {
  return (
    <Box Variant="div" sx={{marginTop:"2rem"}}>
      <Stack direction="row"  justifyContent="center" alignItmes="center" gap={2}>
        <Box Variant="div" sx={{
         width:"100%"   }}>
          <StyledImgContainer Variant="div">
            <img
              src="http://trydo.rainbowit.net/assets/images/about/about-1.jpg"
              alt="nature"
            />
          </StyledImgContainer>
        </Box>


        <Box Variant="div" sx={{
            maxWidth:"58%",
            paddingTop:"3rem",
            paddingRight:"1rem"
        }}>
          <Stack direction="column" alignItems="flex-start" justifyContent="space-around" gap={2}>
              <Box Variant="div" sx={{marginBottom:'2rem',
            maxWidth:"70% "}}>
              <Typography variant="h3" sx={{fontWeight:"bold"}}>About</Typography>
            <Typography Variant="p">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum,
            </Typography>
              </Box>


     

          <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={0}>
          <Box  sx={{width:'60%'}}>
            <Stack direction="column" justifyContent="flex-start" gap={1} sx={{width:'70%'}} >
                <Typography  variant="h4">Who we are</Typography>
                <Typography variant="p">There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</Typography>
            </Stack>
            </Box>

            <Box  sx={{width:'60%'}}>
            <Stack direction="column" justifyContent="flex-start" gap={1} sx={{width:'70%'}} >
                <Typography variant="h4">Who we are</Typography>
                <Typography  variant="p">There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</Typography>
            </Stack>
            </Box>

          </Stack>

          </Stack>
        </Box>
      </Stack>

    </Box>
  );
};

export default About;
