import TemplateBuilder from "../features/TemplateBuilder/index";
import { Container, Typography } from '@mui/material';
function Home() {
  return (
    <Container>
        <Typography variant="h2">Connectly Template Builder</Typography>
        <TemplateBuilder/>
    </Container>
  );
}

export default Home;
