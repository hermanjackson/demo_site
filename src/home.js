import  React,{ useState ,useContext} from "react";
import { Context } from "./appContext";
import "./styles/home.css"

  export const Home = ()=>{
    const {store, actions}= useContext(Context)
     
   
   

    return(
        
         

      <div className="landing-container">
        <div className="hero">
                <div className="hero_outer" id="home">
         
              <div className="card">
                <div className="card_body">
               
               <div className="card_head">
                 <img className="card_img" src="http://placehold.jp/100x100.png"/>
               </div>
               <div className="card_head">
                 <img className="card_img" src="http://placehold.jp/100x100.png"/>
               </div>
               <div className="card_head">
                 <img className="card_img" src="http://placehold.jp/100x100.png"/>
               </div>
               <div className="card_head">
                 <img className="card_img" src="http://placehold.jp/100x100.png"/>
               </div>
             </div>
             
              </div>
              </div>
          
              
              
            </div>
      <div className="product_container">
        <div className="card__container">
     
       {store.product.map((item,index)=>{
         console.log("im the item",item)
         return(
          <div className="container_head"key={index}>
          <div className="card_main">
            <h5 className="header_words">{item.title}</h5>
            <img className ="image"src={item.image}/>
          
            
          </div>
      </div>
      


         )
       })}
         </div>
         </div>
         <div className="product_container">
         <div className="card__container">
     
       {store.product1.map((item,index)=>{
         console.log("im the item",item)
         return(
          <div className="container_head"key={index}>
          <div className="card_main">
            <h5 className="header_words">{item.title}</h5>
            <img className ="image"src={item.image}/>
          
              
          </div>
      </div>
      


         )
       })}
         </div>
         </div>
         <div className="product_container">
         <div className="card__container">
     {store.product1.map((item,index)=>{
       console.log("im the item",item)
       return(
        <div className="container_head"key={index}>
        <div className="card_main">
          <h5 className="header_words">{item.title}</h5>
          <img className ="image"src={item.image}/>
        
         
        </div>
    </div>
    


       )
     })}
       </div>
       </div>
       <div className="product_container">
       <div className="card__container">
     
     {store.product3.map((item,index)=>{
       console.log("im the item",item)
       return(
        <div className="container_head"key={index}>
        <div className="card_main">
          <h5 className="header_words">{item.title}</h5>
          <img className ="image"src={item.image}/>
        
           
        </div>
    </div>
    


       )
     })}
       </div>
       </div>
       <div className="product_container">
       <div className="card__container">
     
     {store.product3.map((item,index)=>{
       console.log("im the item",item)
       return(
        <div className="container_head"key={index}>
        <div className="card_main">
          <h5 className="header_words">{item.title}</h5>
          <img className ="image"src={item.image}/>
        
           
        </div>
    </div>
    


       )
     })}
       </div>
       </div>
       <div className="product_container">
       <div className="card__container">
     
     {store.product3.map((item,index)=>{
       console.log("im the item",item)
       return(
        <div className="container_head"key={index}>
        <div className="card_main">
          <h5 className="header_words">{item.title}</h5>
          <img className ="image"src={item.image}/>
        
           
        </div>
    </div>
    


       )
     })}
       </div>
       </div>
       <div className="product_container">
       
       <div className="card__container">
     
     {store.product4.map((item,index)=>{
       console.log("im the item",item)
       return(
        <div className="container_head"key={index}>
        <div className="card_main">
          <h5 className="header_words">{item.title}</h5>
          <img className ="image"src={item.image}/>
        
           
        </div>
    </div>
    


       )
     })}
       </div>
       </div>
       <div className="product_container">
       <div className="card__container">
     
     {store.product5.map((item,index)=>{
       console.log("im the item",item)
       return(
        <div className="container_head"key={index}>
        <div className="card_main">
          <h5 className="header_words">{item.title}</h5>
          <img className ="image"src={item.image}/>
        
          
        </div>
    </div>
    


       )
     })}
       </div>
       </div>
       
         
       
         
       
         
       
         
       
         
       
         
         
    </div>
    
  
    )
  };