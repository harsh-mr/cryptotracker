import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TrendingCoins } from '../config/api'
import "../assets/Home.css"
import Carousel from '../components/carousel'
import Coinstable from '../components/Coinstable'

const Home = () => {

       


  return (
      <div>

    <div className='' id='banner'>

        <div className='container mx-auto' id="banner-content" >
        <div className='tagline'>
        <h1 className='text-white text-7xl mx-auto text-center ' id='banner-head'>CRYPTO</h1>
        </div>

        <Carousel/>

        </div>

    </div>


        <div className='pt-9 bg-black'>
        <Coinstable/>

        </div>
      </div>
  )
}

export default Home