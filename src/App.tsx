import { HashRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Header, Body } from '@components/Layout';
import { Toaster } from 'sonner';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Body>
        <AppRoutes />
      </Body>
      <Toaster />
    </Router>
  );
}

export default App;
