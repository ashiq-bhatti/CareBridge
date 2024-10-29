import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const HOC = (OldComponent) => {
  return function EnhancedFunction(){
  return <>
    <NavBar />
    <OldComponent />
    <Footer/>

 </>
  }
}

export default HOC