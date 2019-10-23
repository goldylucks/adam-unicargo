import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import withShlaky from './HOCs/withShlaky'
import HomePage from './pages/Home.page'

class Routes extends Component {
  render() {
    const { facade } = this

    return (
      <Switch>
        <Route path={facade.routing.get.home()} exact component={HomePage} />
      </Switch>
    )
  }
}

export default withShlaky(Routes)
