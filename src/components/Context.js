import React from 'react'
import { useContext, useState, useEffect } from 'react'

const Context = React.createContext();

const ContextAPI = ({ children }) => {
  const [sports, setSports] = useState([])
  const [menu, toggleMenu] = useState(false)
  const [loading, loadingStatus] = useState('wait')
  const [moreContent, setMoreContent] = useState(10)

  // -- Pulling Data From Backend & Delaying Loading Page Display When App First Loads --
  useEffect(() => {
    getSports()
    setTimeout(() => { if (loading !== 'wait')  loadingStatus(true)}, 1000)
    // eslint-disable-next-line
  }, [])

  const getSports = async () => {
    try {
      const res = await fetch('https://sport-hub-backend.herokuapp.com/sports', {method: 'GET'})
      const data = await res.json()
      setSports(data.map(el => { return { ...el, readMore: false }}))
      loadingStatus(false)
    } 
    catch (error) {
      loadingStatus(true)
    }
  }
  // -- Setting A Sport Favorite Status And Updating Backend --
  const setFavorite = async (sport) => {
    const res = await fetch(`https://sport-hub-backend.herokuapp.com/sports/${sport.id}`, {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(sport)})
    const data = await res.json()
    console.log(data)
    setSports(sports.map(el => el.id === data.id ? data : el))
  }

  // -- Hiding NavBar When Pressing Hamburger NavBtn --
  const hideNav = () => {
    toggleMenu(false)
    favoritesSeen()
  }

  // -- Updating Favorite Sports State To Control Notification Badge Display And Updating Backend --
  const favoritesSeen = async () => {
    const res = await fetch('https://sport-hub-backend.herokuapp.com/sports', {method: 'PUT', headers: {'Content-type': 'application/json'}, body: JSON.stringify(sports)})
    const data = await res.json()
    setSports(data)
  }

  const showBadge = () => sports.some(el => el.favorite === true && el.seen === false)  

  return (
    <Context.Provider value={{loading, sports, setSports, menu, toggleMenu, moreContent, setMoreContent, setFavorite, showBadge, hideNav}}>
      {children}
    </Context.Provider>
  )
}

export const useMyContext = () => useContext(Context) 
export default ContextAPI