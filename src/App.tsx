import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/Home'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading..</div>}>
        <Home />
      </Suspense>
    </div>
  );
}
export default App;
