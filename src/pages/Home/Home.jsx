import React from 'react'
import { BagsList, Footer, Hero, Navbar } from '../../components'
import bags from '../../utilities/placeholder/product'
/* import "./HomeStyle.css" */

const Home = () => {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <BagsList bags={bags} />
      </div>
      <Footer />
    </div>
  )
}

export default Home