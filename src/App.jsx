import React from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import Projects from './assets/components/Projects'
import Production from './assets/components/Production'
import Technology from './assets/components/Technology'
import Line from './assets/components/Line'
import Skill from './assets/components/Skill'
import Footer from './assets/components/Footer'
import Ourprojects from './assets/components/Ourprojects'

export default function App() {
  return (
    <>
    <div className='container'>
      <Navbar/>
      <div className="line"></div>
      <Hero/>
      <div className="line"></div>
<Projects/>
<Ourprojects />
<Production/>
<Technology />
<Line />
<Skill/>
<Footer/>
    </div>
    </>

  )
}
