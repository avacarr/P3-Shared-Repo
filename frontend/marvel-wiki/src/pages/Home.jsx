import { useNavigate } from 'react-router-dom'
import React from 'react'
import queryString from 'query-string'
import CharacterListContainer from '../components/CharacterListContainer'
import styled from 'styled-components'
import backgroundimage from '../assets/images/background_image.png'
import Footer from '../components/Footer'
import Image from '../assets/images/assemble.png'


const HomeContainer = styled.h2`
    background-color: #266ef6;
    text-align: center;
    letter-spacing: 2px;
`

const BodyContainer = styled.h2`
    background-color: #e429f2;
    text-align: center;
    letter-spacing: 2px;
`

const FootieContainer = styled.h2`
    background-color: #ff0130;
    text-align: center;
    letter-spacing: 2px;
`

const TopPageContainer = styled.body`
    background-color: #12e772;
    text-align: center;
`

const BottomPageContainer = styled.body`
    background-color: #ffd300;
    text-align: center;
    
  `

const BackgroundImage = styled.img`
  backgroundImage: url(${backgroundimage});
  height: 50vw;
`

const imgStyle = {
  height: '30vw',
  width: '100%'
}

const Home = ({ match, location, history }) => {
  // const params = queryString.parse(location.search)
  return (
    <div>
      <img src={Image} style={imgStyle}/>
      <BottomPageContainer>
        <TopPageContainer>
          <HomeContainer>
            <div className= 'home-title'>
              <h2>THIS IS THE MARVEL CHARACTER WIKI MADE BY THE FANTASTIC FOUR, NO NOT THE SUPER GROUP, BUT THE PROGRAMMING TEAM</h2>
            </div>
          </HomeContainer>
          <BodyContainer>
          <p>OUR WIKI IS HERE SO THAT YOU, OUR USERS, CAN SEARCH AN EXTENDED DATABASE OF MARVEL CHARACTERS AND THEIR RELATED EVENTS FROM THE COMICS, THE VIDEO GAMES, AND THE MOVIES ALL AT ONCE.
            NOW THAT YOU ARE SIGNED IN, PLEASE BROWSE OUR LIBRARY SUPPLIED TO US FROM THE OFFICIAL MARVEL API. WHO ARE YOUR FAVORITES? WHO HAVE YOU NEVER HEARD OF BEFORE?</p>
          </BodyContainer>
        </TopPageContainer>
        <FootieContainer>
          <p>WE, ALEX CARR, DAMIAN FLETCHER, ERIC PETTAWAY, AND JEREMY CURRIER A.K.A. THE FANTASTIC FOUR, ARE A GROUP OF FOUR PROGRAMMERS IN THE GENERAL ASSEMBLY PART-TIME FULL STACK IMMERSIVE COURSE.</p>
        </FootieContainer>
      </BottomPageContainer>
      <BackgroundImage />
      <Footer/>
    </div>
  )
}

export default Home


