import React from 'react'
import Navbar from './Utils/Navbar'
import Base1 from './Components/Base1'
import Base2 from './Components/Base2'
import Base3 from './Components/Base3'
import Base4 from './Components/Base4'
import Base5 from './Components/Base5'
import NewLetterSignup from './Components/NewLetterSignup'
import KeyPartners from './Components/KeyPartners'
import Base6 from './Components/Base6'
import TeamPage from './Components/TeamPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Footer from './Utils/Footer'
import AboutUs from './Pages/AboutUs/AboutUs'

const LandingPage = () => {
    return (
        <div className=''>
            <div className=''>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about_us' element={<AboutUs />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </div>
    )
}

export default LandingPage