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
import styled from'styled-components'
import Comments from './CommentsForm'

const propTypes = {
  comId: PropTypes.string
}
const ComicContainerStyle = styled.nav`
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

class ComicContainer extends Component {



  constructor(props) {
    super(props)
    this.state = {
      loading: undefined,
      comic: {},
      img: {},
      characters: {},
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
    fetchObjectById('comics', window.location.pathname.split('/')[2])  // WAS this.props.charId
    .then(res => this.setState({
       comic: res.data.results[0],
      img: res.data.results[0].thumbnail,
      characters: res.data.results[0].characters,
      series: res.data.results[0].series,
      urls: res.data.results[0].urls,
      loading: false
  }))
  }

  render() {
    const {loading, comic, img, series, characters, urls} = this.state
    return (
      <ComicContainerStyle>
      {/* {loading && <Loader />} */}
        <HeroBanner id={comic.id} name={comic.title} img={img} description={comic.description} prices={comic.prices}/>
        <Row>
          <div className='col-sm-4'>
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
            <Favorite id={comic.id} type={"comic"}/>
            <p>Issue Number: {comic.issueNumber}</p>
            <ul className='list-inline'>
              {urls.length > 0 &&
                urls.map((item, index) => (
                  <a href={item.url} key={index}> <span className='label label-primary'>{item.type.toUpperCase()}</span></a>
                  ))}
            </ul>
            <Comments id={comic.id} comments={this.props.comments}/>
          </div>
          <div className='col-sm-4'>
            {characters.items && characters.items.length > 0 &&
             <DataList listItems={characters} resource={`characters`} label={'Characters'} />
             }
          </div>
          <div className='col-sm-4'>
            {series.items && series.items.length > 0 &&
            <DataList listItems={series} resource={'series'} label={'Series'} />
            }
          </div>
        </Row>
        <Footer/>
      </ComicContainerStyle>
    )
  }
}

ComicContainer.propTypes = propTypes
export default ComicContainer