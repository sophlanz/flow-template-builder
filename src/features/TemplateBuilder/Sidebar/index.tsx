import MessageTemplate from "./components/MessageTemplate";
import { Box, Typography, alpha, Button, ThemeProvider }  from '@mui/material';
import SidebarCloseSvg from "./components/ui/SidebarCloseSvg";
import theme from '../../../styles/style'
function Sidebar() {
  console.log(theme.palette.secondary.main,)
  return (
    <>
    {/*Container for sidebar */}
     <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-start',
            width:360,
            height:'100vh',
            position:'absolute',
            top:0,
            left:0,
            bgcolor:alpha( "#FFFFFF",.08),
            boxShadow:'1px 0px 0px rgba(0, 0, 0, 0.08);',
            overflowY:'scroll'
        }}
      >
           {/*container for edit message and close icon */}
          <Box 
            sx={{
                display:'flex',
                flexDirection:'row',
                alignItems:'flex-start',
                p:0,
                height:40,
                alignSelf:'stretch',
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                gap:24
          }}
          >
                <Typography variant="h5"  width={296} height={31.14}textAlign="left"> Edit Message </Typography>
                <SidebarCloseSvg/>
          </Box>
          <MessageTemplate/>
          {/*Save and delete buttons */}
          <ThemeProvider theme={theme}>
                <Button variant="contained" color='secondary'
                sx={{
                  color:'#FFFFFF',
                  width:360,
                  height:36,
                  borderRadius:'4px',
                  textAlign:'center',
                  mb:12
                }}
                >SAVE</Button>
          </ThemeProvider>
          <Button variant="outlined"
            sx={{
              color:theme.palette.secondary.main,
              width:360,
              height:36,
              borderRadius:'4px',
              textAlign:'center',
              borderColor:theme.palette.secondary.main,
            }}
          >DELETE
          </Button>
      </Box>
    </>
  );
}

export default Sidebar;
