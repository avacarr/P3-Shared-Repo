import React from 'react'
import CharacterContainer from '../components/CharacterContainer'
import { useParams } from 'react-router-dom';



const CharacterView = ({match, comments}) => (
  <div className='container-fluid'>
    <CharacterContainer comments={comments} />
  </div>
)

export default CharacterView



// WEBPACK FOOTER //
// ./src/pages/Character.js