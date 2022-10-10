import React from 'react'
import star from '../../public/assets/star.png'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={`../../public/assets/${props.img}`} alt='images' className='card--img'/>
      <div className='card--stats'>
        <img src={star} alt='' className='card--star'/>
        <span>{props.rating}</span>
        <span className='grey'>{props.reviewCount}</span>
        <span className='grey'>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}
