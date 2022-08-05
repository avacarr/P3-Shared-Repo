
import React, {useState, Navigate} from 'react'
import styled from 'styled-components'
import XURL from '../assets/images/x.png'

let filteredComments

const entryStyle = {
  border: '1px solid white',
  backgroundColor: 'black',
  width: '300px'
}

const divStyle = {
  border: '1px solid white',
  height: '300px'
}

const ulStyle = {
  border: '1px solid white',
  overflow: 'auto',
  height: '236px',
  margin: '0',
  padding: '0'
}

const imageStyle = {
  height: '15px',
  width: '15px'
}

const Comments = (props) => {
  var userLocal = localStorage.getItem('user')
  if (userLocal) {var userTest = JSON.parse(userLocal)}
  var test = props.comments
  if (test) {filteredComments = props.comments.filter(e => e.id == props.id)}

  const [formData, setFormData] = useState()

  const handleChange = (e) => {
      setFormData({...formData, [e.target.id] : e.target.value})
      console.log("formData", formData)
  }

  const handleSubmit = async () => {
    await fetch('http://localhost:3001/comment/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          comment: formData.comment,
          id: props.id,
          createdByEmail: JSON.parse(localStorage.getItem('user')).email
    })})
    window.location.reload()
  }

  const handleRemove = async (id) => {
    await fetch('http://localhost:3001/comment/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id: id})
    })
    window.location.reload()
  }

  return (
    <div style={divStyle}>
    {userTest !== "" ? <form onSubmit={handleSubmit}>
        <input id="comment" name="comment" type="text" placeholder="enter a comment..." style={entryStyle} onChange={handleChange} />
        <input type='submit' value='Submit' style={entryStyle} />
      </form> : <div></div>}
      <ul style={ulStyle}>
        {filteredComments && userLocal ? filteredComments.map((item, index) => (
          <div key={index}>
            <li>{item.createdByEmail}{item.createdByEmail == userTest.email ? <img src={XURL} onClick={() => handleRemove(item._id)} id={item._id} style={imageStyle}/> : <div></div> }</li>
            <li style={{borderBottom: '1px solid white'}}>{item.comment}</li>
          </div>
          )) : <div></div> }
      </ul>
    </div>
  )
}

export default Comments