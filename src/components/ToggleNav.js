import { IoIosMenu } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { useMyContext } from './Context'
import Badge from '@material-ui/core/Badge'

const ToggleNav = () => {
  const { showBadge, menu, toggleMenu } = useMyContext()

  return (
    showBadge() ? <Badge className='nav-btn-badge' variant='dot' color='secondary'>
    {menu ? <IoClose className='nav-bar-btn' onClick={() => toggleMenu(!menu)} /> : <IoIosMenu className='nav-bar-btn' onClick={() => toggleMenu(!menu)}/>}
    </Badge> : menu ? <IoClose className='nav-bar-btn' onClick={() => toggleMenu(!menu)} /> : <IoIosMenu className='nav-bar-btn' onClick={() => toggleMenu(!menu)}/>
  )
}

export default ToggleNav
