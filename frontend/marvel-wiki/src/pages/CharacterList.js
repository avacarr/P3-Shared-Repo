import React from 'react'
import queryString from 'query-string'
import CharacterListContainer from '../components/CharacterListContainer'
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components'
//import { params } from '../App'

const CharacterStyle = styled.body`
  font-style: normal;
`

const CharacterListView = ({ match, location, history, setPage, page}) => {
  const params = queryString.parse(location)
  return (  <div className='container-fluid'>
    <CharacterListContainer
      match={match}
      history={history}
      location={location}
      setPage={setPage}
      page={parseInt(page, 10)|| 1}
    />
  </div>
  )
}

export default CharacterListView



// WEBPACK FOOTER //
// ./src/pages/CharacterList.js