import React from "react"
import "./styles/popup.css"


function Popup(props){


    return(props.trigger)? (
        <div className="popup">
    
            <div className="popup-inner" >
              
               
                <div className="x_btn" onClick={()=>props.setTrigger(false)}>&#10005;</div>
                {props.children}
              
            </div>
        </div> 
        
    ) :"";
}
export default Popup