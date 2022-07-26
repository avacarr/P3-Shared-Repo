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
            <li> Home </li>
            <li> Search </li>
            <li> Favs </li>
            <li> Log Out </li>
        </ul>
    </NavbarContainer>
  )
}

export default Navbar