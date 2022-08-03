import React from 'react'
import queryString from 'query-string'
import CharacterListContainer from '../components/CharacterListContainer'
import { params } from '../App'


const CharacterListView = ({ match, location, history, params, setPage, page}) => {
  //const params = queryString.parse(location.search)
  return (  <div className='container-fluid'>
    <CharacterListContainer
      //page={parseInt(params.page, 10) || 1}
      //term={params.query || undefined}
      match={match}
      history={history}
      location={location}
      setPage={setPage}
      page={page}
    />
  </div>
  )
}

export default CharacterListView



// WEBPACK FOOTER //
// ./src/pages/CharacterList.js