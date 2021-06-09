import Routes from './Routes/router'
import {useRoutes} from 'hookrouter';

function App() {
  const routeResult = useRoutes(Routes)
  return routeResult
}


export default App;