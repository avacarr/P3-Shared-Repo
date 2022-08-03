import React from 'react'
import { useNavigate } from 'react-router-dom'
import EventItem from '../components/EventItem'
import Navbar from '../components/Navbar'


const Events = ({
  eventsPage1
}) => {
    const navigate = useNavigate()
    
  return (
    <section className='container'> 
    <Navbar />
      {
        eventsPage1.map(item=>(
          <EventItem key={item.id} item={item} />
        ))
      }
    </section>
  )
}

export default Events