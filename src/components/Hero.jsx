import React from 'react'
import gridPic from '../../public/assets/photo-grid.png'

export default function Hero() {
  return (
      <section className='topCont'>
        <img src={gridPic} alt='grid advertisemnt pic'/>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
      </section>
  )
}
