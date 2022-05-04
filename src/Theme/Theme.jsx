import { createTheme } from "@mui/material/styles";



export const Theme = createTheme(  {
    typography:{
        h1:{
            color:"transparent",
            background:"linear-gradient(145deg, rgb(248, 31, 1), rgb(238, 7, 110)) ",
            backgroundClip: "text",
            TextFillColor: "transparent",
            textTransform: "uppercase",
            fontWeight: "900px",
            fontFamily:"Montserrat,sans-serif",
            fontSize: "6rem",
            alignItems:"center",
            paddingLeft: "5rem",
            BackgroundClip:"text",


        }
    },

    Button:{
        color: `#c6c9d8 `,
        border:`1px solid #c6c9d8`,
      
        '&:hover':{
          color: `#f9004d`,
          border:` 1px solid #f9004d`
        }
    }
})