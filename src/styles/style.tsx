import { createTheme, alpha } from '@mui/material';
const theme = createTheme({
    palette: {
        //blacks and greys
        primary: {
            //main text coloor black
            main:alpha("#000000", 0.87),
            //divider
            light:"#FFFFFF"
            
        },
        //blues
        secondary:{
            main:"#007DFF",
            light:alpha("#007DFF",0.5)
        },
       
    },
    typography: {
        fontFamily: "Roboto",
        /*edit the default h6 variant values*/
        h6:{
            fontWeight:500,
            fontSize:16,
            lineHeight:"19px",
            letterSpacing:.15,
        },
    },
    /*padding and margin values will be multiplied by 1 */
    spacing:1,
    /*to be able to use flex-box gap property */
    components: {
        MuiStack: {
          defaultProps: {
            useFlexGap: true,
          },
        },
      },
   
});

export default theme;

  