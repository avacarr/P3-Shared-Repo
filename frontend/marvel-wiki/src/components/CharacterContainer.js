import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchObjectById } from '../Utils/fetchUtils'
import App from '../App';
import Loader from './Loader'
import HeroBanner from './HeroBanner'
import { Link, useParams, useLocation } from 'react-router-dom'
import Container from './Container'
import Row from './Row'
import DataList from './DataList'
import Footer from './Footer'
import Favorite from './FavoritesForm'
import Comments from './CommentsForm'
import styled from 'styled-components'

const propTypes = {
  charId: PropTypes.string
}

const CharacterContainerStyle = styled.nav`
    padding: 8px;
    @font-face {
        font-family: 'Marvel';
        src: url(../Marvel.ttf) format('truetype');
            }
        li {
            list-style: none;
            font-size: 1.5vw;
            font-family: 'Marvel';
            font-weight: normal;
        }
        h2{
          font-size: 3vw;
          align: center
        }
        p{
          font-size: 1.5vw
        }

        .col-sm-4{
          text-align: center;
          font-size 1.5vw
        }
`

class CharacterContainer extends Component {



  constructor(props) {
    super(props)
    this.state = {
      loading: undefined,
      character: {},
      img: {},
      comics: {},
      series: {},
      urls: []
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.handleFetch()
  }

  handleFetch() {
    this.setState( { loading: true })
    console.log("window.location", window.location.pathname.split('/')[2])
    fetchObjectById('characters', window.location.pathname.split('/')[2])  // WAS this.props.charId
    .then(res => this.setState({
      character: res.data.results[0],
      img: res.data.results[0].thumbnail,
      comics: res.data.results[0].comics,
      series: res.data.results[0].series,
      urls: res.data.results[0].urls,
      loading: false
  }))
  }

  render() {
    const {loading, character, img, series, comics, events, urls} = this.state
    return (
      <CharacterContainerStyle>
        <HeroBanner id={character.id} name={character.name} img={img} description={character.description} />
        <Row>
          <div className='col-sm-4'>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <Favorite id={character.id} type={"character"}/>
            <ul className='list-inline'>
              {urls.length > 0 &&
                urls.map((item, index) => (
                  <a href={item.url} key={index}> <span className='label label-primary'>{item.type.toUpperCase()}</span></a>
                  ))}
            </ul>
            <Comments id={character.id} comments={this.props.comments}/>
          </div>
          <div className='col-sm-4'>
            {comics.items && comics.items.length > 0 &&
            <DataList listItems={comics} resource={'comics'} label={'Comics'} />
            }
          </div>
          <div className='col-sm-4'>
            {series.items && series.items.length > 0 &&
            <DataList listItems={series} resource={'series'} label={'Series'} />
            }
          </div>
        </Row>
        <Footer/>
      </CharacterContainerStyle>
    )
  }
}

CharacterContainer.propTypes = propTypes
export default CharacterContainer



// WEBPACK FOOTER //
// ./src/components/CharacterContainer.js