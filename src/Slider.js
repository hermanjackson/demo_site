import React, {useContext , useState} from "react";
import { Context } from "./appContext";
import "./styles/slider.css"

function Slider(slides){
    const [current, setCurrent] = useState(0);
  
    const lenght = slides.lenght
    const {store, actions}= useContext(Context);
    const nextSlide = ()=>{
        setCurrent(current === lenght - 1 ? 0 : current + 1)
    };
    const prevSlide = ()=>{
        setCurrent(current === 0  ? lenght  - 1 : current - 1)
    }
    if(Array.isArray(slides) || slides.lenght <= 0){
        return null
    }
    return (
        <div className="slider">
            <button type="button" className="slider_left_btn" onClick={prevSlide} >hey it me</button>
            <button type="button" className="slider_btn" onClick={nextSlide} >hey it me right</button>
           
            {store.banners.map((item, index)=>{
                return(
                    <div className={index === current ? "slide active" : "slide" } key={index}>
                        {index === current && (
                             <img className="image"  alt="" src={item.image}/>

                        )}
        
                    
                       
                    </div>
                )
            })}
    
       
               

            
        </div> 
        
    ) 
}
export default Slider