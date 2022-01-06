import TourCard from './components/TourCard';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <Container className="App">
    <Grid container spacing={5}>
      <TourCard />
      <TourCard />
      <TourCard />
      <TourCard />
    </Grid>
    </Container>
  );
}

export default App;
