import React from 'react'
import { Navbar, About, Vision, Contribute, Impact } from '../components'



function Home() {
    return (
        <div>
            <Navbar />
            <About />
            <Vision />
            <Contribute/>
            <Impact/>
        </div>
    )
}

export default Home
