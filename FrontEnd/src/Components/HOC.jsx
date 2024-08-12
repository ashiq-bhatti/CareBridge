import React from 'react'
import NavBar from './NavBar'

const HOC = (OldComponent) => {
  return function EnhancedFunction(){
  return <>
    <NavBar />
    <OldComponent />

 </>
  }
}

export default HOC