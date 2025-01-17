import React, { Component, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import PropTypes from 'prop-types'
import { fetchObjects } from '../Utils/fetchUtils'
import DataCard from './DataCard'
//import Loader from './Loader'
import Pagination from 'react-js-pagination'
import Hr from './Hr'
import Container from './Container'
import Heading from './Heading'
import Row from './Row'
//import SearchForm from './SearchForm'
import NoResults from './NoResults'
import Footer from './Footer'
import styled from 'styled-components'

//const navigate = useNavigate()

const propTypes = {
    page: PropTypes.number,
    term: PropTypes.string
  }
  
const defaultProps =
  {
  page: 1
}

const PaginationContainer = styled.nav`
    padding: 8px;
    @font-face {
        font-family: 'Marvel';
        src: url(../Marvel.ttf) format('truetype');
            }
        ul {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            
        }
        li {
            list-style: none;
            font-size: 1.5vw;
            font-family: 'Marvel';
            font-weight: normal;
            margin-right: 10px;
        }
`
  
// const redirectPage(page) = {
    
// } 

  class EventsListContainer extends Component {


    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
    }
  
    constructor(props) {
      super(props)
      this.state = {
        loading: undefined,
        events: [],
        limit: 20,
        inputTerm: undefined,
        page: 1,
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handlePageChange = this.handlePageChange.bind(this)
    }
  
    UNSAFE_componentWillReceiveProps(nextProps) {
      window.scrollTo(0, 0)
      this.handleFetch(nextProps.page, nextProps.term)
      console.log("UNSAFE_componentWillReceiveProps")
    }
  
    componentDidMount() {
      this.handleFetch(this.state.page, this.props.term)
      console.log("componentDidMount", this.state.page, this.props.term)
    }
  
    handlePageChange(pageNumber) {
      console.log(`?page=${pageNumber}`)
      this.props.setPage(pageNumber)
      this.props.history(`?page=${pageNumber}`)
      console.log("handlepage", this.state.page)
    }

    // handlePageChange = (pageNumber) => {
    //   console.log(`active page is ${pageNumber}`)
    //   this.props.history(`/characters?page=${pageNumber}`)
    //   this.setState({activePage: pageNumber})
    //   console.log(this.state)
    // }
  
    handleChange(event) {
      this.setState({inputTerm: event.target.value})
    }
  
    handleSubmit(event) {
     event.preventDefault()
     this.props.push(`?query=${this.state.inputTerm}`)
   }
  
    handleFetch(page, term) {
      const LIMIT = 20
      const defaultOptions = {offset: (LIMIT * (page - 1))}
      console.log("defaultOptions: ", page, (LIMIT * (page - 1)))
      const searchOption = term ? { nameStartsWith: term } : null
      let mergedOptions = Object.assign(defaultOptions, searchOption)
      this.setState( { loading: true })
      fetchObjects('events', mergedOptions)
      .then(res => this.setState({
        events: res.data.results,
        offset: res.data.offset,
        limit: res.data.limit,
        total: res.data.total,
        count: res.data.count,
        loading: false,
      }))
      console.log("handlefetch", this.state)
    }
  
    render() {
      const {events, loading } = this.state
      if (this.state.total === 0) {
        return <NoResults term={this.props.term} />
      }
      return (
        <Container>
          <Heading tag={'h1'}>
            EVENTS <small>{this.state.total ? `(${this.state.total})` : ''}</small>
          </Heading>
          {/* <SearchForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            placeholder={'Search for Characters by Name'}
          /> */}
          <Hr />
          <Row>
            {/* {loading && <Loader  />} */}
            {events.map(({id, title, thumbnail, description}, i) => (
              <DataCard
                key={i}
                id={id}
                name={title}
                img={thumbnail}
                description={description}
                baseLink={'/events'}
              />
            ))}
          </Row>
          <Hr />
          <Row classNames={'text-center'}>
            <PaginationContainer>
            <Pagination
              onChange={this.handlePageChange}
              activePage={this.state.page}
              itemsCountPerPage={this.state.limit}
              totalItemsCount={this.state.total || 0}
              pageRangeDisplayed={50}
              hideDisabled={true}
            />
            </PaginationContainer>
          </Row>
          <Footer/>
        </Container>
      )
    }
  }
  
  EventsListContainer.propTypes = propTypes
  EventsListContainer.defaultProps = defaultProps
  export default EventsListContainer