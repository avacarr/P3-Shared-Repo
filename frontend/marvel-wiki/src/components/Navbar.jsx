import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const NavbarContainer = styled.nav`
    background-color: #f78f3f;
    padding: 5px;
        ul{
            display: flex;
            justify-content: space-evenly;
        }

        li {
            list-style: none
        }
`

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <NavbarContainer>
        <ul>
            <li> <Link to='/'> Home </Link></li>
            <li> <Link to='/events'> Events </Link></li>
            <li> <Link to='/search'> Search </Link> </li>
            <li> <Link to='/favorites'> Favs </Link> </li>
            <li> Log Out </li>
        </ul>
    </NavbarContainer>
  )
}

export default Navbar