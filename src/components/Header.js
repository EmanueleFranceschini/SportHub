import NavBar from './NavBar'
import ToggleNav from './ToggleNav'
import { FcSportsMode } from 'react-icons/fc'

const Header = () => {
  return (
    <header>
      <div className='logo-container'>
        <FcSportsMode className='logo'/>
        <span>SportHub</span>
      </div>
      <ToggleNav />
      <NavBar />
    </header> 
  )
}

export default Header
