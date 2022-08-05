import React from 'react'
import marvel_logo from '../assets/images/marvel_logo.png'
import styled from 'styled-components'
import LoginGoogle from './Login'
import LogoutGoogle from './Logout'
import { Link } from 'react-router-dom'
import '../App.css'

const NavbarContainer = styled.nav`
    background-color: #ff8b00;
    padding: 8px;
    @font-face {
        font-family: 'Marvel';
        src: url(../Marvel.ttf) format('truetype');
            }
        ul {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            
        }
        li {
            list-style: none;
            font-size: 3vw;
            font-family: 'Marvel';
            font-weight: normal;
            
            :hover {
                background-color: red;
              }
        unstyled {
                background-color: transparent;
        }
`

const Image = styled.img`
    width: 15%;
    float: left;
    margin-right: 15px;
`

const Navbar = () => {
    var test = localStorage.getItem('user')

    const linkStyle = {
        textDecoration: 'none'
    }

  return (
    <NavbarContainer>
        <ul>

            <Image src={marvel_logo} alt=''/>
            <div className='home'>
                <li> <Link to='/Home' style={linkStyle}> HOME </Link></li>
            </div>
            <div className='characters'>
                <li> <Link to='/characters' style={linkStyle}> CHARACTERS </Link></li>
            </div>
            <div className='comics'>
                <li> <Link to='/comics' style={linkStyle}> COMICS </Link></li>
            </div>
            <div className='series'>
                <li> <Link to='/series' style={linkStyle}> SERIES </Link> </li>
            </div>
            <div className='events'>
                <li> <Link to='/events' style={linkStyle}> EVENTS </Link> </li>
            </div>
        <li> {test !== "" ? <LogoutGoogle /> : <LoginGoogle />} </li>
        </ul>
    </NavbarContainer>
  )
}

export default Navbar