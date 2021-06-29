import "./styles/signup.css"


export const SignUp = ()=>{
    return(
		<div className="form_wrapper">
        <div className="form-container">
        <form className="sign-up-form">
            <input type="text" className="form-inpit" placeholder="FULL NAME"/>
             <input type="email" className="form-inpit" placeholder="email address"/>
			 <input type="email" className="form-inpit" placeholder="password"/>
			 <input type="email" className="form-inpit" placeholder="confirm password"/>
            
            <button type="reset" className="user_button" >log in</button>
              
        </form>
        <div className="header">
            <h1>welcome to my page</h1>
        </div>
        <div className="x-btn">&#10005;</div>
        </div>


    </div>   
    )
};