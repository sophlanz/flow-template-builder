import TemplateBuilder from "../features/TemplateBuilder/index";
import { Container, Typography } from '@mui/material';
function Home() {
  return (
    <Container>
       {/*  <Typography variant="h3">WhatsApp Campaign Creation</Typography> */}
        <TemplateBuilder/>
    </Container>
  );
}

export default Home;
