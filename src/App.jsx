import { useState } from 'react'
import viteLogo from '../public/assets/Vite.svg'
import './App.css'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <nav className='header'>
        <div className='logoDiv'>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <h3>Kings</h3>
        </div>

        <ul>
          <li>Home</li>
          <li>Favorite</li>
          <li>About</li>
          <li>Sign in</li>
        </ul>
      </nav> 

      {/* < Hero /> */}

      < Card 
        img = "katie-zaferes.png"
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      />
      < Card 
        img = "katie-zaferes.png"
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      />
      < Card 
        img = "katie-zaferes.png"
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      />
      
    </div>
  )
}

export default App
