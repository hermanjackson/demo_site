
import React, { useState, useEffect,  useRef } from "react";
import Popup from "./popup";
import "./styles/user_profile.css"



export const UserProfile = () =>{
    const [imageUrl, setImageUrl] = useState("http://placehold.jp/350x350.png");
    const [photo, setPhoto] = useState("");
    const [buttonPopup, setButtonPopup] = useState(false);
   
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
              
              <i onClick={() => fileInput.current.click()} className="fas fa-camera" />
                
                  <img className="user_image" alt="" src={imageUrl} />
                  <input 
                    	ref={fileInput}
						onChange={e => setPhoto(e.target.files[0])}
						type="file"
						className="user_profile_image" >
                 
                  </input>
                  <h3 className="user_profile_name">user name</h3>
                
              <button onClick={()=>setButtonPopup(true)} type="button" className="user_btn">something to say</button>
              <button type="button" className="user_btn"> something to say</button>
              <button type="button" className="user_btn"> something to say</button>
              <Popup  trigger={buttonPopup} setTrigger={setButtonPopup} >
                  
               
                  <label for="text_area">something to say</label>

                        <textarea id="w3review" name="w3review" rows="4" cols="50">
                            
                        </textarea>

              </Popup>
              
              
                
             <div>
           

                 
             </div>
             
              
              
                     
                  
                  
              </div>
             
          </div>
        
    )
}