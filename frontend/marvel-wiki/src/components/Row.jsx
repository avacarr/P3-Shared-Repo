import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RowContainer = styled.nav`
  .row {  
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`

const propTypes = {
  classNames: PropTypes.string,
  styles: PropTypes.object
}

const defaultProps = {
  classNames: '',
  styles: {}
}
const Row = ({ children, classNames, styles }) => (
  <RowContainer>
  <div className={`row ${classNames}`} style={styles}>
    {children}
  </div>
  </RowContainer>
)

Row.propTypes = propTypes
Row.defaultProps = defaultProps
export default Row