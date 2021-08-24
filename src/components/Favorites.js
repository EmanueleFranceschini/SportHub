import { useMyContext } from "./Context"
import Sport from './Sport'
import { IoChevronBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Favorites = () => {
  const { sports } = useMyContext()
  const location = useLocation()

  return (
    <div className='favorites-wrapper'>
      {location.pathname === '/favorites' && <Link to='/'><IoChevronBack className='back-btn'/></Link>}
      <h1>Favorites</h1>
      <section className='favorites-section'>
          {sports.map((el) => el.favorite && <Sport key={el.id} sport={el} url={el.attributes.icon} text='' />)}
        </section>
    </div>
  )
}

export default Favorites
