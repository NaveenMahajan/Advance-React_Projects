import React from 'react'
import { Newhook } from './AppContext'
import {FaTimes} from 'react-icons/fa'

const Modal =()=> {
  const {ismodal,modalClose}=Newhook()
  return (
    <div className={ismodal ? 'modal-overlay show-modal':'modal-overlay'}>
 <div className='modal-container'>
<h3>modal content</h3>
<button className="close-modal-btn" onClick={modalClose}><FaTimes/></button>
 </div>
    </div>
  )
}


export default Modal
