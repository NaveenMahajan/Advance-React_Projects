import React from 'react'
import { useState } from 'react'


export default function Form({addColor}) {
  const[color,setColor]=useState('')
  const handleClick=(e)=>{
 setColor(e.target.value)
  }
  const handleSubmit=(e)=>{
 e.preventDefault()
 addColor(color)
  }
  return (
    <section className='container'>
      <h4>color generator</h4>
     <form className='color-form' onSubmit={handleSubmit}>
 <input type="color"   value={color}  onChange={handleClick}  />
  <input type="text"  value={color} placeholder='#f15025'  onChange={handleClick}/>
  <button className='btn' type='submit'style={{background:color}}>Submit</button>
     </form>
    </section>
  )
}

