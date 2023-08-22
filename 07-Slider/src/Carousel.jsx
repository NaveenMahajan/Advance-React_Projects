import { useState } from 'react'
import {shortList,longList,list} from './data'
import { AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
const Carousel =()=>{
 const[people,setPeople]=useState(list)
const [currentperson,setCurrentPerson]=useState(0)
const prev =()=>{
setCurrentPerson((oldperson)=>{
    const result = (oldperson-1 +people.length)%people.length
    return result
})
}
const Next =()=>{
   setCurrentPerson((oldperson)=>{
    const result = (oldperson+1)%people.length
    return result
})
}
 return(
    <div className="slider-container">
        {people.map((people,person)=>{
         const{id,name,image,title,quote}=people
        return(
                <div className='slide' style={{transform: `translateX(${100 * (person-currentperson)}%)`}} key={id}>
                    <img className='person-img' src={image} alt="" />
                    <h3 className='name '>{name}</h3>
                    <h4 className='title'>{title}</h4>
                    <p className='text'>{quote}</p>
                    <FaQuoteRight className='icon'/>
                
                <button className='prev'onClick={prev}><AiFillCaretLeft/></button>
                <button className='next' onClick={Next} ><AiFillCaretRight/></button>
                </div>
                )
        })}
    </div>

 )

}
export default Carousel