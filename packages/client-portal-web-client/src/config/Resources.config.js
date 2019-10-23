import Config from './Config'

class ResourcesConfig extends Config {
  getAll() {
    return [this.users]
  }

  users = {
    key: 'users',
    fields: [{ fieldkey: 'name', type: 'string' }],
  }
}

export default ResourcesConfig
