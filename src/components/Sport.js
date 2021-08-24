import  { IoHeart } from 'react-icons/io5'
import { useMyContext } from './Context'
import { useLocation } from 'react-router'

const Sport = ({ sport, url, text }) => {
  const { setFavorite, sports, setSports } = useMyContext()
  const location = useLocation()

  return (
    <article className={location.pathname === '/' ? 'sports' : 'favorites'}>
      <img className={location.pathname === '/' ? 'images' : 'icons'} src={url} alt={sport.attributes.name} />
      <h3>{sport.attributes.name}</h3>
      <IoHeart className={sport.favorite ? 'heart full' : 'heart'} 
        favorite={sport.favorite.toString()} 
        onClick={() => setFavorite(sport)}/>
      {text !== '' && <p className='sport-desc'> 
        {sport.readMore ? text : `${text.slice(0, 130)}..`} <button className='read-more' onClick={() => setSports(sports.map(el => el.id === sport.id ? { ...el, readMore: !el.readMore } : el))}>{sport.readMore ? 'Show less' : 'Read more'}</button></p>}
    </article>
  )
}

export default Sport
