import React from 'react'
import oceanview from '../assets/oceanview.mp4'

const Main = () => {
  return (
    <div className='main'>
        <div className='overlay'></div>
        <video src={oceanview} autoPlay loop muted />
        <div className='content'>
            <h1>
                Welcome to 
            </h1>
            <p>
                Pacific Gyre
            </p>
        </div>
    </div>
  )
}

export default Main