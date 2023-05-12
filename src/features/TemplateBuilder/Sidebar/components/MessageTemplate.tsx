import Box from '@mui/material/Box';
import MessageBody from "./MessageBody";
import MessageButtons from "./MessageButtons";
import MessageFooter from "./MessageFooter";
import MessageHeader from "./MessageHeader";

function MessageTemplate() {
    return (
     <>
          <MessageHeader/>
          <MessageBody/>
          <MessageFooter/>
          <MessageButtons/>
      </>
    );
  }

  export default MessageTemplate;
  