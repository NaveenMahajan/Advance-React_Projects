import { useState } from "react";
import data from "./data";
const App = () => {
  const[count,setCount]=useState(1)
  const[value,setValue]=useState([])
  const  handleChange=(e)=>{
  e.preventDefault()
  setCount(e.target.value)
  }
  const handleForm=(e)=>{
     e.preventDefault()
   let amount = parseInt(count)
   setValue(data.slice(0,amount))

  }
  return(
    <section className="section-center">
   <h4 >TIRES OF BORING LOREM IPSUM</h4>
    <form className="lorem-form " onSubmit={handleForm}>
      <label htmlFor="amount">paragraphs:</label>
 <input  id="amount" type="number" value={count} onChange={handleChange} min={1} step={1} max={8}/>
  <button className="btn">Generate</button>
    </form>
    <article>
    {value.map((value,index)=>{
      return(
        <p key={index}>{value}</p>
      )
    })}
    </article>
    </section>
  )
};
export default App;
