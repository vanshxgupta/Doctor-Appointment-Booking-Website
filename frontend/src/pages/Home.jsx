import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <SpecialityMenu/>
    <TopDoctors/>
    <Banner/>
    <Footer/>
    </>
  )
}

export default Home