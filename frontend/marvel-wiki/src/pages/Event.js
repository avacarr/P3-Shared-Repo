import React from 'react'
import EventContainer from '../components/EventContainer'
import { useParams } from 'react-router-dom';



const EventView = ({match, comments}) => (
  <div className='container-fluid'>
    <EventContainer comments={comments} />
  </div>
)

export default EventView