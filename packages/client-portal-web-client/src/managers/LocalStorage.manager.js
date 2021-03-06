import Manager from './Manager'

const CURRENT_USER = 'currentUser'

class LocalStorageManager extends Manager {
  get = {}

  set = {}

  remove = {}

  constructor({ config, dependencies, overrides }) {
    super({ config, dependencies, overrides })
    this.setup()
  }

  setup() {
    this.config.localStorage.getKeys().forEach(this.setupKey)
    if (this.supportsCurrentUser) {
      this.setupKey(CURRENT_USER)
    }
  }

  setupKey = key => {
    this.set[key] = data => this._set(key, data)
    this.get[key] = () => this._get(key)
    this.remove[key] = () => this._remove(key)
  }

  _set(key, value) {
    this.debug(`Setting ${key}`, value)
    return localStorage.setItem(key, JSON.stringify(value))
  }

  _get(key) {
    const unparsed = localStorage.getItem(key)
    try {
      const parsed = JSON.parse(unparsed)
      this.debug(`Got ${key}`, parsed)
      return parsed
    } catch (err) {
      this.reportError(`Parsing ${key}`, unparsed)
    }
  }

  _remove(key) {
    this.debug(`Removing ${key}`)
    localStorage.removeItem(key)
  }

  debug = (...args) => global.console.debug('[Local storage]', ...args)

  reportError = (...args) =>
    global.console.error('[Local storage] Error', ...args)
}

export default LocalStorageManager
