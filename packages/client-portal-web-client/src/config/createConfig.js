import LocalStorageConfig from './LocalStorage.config'
import RoutesConfig from './Routes.config'
import ResourcesConfig from './Resources.config'
import StatesConfig from './States.config'
import ComponentsConfig from './Components.config'
import MiscConfig from './Misc.config'

const createConfig = () => ({
  localStorage: new LocalStorageConfig(),
  routes: new RoutesConfig(),
  resources: new ResourcesConfig(),
  states: new StatesConfig(),
  components: new ComponentsConfig(),
  misc: new MiscConfig(),
})

export default createConfig
