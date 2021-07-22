import  React,{ useState ,useContext,} from "react";
import { Context } from "./appContext";
import Slider from "./Slider";
import Sliders from "./Sliders";
import "./styles/home.css"


  export const Home = ()=>{
    const {store, actions}= useContext(Context)
    const [genLink, setGenLink]= useState("")
     
   
   

    return(
        
         

      <div className="landing-container">
        <div className="hero">
               
                <Slider slides={store.banners}/>
           
              
            
          
              
              
            </div>
      <div className="product_container">
     
     
       {store.product.map((item,index)=>{
         console.log("im the item",item)
         return(
          <div className="container_head"key={index}>
          <div className="card_main">
         
            <a href={item.link}>
            <img className="image_head"  alt="" src={item.image}/>
            </a>
            <label className="header_words">{item.title}</label>
          
            
          </div>
      </div>
      


         )
       })}
         

         </div>
         <div className="hero_jumbo">
               
                <Sliders sliders={store.hero}/>
           
              
            
          
              
              
            </div>
         <div className="product_container">
         
     
       {store.product1.map((item,index)=>{
         console.log("im the item",item)
         return(
          <div className="container_head"key={index}>
          <div className="card_main">
           
            <a href={item.link}>
            <img alt="" className="image_alex" src={item.image} />
            </a>
            <label className="header_words">{item.title}</label>
              
          </div>
      </div>
      


         )
       })}
        
         </div>
         <div className="product_container">
         
     {store.product2.map((item,index)=>{
       console.log("im the item",item)
       return(
        <div className="container_head"key={index}>
        <div className="card_main">
          <a href={item.link}>
          <img alt="" className ="image_product_1"src={item.image}/>
          </a>
          <label className="header_words">{item.title}</label>
         
        </div>
    </div>
    


       )
     })}
       
       </div>
     
       
    
       
         
       
         
       
         
       
         
       
         
         
    </div>
    
  
    )
  };