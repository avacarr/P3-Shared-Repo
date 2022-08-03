import { useNavigate } from 'react-router-dom'
import React from 'react'
import queryString from 'query-string'
import CharacterListContainer from '../components/CharacterListContainer'
import styled from 'styled-components'

const HomeContainer = styled.h1`
    background-color: #266ef6;
    h1 {
      
    }

`
const BodyContainer = styled.p`
    background-color: #e429f2;
`
const FootieContainer = styled.p`
    background-color: #ff0130;
`

const TopPageContainer = styled.body`
    background-color: #12e772;
`
const BottomPageContainer = styled.body`
    background-color: #ffd300;
`

// const BackgroundImage = styled.background`
//     -webkit-background-size: cover;
//     -moz-background-size: cover;
//     -o-background-size: cover;
//     background-size: cover;
// `

const Home = ({ match, location, history }) => {
  // const params = queryString.parse(location.search)
  return (
  <>
  <TopPageContainer>
    <HomeContainer>
      {/* <BackgroundImage src="../../assets/images/background_image.png"/> */}
      <div className= 'home-title'>
      <h3>This is the Marvel Character Wiki made by the Fantastic Four (not the super group, but the programming team)</h3>
      </div>
    </HomeContainer>
    <BodyContainer>
      
        <p>Our Wiki is here so that you, our users, can search an extended database of Marvel Characters and their related events from the comics, the video games, and the movies all at once.
          Now that you are signed in, please browse our library supplied to us from the official Marvel API. Who are your favorites? Who have you never heard of before?</p>
      </BodyContainer>
    </TopPageContainer>
    <BottomPageContainer>
      Test
    </BottomPageContainer>
      <FootieContainer>
        <p>We, Alex Carr, Damian Fletcher, Eric Pettaway, and Jeremy Currier A.K.A. the Fantastic Four, are a group of four programmers in the General Assembly Part-time Full Stack immersive course.</p>
      </FootieContainer>
  </>
  )
}

export default Home