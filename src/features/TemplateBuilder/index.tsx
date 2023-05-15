import Sidebar from "./Sidebar";
import MessageNode from "./MessageNode";
import { Box } from '@mui/material'
function TemplateBuilder() {
    return (
      <Box
        sx={{
            display:'flex',
        }}>
        <Sidebar/>
        <MessageNode/>
      </Box>
    );
  }
  
  export default TemplateBuilder;
  