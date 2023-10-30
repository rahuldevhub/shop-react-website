import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/Animation - 1698545974564.json'
import { useRef } from 'react'

const Animation = () => {
    const aniRef = ()
  return (
    <div>
        <h1>animation</h1>
        <Lottie animationData={animationData}/>
    </div>
  )
}

export default Animation