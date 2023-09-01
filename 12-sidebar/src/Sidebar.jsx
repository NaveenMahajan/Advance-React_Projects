import React from 'react'
import logo from './logo.svg'
import {social,links} from './data'
import { Newhook } from './AppContext'
import {FaTimes} from 'react-icons/fa'
const Sidebar = () => {
  const{isSidebar,sidebarClose}=Newhook()
  return (
    <aside className={isSidebar?"sidebar show-sidebar":"sidebar"}>
   <div className="sidebar-header">
    <img src={logo} alt="coding addict" className='logo' />
    <button className='close-btn ' onClick={sidebarClose}><FaTimes/></button>
   </div>
   <ul className="links " >
   { links.map((prop)=>{
      const{id,url,text,icon}=prop
     return(
      <li key={id}>
        <a href={url}>{icon}{text}</a>
      </li>
     )
    })}
   </ul>
   <ul className="social-links">
   { social.map((prop)=>{
      const{id,url,icon}=prop
     return(
      <li key={id}>
        <a href={url}>{icon}</a>
      </li>
     )
    })}
   </ul>
    </aside>
  )
}

export default Sidebar
