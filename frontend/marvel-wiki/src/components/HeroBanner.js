import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.object
}

const HeroBannerContainerStyle = styled.nav`
  img{
    border-radius: 8px;
    width: 600px;
    height: 600px;
    object-fit: contain;
  }
`


const HeroBanner = ({ id, name, description, img }) => (
  <HeroBannerContainerStyle>
  <div className='hero-wrapper'>
  <img src={img.path + "/portrait_xlarge.jpg"} alt='' />
  </div>
  </HeroBannerContainerStyle>
)

HeroBanner.propTypes = propTypes
export default HeroBanner



// WEBPACK FOOTER //
// ./src/components/HeroBanner.js