import React from 'react'
import PropTypes from 'prop-types'

import withShlaky from '../HOCs/withShlaky'

class HomePage extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <h1>Home!</h1>
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = () => ({
  root: {},
})

export default withShlaky(HomePage, { styles })
