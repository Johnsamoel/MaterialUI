import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


const StyledImgContainer = styled(Box)( ({theme}) =>({
    '&:hover':{
        'img':{
            Animation:`scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
	       Transform:`scale(1)`
        },
        
    }
}))

const StyledTypo = styled(Typography)(({ theme }) => ({
  color: "#18181b",
  textAlign: "center",
  fontSize: "2rem",
  padding: "0 9%",
  lineHeight: "58px",
  fontWeight: "500px",
  width: "70%",
  "&::before": {
    backgroundImage: `url(http://trydo.rainbowit.net/assets/images/client/image-2.png)`,
    backgroundRepeat: "no-repeat",
  },
  "&::after": {
    backgroundImage: `url(http://trydo.rainbowit.net/assets/images/client/image-2.png)`,
    backgroundRepeat: "no-repeat",
  },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",
  "&::before": {
    backgroundImage: `url(http://trydo.rainbowit.net/assets/images/client/image-2.png)`,
    backgroundRepeat: "no-repeat",
  },
  "&::after": {
    backgroundImage: `url(http://trydo.rainbowit.net/assets/images/client/image-2.png)`,
    backgroundRepeat: "no-repeat",
  },
}));

const Standard = () => {
  return (
    <Box
      variant="section"
      sx={{
        backgroundColor: "#f8f9fc",
        paddingBottom: "10rem",
        paddingTop: "10rem",
      }}
    >
      <StyledStack
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <StyledTypo variant="p">
          Aklima The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections Bonorum et Malorum
          original.
        </StyledTypo>

        <Typography variant="span" sx={{ color: "#18181b" }}>
          AKLIMA
          <Typography
            variant="h6"
            sx={{ display: "inline-block", color: "#8c8c8c", fontSize: "1rem" }}
          >
            {" "}
            - COO, AMERIMAR ENTERPRISES, INC.
          </Typography>
        </Typography>

        <Stack
          justifyContent="center"
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
          sx={{ width: "30%" }}
        >
          <StyledImgContainer>
            <img
              src="http://trydo.rainbowit.net/assets/images/client/testimonial-1.jpg"
              alt="person"
            />
          </StyledImgContainer>
          <Box>
            <img
              src="http://trydo.rainbowit.net/assets/images/client/testimonial-2.jpg"
              alt="person"
            />
          </Box>
          <Box>
            <img
              src="http://trydo.rainbowit.net/assets/images/client/testimonial-3.jpg"
              alt="person"
            />
          </Box>
          <Box>
            <img
              src="http://trydo.rainbowit.net/assets/images/client/testimonial-4.jpg"
              alt="person"
            />
          </Box>
          <Box>
            <img
              src="http://trydo.rainbowit.net/assets/images/client/testimonial-5.jpg"
              alt="person"
            />
          </Box>
          <Box>
            <img
              src="http://trydo.rainbowit.net/assets/images/client/testimonial-6.jpg"
              alt="person"
            />
          </Box>
          <Box>
            <img
              src="http://trydo.rainbowit.net/assets/images/client/testimonial-7.jpg"
              alt="person"
            />
          </Box>
          <Box>
            <img
              src="http://trydo.rainbowit.net/assets/images/client/testimonial-8.jpg"
              alt="person"
            />
          </Box>
        </Stack>
      </StyledStack>
    </Box>
  );
};

export default Standard;
