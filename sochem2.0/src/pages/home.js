import React from 'react'
import Hero from "../components/Home/hero"
import Main from "../components/Home/main"
import Testimonial from "../components/Home/testimonials"
import Footer from '@/components/footer.js'
const home = () => {
  return (
    <div>
        <Hero/>
        <Main/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default home