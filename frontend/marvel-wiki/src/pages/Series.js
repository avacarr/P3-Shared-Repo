import React from 'react'
import SeriesContainer from '../components/SeriesContainer'
import { useParams } from 'react-router-dom';



const SeriesView = ({match, comments}) => (
  <div className='container-fluid'>
    <SeriesContainer comments={comments} />
  </div>
)

export default SeriesView