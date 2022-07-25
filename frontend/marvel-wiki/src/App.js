
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import Favorites from './pages/Favorites';
import ResultsPage from './pages/ResultsPage';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home />} 
        ></Route>
        <Route path='/search' element={ <SearchPage /> } ></Route>
        <Route path='/favorites' element={ <Favorites /> } ></Route>
        <Route path='/results' element={ <ResultsPage /> } ></Route>
        <Route path='/details:id' element={ <Details /> } ></Route>
        
      </Routes>
    </div>
  );
}

export default App;
