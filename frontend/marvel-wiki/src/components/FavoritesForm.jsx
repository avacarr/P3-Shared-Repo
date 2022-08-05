
import React from 'react'
import Star from '../assets/images/star.png'
import Unstar from '../assets/images/unstar.png'

let StarURL
let list

const Favorite = (props) => {
  var test = localStorage.getItem('user')
  if (test) { var user = JSON.parse(test)}

    if (user && JSON.stringify(user.favorites).includes(props.id)) {
      StarURL = Star
    } else {
      StarURL = Unstar
    }

    const handleClick = () => {
      if (props.type) {
        //alert(user.favorites)
        if (JSON.stringify(user.favorites).includes(props.id)) {
          // console.log("props.type", props.type)
          if (props.type === "character") {
            console.log("character selected", user.favorites.characters)
            user.favorites.characters.splice(user.favorites.characters.indexOf(props.id), 1)
            localStorage.setItem('user', JSON.stringify(user))
          } else if (props.type === "comic") {
            //console.log("comic selected", user.favorites.comics)
            user.favorites.comics.splice(user.favorites.comics.indexOf(props.id), 1)
            localStorage.setItem('user', JSON.stringify(user))
          } else if (props.type === "series") {
            //console.log("series selected", user.favorites.series)
            user.favorites.series.splice(user.favorites.series.indexOf(props.id),1)
            localStorage.setItem('user', JSON.stringify(user))
          } else if (props.type === "event") {
            //console.log("events selected", user.favorites.events)
            user.favorites.events.splice(user.favorites.events.indexOf(props.id), 1)
            localStorage.setItem('user', JSON.stringify(user))
          }
        } else {
          // console.log("props.type", props.type)
          if (props.type === "character") {
            //console.log("character selected", user.favorites.characters)
            user.favorites.characters.push(props.id)
            localStorage.setItem('user', JSON.stringify(user))
          } else if (props.type === "comic") {
            //console.log("comic selected", user.favorites.comics)
            user.favorites.comics.push(props.id)
            localStorage.setItem('user', JSON.stringify(user))
          } else if (props.type === "series") {
            //console.log("series selected", user.favorites.series)
            user.favorites.series.push(props.id)
            localStorage.setItem('user', JSON.stringify(user))
          } else if (props.type === "event") {
            //console.log("events selected", user.favorites.events)
            user.favorites.events.push(props.id)
            localStorage.setItem('user', JSON.stringify(user))
          }
        }
      fetch('http://localhost:3001/user/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      window.location.reload()
    }
    }

    const imageStyle = {
        width: '40px',
        height: '40px'
    }

  return (
    <div>
    {test !== "" ? <img src={StarURL} onClick={handleClick} style={imageStyle}/> : <img style={{height: '0'}}/> }
    </div>
  )

}

export default Favorite
//