import React from 'react'
import Container from './Container'
import Row from './Row'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import marvel_logo from '../assets/images/marvel_logo.png'
import '../App.css'

const FooterContainer = styled.nav`
    background-color: #808080;
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
            font-size: 1.5vw;
            font-family: 'Marvel';
            font-weight: normal;
            text-decoration: none
            
        }
`

const Image = styled.img`
    width: 7%;
    float: left;
    margin-right: 0px;
`

const Footer = () => (
  <FooterContainer classNames={'footer'}>
    <Row>
      <div className='col-xs-12'>
      <Image src={marvel_logo} alt=''/><br/>
        <a href="http://marvel.com">Data provided by MARVEL. © {new Date().getFullYear()} MARVEL</a><br/>
        <a href="http://developer.marvel.com">developer.marvel.com</a>
        <ul className='list-inline'>
        <li><Link to='/'style={{ textDecoration: 'none' }}>HOME</Link></li>
        <li><Link to='/characters'style={{ textDecoration: 'none' }}>CHARACTERS</Link></li>
        <li><Link to='/comics'style={{ textDecoration: 'none' }}>COMICS</Link></li>
        <li><Link to='/series'style={{ textDecoration: 'none' }}>SERIES</Link></li>
        <li><Link to='/events'style={{ textDecoration: 'none' }}>EVENTS</Link></li>
        </ul>
      </div>
    </Row>
  </FooterContainer>
)

export default Footer