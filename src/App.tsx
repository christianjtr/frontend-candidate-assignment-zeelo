import './App.css';
import MainPage from './pages/Main';
import BooksContext from './context/BooksContext';
import { findBooks } from './app/application/api/findBooks';

function App() {
  return (
    <BooksContext.Provider value={{ findBooks }}>
      <MainPage />
    </BooksContext.Provider>
  );
}

export default App;
