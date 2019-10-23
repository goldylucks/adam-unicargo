import axios from 'axios'

import start from './actions/start'
import createConfig from './config/createConfig'
import App from './App'

const config = createConfig()

const overrides = { App }
start({ config, overrides, axios })

if (module.hot) {
  module.hot.accept()
}
