import React from 'react'
import CharacterContainer from '../components/CharacterContainer'
import { useParams } from 'react-router-dom';



const CharacterView = ({match}) => (
  <div className='container-fluid'>
    <CharacterContainer />
  </div>
)

export default CharacterView



// WEBPACK FOOTER //
// ./src/pages/Character.js