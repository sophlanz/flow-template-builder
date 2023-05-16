import Sidebar from './Sidebar';
import MessageNode from './MessageNode';
import { Box } from '@mui/material';
function TemplateBuilder() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        // Media query, column, stack sidebar ontop of messag node
        '@media screen and (max-width: 768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <Sidebar />
      <MessageNode />
    </Box>
  );
}

export default TemplateBuilder;
