import Config from './Config'

class RoutesConfig extends Config {
  getAll() {
    return [this.surprise]
  }

  surprise = {
    key: 'surprise',
  }
}

export default RoutesConfig
