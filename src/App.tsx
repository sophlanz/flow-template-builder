import { lazy, Suspense } from 'react';
import { Typography } from '@mui/material';
const Home = lazy(() => import('./pages/Home'));
function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <Typography
            variant="h1"
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
              color: 'blue',
            }}
          >
            Template Builder
          </Typography>
        }
      >
        <Home />
      </Suspense>
    </div>
  );
}
export default App;
