import  React,{ useState ,useContext} from "react";
import { Context } from "./appContext";
import "./styles/home.css"

  export const Home = ()=>{
    const {store, actions}= useContext(Context)
     const [merch, setMerch]= useState("")

   
   

    return(

      <div className="landing-container">
        
     
       {store.product.map((item,index)=>{
         console.log("im thei tem",item)
         return(
          <div className="container_head"key={index}>
          <div className="card_main">
            <h5 className="header_words">{item.title}</h5>
            <img className ="image"src={item.image}/>
          
              <div className="btn_button">
                  <button
                
                    className="style_button">
                    something else
                  </button>
              </div>
          </div>
      </div>


         )
       })}
         
    </div>
    )
  };