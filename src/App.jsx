import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'

function App() {
  const cards = data.map((item) => {
    return(
      < Card
        key = {item.id}       
        {...item}
        //or
        //item={item}
        //or
        // img = {item.coverImg}
        // rating = {item.stats.rating}
        // reviewCount = {item.stats.reviewCount}
        // location = {item.location}
        // title = {item.title}
        // price = {item.price}
        // openSpots = {item.openSpots}
      />
    )
  })
  return (
    <div className="App">
      < Navbar />
      < Hero />
      <section className='cards-list'>
        {cards}
      </section>
            
    </div>
  )
}

export default App
