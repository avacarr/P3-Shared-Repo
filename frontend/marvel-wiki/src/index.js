import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContainer from './components/AppContainer'
import CharacterView from './pages/Character'
import CharacterListView from './pages/CharacterList'
import LoginGoogle from './components/Login'
import LogoutGoogle from './components/Logout.js'
import Login from './pages/LoginPage';


const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App name='Marvel'/>)
root.render(<App name='Marvel Update' />)

root.render(
    <Router>
      <App>
      </App>
    </Router>
)

//root.render(appElement, MOUNT_NODE)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
