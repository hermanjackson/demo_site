import React, {useContext , useState, useEffect, useRef} from "react";
import {FaAngleDoubleRight} from 'react-icons/fa';
import{FaAngleDoubleLeft} from 'react-icons/fa';
import { Context } from "./appContext";
import "./styles/sliders.css"


function Sliders(sliders){
    const [currents, setCurrents] = useState(0);
  
    const lenghts = sliders.lenght
    const {store, actions}= useContext(Context);
    const timeout = useRef(null);
    const nextSlide = ()=>{
        setCurrents(currents === lenghts - 1 ? 0 : currents + 1)
    };
    useEffect(()=>{
        const nextSlide =()=>{
            setCurrents(currents=> (currents === lenghts - 1 ? 0 : currents + 1))

        }
        timeout.current = setTimeout(nextSlide, 3000);
        return function (){
            if(timeout.currents) {
                clearTimeout(timeout.currents)
            }
        }
    },[currents, lenghts])
    const prevSlide = ()=>{
        setCurrents(currents === 0  ? lenghts  - 1 : currents - 1)
    }
    if(Array.isArray(sliders) || sliders.lenghts <= 0){
        return null
    }
    return (
        <div className="slider">
           
            <FaAngleDoubleLeft type="button" className="sliders_left_btn" onClick={prevSlide}/ >
            < FaAngleDoubleRight  type="button" className="sliders_btn" onClick={nextSlide}/>
        
            {store.hero.map((item, index)=>{
                return(
                    <div className={index === currents ? "slide active" : "slide" } key={index}>
                        {index === currents && (
                            <a className="image_link" href={item.link}>
                             <img className="images"  alt="" src={item.image}/>
                             </a>

                        )}
        
                    
                       
                    </div>
                )
            })}
    
       
               

            
        </div> 
        
    ) 
}
export default Sliders