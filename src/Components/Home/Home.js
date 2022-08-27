import React from 'react'
import SectionOne from '../Body/Section_1/SectionOne'
import Description from '../Body/Section_2/Description'
import SectionThree from '../Body/Section_3/SectionThree'
import SectionFour from '../Body/Section_4/SectionFour'
import SectionFive from '../Body/Section_5/SectionFive'
import Footer from '../Body/Section_6/Footer'
import Header from '../Header/Header'
import ResNavbar from '../Navbar/ResNavbar'
 

function Home() {
    return (
        <div>
            <div className='header-nav'>
                <ResNavbar/>
                <Header />
            </div>
            <SectionOne />
            <Description />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <Footer />
        </div>
    )
}

export default Home