import Box from '@mui/material/Box';
import MessageBody from "./MessageBody";
import MessageButtons from "./MessageButtons";
import MessageFooter from "./MessageFooter";
import MessageHeader from "./MessageHeader";

function MessageTemplate() {
    return (
     <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            p:0,
            gap:24,
            width:360,
          /*   height:1233 */
        }}>
          <MessageHeader/>
          <MessageBody/>
          <MessageFooter/>
          <MessageButtons/>
      </Box>
    );
  }

  export default MessageTemplate;
  