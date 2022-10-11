import React from 'react'
import star from '../../public/assets/star.png'

export default function Card(props) {

  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  
  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      {/* {props.openSpots === 0 && <div className='card--badge'>SOLD OUT</div>} */}
      <img src={`../../public/assets/${props.coverImg}`} alt='images' className='card--img'/>
      <div className='card--stats'>
        <img src={star} alt='' className='card--star'/>
        <span>{props.stats.rating}</span>
        <span className='grey'>({props.stats.reviewCount}) .</span>
        <span className='grey'>{props.location}</span>
      </div>
      <p className='card--title'>{props.title}</p>
      <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}
