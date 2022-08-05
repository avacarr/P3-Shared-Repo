import React from 'react'
import ComicContainer from '../components/ComicsContainer'
import { useParams } from 'react-router-dom';



const ComicView = ({match, comments}) => (
  <div className='container-fluid'>
    <ComicContainer comments={comments} />
  </div>
)

export default ComicView