import React from 'react'
import logo from '../images/hwhiskey-logo.png'

function Home() {
  return (
    <div className="grid items-start justify-center bg-hero bg-cover min-h-screen prose lg:prose-xl min-w-full">
        <h1 className='h-1 text-center text-white'>Whiskey Taster</h1>
        <img className='pt-0' src={logo} />
    </div>
  )
}

export default Home
