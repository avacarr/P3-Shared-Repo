import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarContainer = styled.nav`
    background-color: #ff8b00;
    padding: 5px;
        ul {
            display: flex;
            justify-content: space-evenly;
        }
        li {
            list-style: none;
        }
`

const Image = styled.img`
    width: 15%;
    float: left;
    margin-right: 15px;
`

const Navbar = () => {
    
  return (
    <NavbarContainer>
        <ul>

            <Image src="../../assets/images/marvel_logo.png"/>
            <li> <Link to='/Home'> Home </Link></li>
            <li> <Link to='/Characters'> Characters </Link></li>
            <li> <Link to='/events'> Events </Link></li>
            <li> <Link to='/search'> Search </Link> </li>
            <li> <Link to='/favorites'> Favs </Link> </li>
            <li> <Link to='/'> Logout </Link> </li>
        </ul>
    </NavbarContainer>
  )
}

export default Navbar