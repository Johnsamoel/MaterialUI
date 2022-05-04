import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CastIcon from "@mui/icons-material/Cast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup ,  faUserGroup , faTv} from '@fortawesome/free-solid-svg-icons';



const StyledSection = styled(Box)(({theme}) => ({
  padding:'1rem',
  width:'50%',
  '&:hover':{
    background:"linear-gradient(145deg, rgb(248, 31, 1), rgb(238, 7, 110)) ",
    borderRadius:'10px',
    color:'#fff',
    backgroundColor:'#ca3c08',
    backGround:'inear-gradient(90deg,#f61b10,#ef0963)',
    '& p':{
      color:'#fff'
    },
    '& svg':{
      color:'#fff'
    },
    '& div':{
      backgroundColor:'inear-gradient(90deg,#f61b10,#ef0963)'
    }
  }
}))

const ServiceButton = styled(Button)(({ theme }) => ({
  color: "#1f1f25",
  padding: "0px",
  borderRadius: "0px",
  paddingBottom: "2px",
  margin: "0px",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#f9004d",
    borderBottom: "2px solid #f9004d",
  },
}));

const Services = () => {
  return (
    <Box
      Variant="div"
      sx={{
        backgroundImage: `url("http://trydo.rainbowit.net/assets/images/bg/bg-image-3.jpg")`,
        paddingTop: "5rem",
        paddingRight:'10rem',
        paddingLeft:'10rem',
        paddingBottom:'5rem'
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Box Variant="div" sx={{ height: "400px" }}>
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            gap={2}
          >
            <Typography
              Variant="h2"
              sx={{ fontWeight: "bold", fontSize: "3rem" }}
            >
              Services
            </Typography>
            <Typography
              Variant="p"
              sx={{ color: `rgba(29,29,36,.75)`, width: "50%" }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </Typography>
            <ServiceButton>Request Custom Service</ServiceButton>
          </Stack>
        </Box>
        <Box Variant="div">
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            gap={3}
          >
            {/* row one */}
            <Box >
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <StyledSection sx={{ width: "50%" }}>
                  <Stack
                    direction="column"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    gap={2}
                  >
                    <CastIcon
                      sx={{
                        fontSize: "3rem",
                        color: `#f9004d`,
                        stroke: `1rem !important`,
                      }}
                    />
                    <Typography
                      Variant="h3"
                      sx={{ fontSize: "1.3rem", fontWeight: "500px" }}
                    >
                      Business strategy
                    </Typography>
                    <Typography
                      Variant="p"
                      sx={{ width: "60%", color: `rgba(29,29,36,.75)` }}
                    >
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </Typography>
                  </Stack>
                </StyledSection>


                <StyledSection sx={{ width: "50%" }}>
                  <Stack
                    direction="column"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    gap={2}
                  >
                    <FontAwesomeIcon icon={faLayerGroup} fontSize='2.5rem' color="#f9004d"  />
                    <Typography Variant="h3"  sx={{ fontSize: "1.3rem", fontWeight: "500px" }}>Website Development</Typography>
                    <Typography
                      Variant="p"
                      sx={{ width: "60%", color: `rgba(29,29,36,.75)` }}
                    >
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </Typography>
                  </Stack>
                </StyledSection>
              </Stack>
            </Box>

            {/* row two */}
            <Box >
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <StyledSection sx={{ width: "50%" }}>
                  <Stack
                    direction="column"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    gap={2}
                  >

                    <FontAwesomeIcon icon={faUserGroup} fontSize='2.5rem' color="#f9004d"  />

                    <Typography
                      Variant="h3"
                      sx={{ fontSize: "1.3rem", fontWeight: "500px" }}
                    >
                      Business strategy
                    </Typography>
                    <Typography
                      Variant="p"
                      sx={{ width: "60%", color: `rgba(29,29,36,.75)` }}
                    >
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </Typography>
                  </Stack>
                </StyledSection>

                <StyledSection Variant="div">
                  <Stack
                    direction="column"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    gap={2}
                  >
              
                    <FontAwesomeIcon icon={faTv}  fontSize='2.5rem' color="#f9004d" />
                    <Typography Variant="h3"  sx={{ fontSize: "1.3rem", fontWeight: "500px" }}>Website Development</Typography>
                    <Typography
                      Variant="p"
                      sx={{ width: "60%", color: `rgba(29,29,36,.75)` }}
                    >
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </Typography>
                  </Stack>
                </StyledSection>


              </Stack>
            </Box>
            
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Services;
