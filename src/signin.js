
import "./styles/signin.css"

export const SignIn =()=>{
    return(
        <div className="form_wrapper">
        <div className="form-container">
        <form className="sign-up-form">
            <input type="text" className="form-inpit" placeholder="FULL NAME"/>
             <input type="email" className="form-inpit" placeholder="email address"/>
            
            <button type="reset" className="user_button" >log in</button>
              
        </form>
        <div className="header">
            <h1>welcome to my page</h1>
        </div>
        <div className="x-btn">&#10005;</div>
        </div>


    </div>   
    
    )
}