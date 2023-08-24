import Form from './Form'
import Colorlist from './Colorlist'
import Values from 'values.js'
import { useState } from 'react';
import {ToastContainer,toast} from 'react-toastify'
const App = () => {
  const[colors,setColors]=useState( new Values('#66ffff').all(10))
//  
//  toast.success("succesfull")
 const addColor=(color)=>{
 try{
const newColors=new Values(color).all(10)
setColors(newColors)
 }catch(error){
toast.error(error.message)
 }
 }


  return (
    <>
   <Form addColor={addColor}/>
   <Colorlist colors={colors}/>
   <ToastContainer position='top-center'/>
    </>
  )
};
export default App;
