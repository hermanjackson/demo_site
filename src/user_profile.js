
import React, { useState, useEffect,  useRef, useContext } from "react";
import Popup from "./popup";
import {Value} from "react-router-dom"
import "./styles/user_profile.css"
import { FaCamera } from "react-icons/fa";
import { Context } from "./appContext"



export const UserProfile = () =>{
    const [imageUrl, setImageUrl] = useState("http://placehold.jp/350x350.png");
    const [photo, setPhoto] = useState("");
    const [buttonPopup, setButtonPopup] = useState(false);
    const [support, setSupport]= useState("")
    const {store, actions} =  useContext(Context) 

    const contactSuport = e =>{
        setSupport(support)
        console.log("hey its me")

    }
   
    const fileInput = useRef(null);
    useEffect(
		() => {
			if (photo !== "") {
				const reader = new FileReader();
				reader.onloadend = () => {
					// log to console
					// logs data:<type>;base64,wL2dvYWwgbW9yZ...
					setImageUrl(reader.result);
				};
				reader.readAsDataURL(photo);
			}
		},
		[photo]
	);

    return(
        <div className="user_container">
          <div className="user_jumbo_container">
              
              <FaCamera onClick={() => fileInput.current.click()} className="fas fa-camera" />
                
                  <img className="user_image" alt="" src={imageUrl} />
                  <input 
                    	ref={fileInput}
						onChange={e => setPhoto(e.target.files[0])}
						type="file"
						className="user_profile_image" >
                 
                  </input>
                  <h3 className="user_profile_name">user name</h3>
                
              <button onClick={()=>setButtonPopup(true)} type="button" className="user_btn">Contact Support</button>
             
              <Popup  trigger={buttonPopup} setTrigger={setButtonPopup} >
                  
               
                  <label for="text_area">to contact support enter complaint below</label>

                        <textarea
                         id="support"
                          name="support"
                           rows="4"
                            cols="50"
                            value={support}
                            onChange={e=> setSupport(e.target.value)}
                            >
                            
                        </textarea>
                        <button
                         type="submit"
                         className="submit_button"
                         onClick={contactSuport}
                         >Submit</button>


              </Popup>
              
              
                
             <div>
           

                 
             </div>
             
              
              
                     
                  
                  
              </div>
             
          </div>
        
    )
}