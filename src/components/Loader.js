import CircularProgress from '@material-ui/core/CircularProgress'
import { useEffect, useState } from 'react'

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false)
  const [showCause, setShowCause] = useState(false)

  useEffect(() => 
    setTimeout(() => setShowLoader(true), 1000)
  , [])

  return (
    showLoader && 
      <div className='loadingPage'>
        <h1 className='loadingMsg'>Loading.. Please wait</h1>
        <p>This should only take few more seconds</p>
        <br />
        <CircularProgress />
        <div className='loadingCause'> 
          <p onClick={() => setShowCause(!showCause)}>Why so long?</p>
          {showCause && <p>This Website restAPI (<i>the place where we get our data from</i>) is hosted on <b>Heroku</b>, a cloud platform, that sometimes requires a bit more time to respond. Thanks for your patience!</p>}
        </div>
      </div>
  )
}

export default Loader
