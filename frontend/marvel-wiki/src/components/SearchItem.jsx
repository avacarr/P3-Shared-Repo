import React, { useState } from 'react'
import Navbar from './Navbar'


const SearchItem = ({search}) => {
    const[text,setText] = useState('')

    const onSearch= (q)=>{
      setText(q)
      search(q)
  }

    return (
        <section className="search">
          <Navbar/>
            <form>
                <input type="text"
                className="form-control"
                placeholder="Find a character"
                autoFocus
                onChange={(e)=>onSearch(e.target.value)}
                value={text}/>
            </form>
        </section>
  )
} 

export default SearchItem