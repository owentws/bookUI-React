import React from 'react'
import HomeContent from '../components/HomeContent'
import HomeCate from '../components/HomeCate'
import HomeBookLine from '../components/HomeBookLine'
import HomePromotion from '../components/HomePromotion'
import About from '../components/About'



const Home2 = () => {
  return (
    <div>
        <HomeContent/>
        <About/>
        <HomeCate/>
        <HomeBookLine/>
        <HomePromotion/> 
    </div>
    
  )
}

export default Home2