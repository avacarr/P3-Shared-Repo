import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const propTypes = {
  children: PropTypes.node
}

const AppContainer = ({ children }) => (
  <div className="app-root">
    <Header />
      <div className='body'>
        {children}
      </div>
    <Footer />
  </div>
)

AppContainer.propTypes = propTypes

export default AppContainer



// WEBPACK FOOTER //
// ./src/containers/AppContainer.js