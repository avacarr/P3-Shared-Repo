import React from 'react'
import { useNavigate } from 'react-router-dom'
import CharacterItem from '../components/CharacterItem'


const Home = ({
  charactersPage1, 
  charactersPage2,
  charactersPage3,
  charactersPage4,
  charactersPage5,
  charactersPage6,
  charactersPage7,
  charactersPage8,
  charactersPage9,
  charactersPage10,
  charactersPage11,
  charactersPage12,
  charactersPage13,
  charactersPage14,
  charactersPage15,
  charactersPage16
}) => {
    const navigate = useNavigate()
    
  return (
    <section className='container'> 
    <form action='/events'> <input type='submit' value='Events'/></form>
      {
        charactersPage1.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage2.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage3.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage4.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage5.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage6.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage7.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage8.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage9.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage10.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage11.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage12.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage13.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage14.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage15.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
      {
        charactersPage16.map(item=>(
          <CharacterItem key={item.id} item={item} />
        ))
      }
    </section>
  )
}

export default Home