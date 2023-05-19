import Box from '@mui/material/Box';
import MessageBody from '../MessageBody/MessageBody';
import MessageButtons from '../MessageButtons/MessageButtons';
import MessageFooter from '../MessageFooter/MessageFooter';
import MessageHeader from '../MessageHeader/MessageHeader';

function MessageTemplate() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 0,
        gap: 24,
        width: 360,
        overflowY: 'scroll',
      }}
    >
      <MessageHeader />
      <MessageBody />
      <MessageFooter />
      <MessageButtons />
    </Box>
  );
}

export default MessageTemplate;
