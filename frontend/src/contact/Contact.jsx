import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Contactform from '../components/Contactform'

function Contact() {
  return (
    <>
    <NavBar/>
    <div className='min-h-screen'>
       <Contactform/>
    </div>
    <Footer/>
    </>
  )
}

export default Contact