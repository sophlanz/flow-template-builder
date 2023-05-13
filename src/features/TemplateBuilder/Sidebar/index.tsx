import MessageTemplate from "./components/MessageTemplate";
import { Box, Typography, alpha }  from '@mui/material';
import SidebarCloseSvg from "./components/ui/SidebarCloseSvg";
function Sidebar() {
  return (
    <>
    {/*Container for sidebar */}
     <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-start',
            width:360,
            height:1273,
            bgcolor:alpha( "#FFFFFF",.08),
            boxShadow:'1px 0px 0px rgba(0, 0, 0, 0.08);'
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
      </Box>
    </>
  );
}

export default Sidebar;
