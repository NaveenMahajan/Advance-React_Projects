import { useState } from 'react'
import { createContext,useContext } from 'react'

const Appcontext = createContext()


const Contextprovider = ({children}) => {
  const[isSidebar,setIsSidebar]=useState(false)
  const[ismodal,setIsModal]=useState(false)

  const sidebarOpen=()=>{
  setIsSidebar(!isSidebar)
  }
  const sidebarClose=()=>{
  setIsSidebar(false)
  }
  const modalOpen=()=>{
  setIsModal(true)
  }
  const modalClose=()=>{
  setIsModal(false)
  }
  const Abc="naveen"
  
  return (
    <Appcontext.Provider value={{isSidebar,ismodal,setIsModal,sidebarOpen,sidebarClose,modalOpen,modalClose}}>
     {children}
    </Appcontext.Provider>
  )
}
export const Newhook=()=>{
  return(
      useContext(Appcontext)
      )
    }
export default Contextprovider
