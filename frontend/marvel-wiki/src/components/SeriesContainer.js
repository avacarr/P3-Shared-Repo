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
import Comments from './CommentsForm'
import Footer from './Footer'
import Favorite from './FavoritesForm'
import styled from 'styled-components'

const propTypes = {
  serId: PropTypes.string
}

const SeriesContainerStyle = styled.nav`
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

class SeriesContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: undefined,
      series: {},
      img: {},
      characters: {},
      comics: {},
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
    fetchObjectById('series', window.location.pathname.split('/')[2])  // WAS this.props.charId
    .then(res => this.setState({
      series: res.data.results[0],
      img: res.data.results[0].thumbnail,
      characters: res.data.results[0].characters,
      comics: res.data.results[0].comics,
      urls: res.data.results[0].urls,
      loading: false
  }))
  }

  render() {
    const {loading, series, img, comics, characters, events, urls} = this.state
    return (
      <SeriesContainerStyle>
      {/* {loading && <Loader />} */}
        <HeroBanner id={series.id} name={series.title} img={img} description={series.description}/>
        <Row>
          <div className='col-sm-4'>
            <h2>{series.title}</h2>
            <p>{series.description}</p>
            <Favorite id={series.id} type={"series"}/>
            <ul className='list-inline'>
              {urls.length > 0 &&
                urls.map((item, index) => (
                  <a href={item.url} key={index}> <span className='label label-primary'>{item.type.toUpperCase()}</span></a>
                  ))}
            </ul>
          <Comments id={series.id} comments={this.props.comments}/>
          </div>
          <div className='col-sm-4'>
            {characters.items && characters.items.length > 0 &&
             <DataList listItems={characters} resource={`characters`} label={'Characters'} />
             }
          </div>
          <div className='col-sm-4'>
            {comics.items && comics.items.length > 0 &&
            <DataList listItems={comics} resource={'comics'} label={'Comics'} />
            }
          </div>
        </Row>
        <Footer/>
      </SeriesContainerStyle>
    )
  }
}

SeriesContainer.propTypes = propTypes
export default SeriesContainer