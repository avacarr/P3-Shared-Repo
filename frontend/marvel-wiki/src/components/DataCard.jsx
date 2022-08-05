import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Favorite from './FavoritesForm'
import '../App.css'

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.object,
  description: PropTypes.string
}

const DataCardContainer = styled.nav`
    padding: 8px;
    font-family: 'sans-serif';

        .content {
          cursor: pointer;
          background-color: transparent;
        }

        .card-wrapper{
          cursor: pointer;
          background-color: transparent;
        }

        .card-inner {
          cursor: pointer;
          background-color: transparent;
          height: 450px;
          perspective: 1000px;
          overflow: hidden;
          overflow-y: auto;
          font-size: 2vh
        }

        .card-inner img {
          width: 300px;
          height: 300px;
          object-fit: cover;
        }

        * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      @media (max-width: 800px) {
        .card-wrapper {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media (max-width: 500px) {
        .card-wrapper {
          grid-template-columns: 1fr;
        }
      }
      
`

const DataCard = ({ id, name, img, description, baseLink }) => (
  <DataCardContainer>
  <div className='content'>
  <div className='card-wrapper'>
    <div className='card-inner'>
      <Link to={{pathname: `${baseLink}/${id}`, state: id,}}>
      <div className='card-img'>
      <img src={img.path + "/portrait_xlarge.jpg"} alt='' />
      </div>
      <div className='card-title'>{name}</div>
      </Link>
      <div className='card-description'>
        {description ?
          description
          :
          'No description provided'
        }
      </div>
      <Favorite id={id}/>
    </div>
  </div>
  </div>
  </DataCardContainer>
)

DataCard.propTypes = propTypes
export default DataCard