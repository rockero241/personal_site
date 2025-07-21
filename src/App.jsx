import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './components/Project'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
    <Navbar />
    <Hero />
    <About />
    <Project />
    <section className="min-h-screen" />
    <section className="min-h-screen" />
    <section className="min-h-screen" />
    {/* about */}
    {/* projects */}
    {/* experience */}
    {/* testimonial */}
    {/* contact */}
    {/* footer */}
    </div>
  )
}

export default App