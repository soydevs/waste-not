import React from 'react'
import { Navbar, About, Vision, Contribute, Impact, Footer } from '../components'



function Home() {
    return (
        <div>
            <Navbar />
            <About />
            <Vision />
            <Contribute/>
            <Impact/>
            <Footer/>
        </div>
    )
}

export default Home
