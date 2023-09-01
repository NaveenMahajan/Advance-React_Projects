import React from 'react'
import {Newhook} from './AppContext'
import {FaBars } from "react-icons/fa";
const Home = () => {
  const {sidebarOpen,modalOpen}=Newhook()
 
  return (
    <main>
  <button className="sidebar-toggle" onClick={sidebarOpen}><FaBars/></button>  
  <button className="btn" onClick={modalOpen}>Show Modal</button>  
    </main>
  )
}

export default Home
