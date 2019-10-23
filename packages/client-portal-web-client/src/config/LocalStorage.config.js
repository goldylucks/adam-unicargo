import Config from './Config'

class LocalStorageConfig extends Config {
  getKeys() {
    return ['foo']
  }
}

export default LocalStorageConfig
