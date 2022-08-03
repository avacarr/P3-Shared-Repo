import React, { useState, useEffect } from 'react'
import Search from '../components/SearchItem'
import axios from 'axios'

const publicKey = 'd17831e3dfc8de4dd77288bbf359d75c'
const hash = '02c16f75a7739fec4472131e268997a6'

const SearchPage = ({search}) => {
  const [query,setQuery] = useState('')
  const [result, setResult] = useState('')

  useEffect(()=>{
    const fetch = async()=>{
    if(query!==''){
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${publicKey}&hash=${hash}`)
          console.log(result)
          setResult(result)
    }
  } 
  fetch()
  },[query])

    return (
        <section className="search">
            <Search search={(q)=>setQuery(q)}/>
        </section>
  )
} 

export default SearchPage