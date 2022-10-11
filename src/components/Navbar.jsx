import React from 'react'
import viteLogo from '../../public/assets/vite.svg'

export default function Navbar() {
  return (
    <nav className='header'>
        <div className='logoDiv'>
            <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <h3>King's Speech</h3>
        </div>

        <ul>
            <li>Home</li>
            <li>Favorite</li>
            <li>About</li>
            <li>Sign in</li>
        </ul>
    </nav> 
  )
}
