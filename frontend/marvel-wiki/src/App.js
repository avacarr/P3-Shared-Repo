
import './App.css';
import backgroundimage from './assets/images/background_image.png'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Login from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import ResultsPage from './pages/ResultsPage';
import Home from './pages/Home';
import ComicListView from './pages/ComicList'
import ComicView from './pages/Comic'
import SeriesListView from './pages/SeriesList'
import SeriesView from './pages/Series'
import CharacterListView from './pages/CharacterList'
import CharacterView from './pages/Character'
import EventListView from './pages/EventList'
import EventView from './pages/Event'
import SearchView from './pages/SearchPage'
import React, {useState, useEffect} from 'react'
import AppContainer from './components/AppContainer'
import axios from 'axios'
import Navbar from './components/Navbar'
import { gapi } from 'gapi-script'



function App() {

const [page, setPage] = useState(1);
const [comments, setComments] = useState()

useEffect(() => {
  fetch('http://localhost:3001/comments')
  .then( res => res.json())
  .then( data => setComments(data))
}, [])

let history = useNavigate()

let CLIENT_ID = '269560164013-j47b3davb459opfn0da9tb6rqkukv9rq.apps.googleusercontent.com'
    

const appStyle = {
  backgroundImage: `url(${backgroundimage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachement: 'fixed'
}


  return (
      <div className='App' style={appStyle}>
        <header><Navbar /></header>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home"/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/characters' element={<CharacterListView history={history} page={page} setPage={setPage}/>}/>
          <Route path='/characters/:charId' element={<CharacterView comments={comments} />}/>
          <Route path='/comics' element={<ComicListView history={history} page={page} setPage={setPage}/>}/>
          <Route path='/comics/:comId' element={<ComicView comments={comments} />}/>
          <Route path='/series' element={<SeriesListView history={history} page={page} setPage={setPage}/>}/>
          <Route path='/series/:serId' element={<SeriesView comments={comments} />}/>
          <Route path='/events' element={<EventListView history={history} page={page} setPage={setPage}/>}/>
          <Route path='/events/:eveId' element={<EventView comments={comments} />}/>
          <Route path='/search' element={<SearchView history={history} page={page} setPage={setPage}/>}/>
        </Routes>
      </div>
  );
}

export default App;

// WEBPACK FOOTER //
// ./src/App.js
