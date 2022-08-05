import React from 'react'
import queryString from 'query-string'
import SeriesListContainer from '../components/SeriesListContainer'
import { params } from '../App'


const SeriesListView = ({ match, location, history, params, setPage, page}) => {
  //const params = queryString.parse(location.search)
  return (  <div className='container-fluid'>
    <SeriesListContainer
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

export default SeriesListView
