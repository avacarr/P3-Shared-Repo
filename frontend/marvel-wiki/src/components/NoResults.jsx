import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Row from './Row'
import Hr from './Hr'
import { Link } from 'react-router-dom'

const NoResults = ({term}) => {
  return (
    <Container>
      <Heading tag={'h1'} classNames='text-danger'>No Results Found</Heading>
      <Hr />
      <Row>
        <div className='col-sm-12 text-center'>
          <Heading tag={'h3'}>
            Oh Snap. No results for "{term}" were found.
          </Heading>
          You could go back to the <Link to='/characters'>Characters</Link> page,
          or try a search for another character, like <Link to='/characters?query=hulk'>Hulk</Link>, <Link to='/characters?query=captain'>Captain</Link>, or <Link to='/characters?query=doctor'>Doctor</Link>. <br />Or search for a <Link to='/comics'>comic</Link> or <Link to='/series'>series</Link>.
        </div>
      </Row>
    </Container>
  )
}

export default NoResults