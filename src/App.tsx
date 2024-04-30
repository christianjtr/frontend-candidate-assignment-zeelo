import { HashRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import BooksContext from './context/BooksContext';
import { findBooks } from './app/application/api/findBooks';
import './App.css';

function App() {
  return (
    <BooksContext.Provider value={{ findBooks }}>
      <Router>
        <AppRoutes />
      </Router>
    </BooksContext.Provider>
  );
}

export default App;
