import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
    <div className='Home'>
      <h1> Welcome to PcCustoms! </h1>
      <h2> Start building a PC! </h2>
      <Link to={"/products/new"}>
        <h2 className='home-link'>  Click Here to sell a Product </h2> 
        <img src='https://i.ebayimg.com/images/g/9l0AAOSwiDRdsYvK/s-l500.jpg' alt='motherboard-display' width="500px"/>
        </Link>
      
      
    </div>
  )
}

export default Home
