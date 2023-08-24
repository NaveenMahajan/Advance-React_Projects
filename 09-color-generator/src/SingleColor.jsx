import React from 'react'
import { toast } from 'react-toastify'

export default function SingleColor({ index, color }) {
  const { hex, weight } = color
const clickboard=async()=>{
if(navigator.clipboard){
try{
  await navigator.clipboard.writeText(`#${hex}`)
  toast.success('color copied to clickboard')
}catch(error){
  toast.error('Failed to copy color to clickboard')
}

}else{
toast.error('Clickkboard access not available')
}
}

  return (
    <article className='color' style={{ background: `#${hex}` }} onClick={clickboard}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  )
}
