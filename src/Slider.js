import React, {useContext , useState, useEffect, useRef} from "react";
import {FaAngleDoubleRight} from 'react-icons/fa';
import{FaAngleDoubleLeft} from 'react-icons/fa';
import { Context } from "./appContext";
import "./styles/slider.css"

function Slider(slides){
    const [current, setCurrent] = useState(0);
  
    const lenght = slides.lenght
    const {store, actions}= useContext(Context);
    const timeout = useRef(null);
    const nextSlide = ()=>{
        setCurrent(current === lenght - 1 ? 0 : current + 1)
    };
    useEffect(()=>{
        const nextSlide =()=>{
            setCurrent(current=> (current === lenght - 1 ? 0 : current + 1))

        }
        timeout.current = setTimeout(nextSlide, 3000);
        return function (){
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    },[current, lenght])
    const prevSlide = ()=>{
        setCurrent(current === 0  ? lenght  - 1 : current - 1)
    }
    if(Array.isArray(slides) || slides.lenght <= 0){
        return null
    }
    return (
        <div className="slider">
           
            <FaAngleDoubleLeft type="button" className="slider_left_btn" onClick={prevSlide}/ >
            < FaAngleDoubleRight  type="button" className="slider_btn" onClick={nextSlide}/>
        
            {store.banners.map((item, index)=>{
                return(
                    <div className={index === current ? "slide active" : "slide" } key={index}>
                        {index === current && (
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
export default Slider