import Config from './Config'

class StatesConfig extends Config {
  getAll() {
    return [this.darkMode]
  }

  darkMode = {
    key: 'darkMode',
    initial: false,
    type: 'bool',
  }
}

export default StatesConfig
