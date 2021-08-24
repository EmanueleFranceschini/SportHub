import Sport from './Sport'
import { useMyContext } from './Context'

const SportsContainer = () => {
  const { sports, moreContent, setMoreContent } = useMyContext()
  return (
    <div className='home-wrapper'>
      <h1>TOP 10 most popular Sports in London!</h1>
      <p className='intro visible'>Looking for your new favorite sport? Or just something casual to do this weekend? Here you'll find a list of fun activities to do on your own or with friends!</p>
      <section className='home-section'>
        {sports.map((el, index) => index < moreContent && <Sport key={el.id} sport={el} url={el.relationships.images.data[0].variants[0].medium.url} text={el.attributes.description} />
        )}
      </section>
      <button className='show-more' onClick={() => setMoreContent(moreContent === 10 ? 15 : 10)}>{moreContent === 10 ? 'Show more' : 'Show less'}</button>
    </div>
  )
}

export default SportsContainer
