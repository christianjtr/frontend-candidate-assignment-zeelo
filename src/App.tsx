import { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Header, Body } from '@components/Layout';
import { LoaderSpinner } from '@components';
import { Toaster } from 'sonner';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Body>
        <Suspense fallback={<LoaderSpinner />}>
          <AppRoutes />
        </Suspense>
      </Body>
      <Toaster />
    </Router>
  );
}

export default App;
