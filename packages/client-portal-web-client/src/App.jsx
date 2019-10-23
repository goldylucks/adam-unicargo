import React from 'react'
import ErrorBoundary from 'react-error-boundary'
import { Router } from 'react-router-dom'

import withShlaky from './HOCs/withShlaky'
import ErrorFallbackComponent from './components/ErrorFallbackComponent'
import MuiThemeProvider from './components/MuiThemeProvider'
import Routes from './Routes'

import './App.css'

class App extends React.Component {
  render() {
    const { utils } = this.facade
    return (
      <MuiThemeProvider>
        <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
          <Router history={utils.history}>
            <Routes />
          </Router>
        </ErrorBoundary>
      </MuiThemeProvider>
    )
  }
}

export default withShlaky(App)
