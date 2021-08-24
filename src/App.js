import { useMyContext } from './components/Context'
import { BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header'
import Favorites from './components/Favorites'
import SportsContainer from './components/SportsContainer'
import CircularProgress from '@material-ui/core/CircularProgress'

function App() {
  const { loading } = useMyContext()

    return (
    <BrowserRouter basename='/sporthub'>
      <Route path='/' exact render={() =>
        loading === true ? (
          <div className='loadingPage'>
            <h1 className='loadingMsg'>Loading.. Please wait</h1>
            <p>This should only take few more seconds<br/></p>
            <CircularProgress />
          </div>
        )
        : loading === false ? (
            <>
            <Header />
            <SportsContainer />
            </>
        ) 
        : (
            <>
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
