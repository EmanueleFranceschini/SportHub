const cors = require('cors')
const fetch = require('node-fetch')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const London = '51.521472602588524,-0.12360713035818365'
let sports= []

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my API!')
})

// -- Fetching Data From Decathlon API --
const fetchSports = async () => {
  const res = await fetch(`https://sports.api.decathlon.com/sports/recommendations/geolocation?coordinates=${London}`, {method: 'GET'})
  const data = await res.json()
  sports = data.slice(0, 15)
  sports = sports.map(el => ({ ...el, favorite: false, seen: false }))
}
fetchSports()

// -- Sending Sports Data To Frontend --
app.get('/sports', (req, res) => {
  res.status(200).send(sports)
})

// -- Updating Seen Property When Accessing Favorites Section To Control Notification Badge Display --
app.put('/sports', (req, res) => {
  sports = req.body.map(el => el.favorite === true ? { ...el, seen: true } : el)
  res.send(sports)
})

// -- Updating Favorite Property When Setting A Sport To Favorite And Resetting readMore Property To False For Future Page Refreshes --
app.put('/sports/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const sportToUpd = req.body
  const updatedSport = { ...sportToUpd, favorite: !sportToUpd.favorite, seen: sportToUpd.favorite ? true : false }
  res.send(updatedSport)
  sports = sports.map(el => el.id === id ? { ...updatedSport, readMore: false } : el )
})

app.listen(PORT, () => console.log('Server alive'));