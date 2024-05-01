import { HashRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Header, Body } from '@components/Layout';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Body>
          <AppRoutes />
        </Body>
      </Router>
    </>
  );
}

export default App;
