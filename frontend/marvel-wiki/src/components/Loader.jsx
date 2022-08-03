import React from 'react'
import { Loader as ReactLoader } from 'react-loader'

const Loader = () => (
  <div className='loader-container'>
    <ReactLoader type='ball-scale-multiple' active={true} />
  </div>
)

export default Loader