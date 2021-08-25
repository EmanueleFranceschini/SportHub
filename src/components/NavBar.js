import { Link } from 'react-router-dom'
import { useMyContext } from './Context'
import { IoHome, IoHeart } from 'react-icons/io5'
import Badge from '@material-ui/core/Badge'

const NavBar = () => {
  const { hideNav, showBadge, menu } = useMyContext()
  return (
    <nav className={menu ? 'nav-bar smooth' : 'nav-bar'}>
      <ul>
        <li onClick={hideNav}>
          <IoHome className='nav-bar-icon home-icon'/> 
          <Link className='links' to='/'>Home</Link>
        </li>
        <li onClick={hideNav}><IoHeart className='nav-bar-icon favorites-icon'/>
          {showBadge() ? <Badge variant='dot' color='secondary' >
            <Link className='links' to='/favorites'>Favorites</Link>
          </Badge> : <Link className='links' to='/favorites'>Favorites</Link>}
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
