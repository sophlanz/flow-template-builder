import { createTheme, alpha } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main:alpha("#000000", 0.87)
        },
        secondary:{
            
            main:alpha( "#FFFFFF",.08)
        }
    },
    typography: {
        fontFamily: "Roboto"
    },
    spacing:1,
   
});
export default theme;