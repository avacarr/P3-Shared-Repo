
import './App.css';
import { Route, Routes, useNavigate, useParams, Navigate } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Login from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import Favorites from './pages/Favorites';
import ResultsPage from './pages/ResultsPage';
import Details from './pages/Details';
import Events from './pages/Events'
import Home from './pages/Home';
import CharacterListView from './pages/CharacterList'
import CharacterView from './pages/Character'
import React, {useState, useEffect} from 'react'
import AppContainer from './components/AppContainer'
import axios from 'axios'
import LoginGoogle from './components/Login'
import LogoutGoogle from './components/Logout.js'
import Navbar from './components/Navbar'
import { gapi } from 'gapi-script'



function App() {

const [page, setPage] = useState(1);

let history = useNavigate()
let params=useParams()
let { charId } = useParams()

  

let CLIENT_ID = '269560164013-j47b3davb459opfn0da9tb6rqkukv9rq.apps.googleusercontent.com'
    


  return (
      <div className='app'>
        <header><Navbar /></header>
        <Routes>
          <Route path="/" element={<Navigate replace to="/characters"/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/characters' element={<CharacterListView history={history} params={params} page={page} setPage={setPage}/>}/>
          <Route path='/characters/:charId' element={<CharacterView params={params}/>}/>
        </Routes>
      </div>
  );
}

export default App;

// WEBPACK FOOTER //
// ./src/App.js
