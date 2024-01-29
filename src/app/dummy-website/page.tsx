import React from 'react'
import Hero from './views/Hero/index'
import Services from './views/Services/index'
import Testimonial from './views/Testimonial/index'
import Pricing from './views/Pricing/index'
import Blogs from './views/Blogs/index'

const dummywebsite = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <Testimonial/>
        <Pricing/>
        <Blogs/>
    </div>
  )
}

export default dummywebsite;
