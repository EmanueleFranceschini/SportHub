import { useMyContext } from './components/Context'
import { BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header'
import Favorites from './components/Favorites'
import Loader from './components/Loader'
import SportsContainer from './components/SportsContainer'

function App() {
  const { loading } = useMyContext()
  
  return (
    <BrowserRouter basename='/sporthub'>
      <Route path='/' exact render={() =>
        loading === true ? (
          <Loader />
        )
        : (
            <>
              <Header />
              <SportsContainer />
            </>
        ) 
      } />
      <Route path='/favorites' render={() => 
        (
          <>
            <Header />
            <Favorites />
          </>
        )
      } />
    </BrowserRouter>
  )
}

export default App;
