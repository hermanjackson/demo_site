import useForm from "./useForm";
import validateInfo from "./validateinfo";
import "./styles/signup.css"


export const SignUp = ()=>{
    const {handleChange,values, handleSubmit, errors} = useForm(validateInfo)
    return(
		<div className="form_wrapper">
        <div className="form-container">
        <form className="sign-up-forms" onSubmit={handleSubmit}>
            <input
             name='username'
              type="text" 
              className="form-input"
               placeholder="FULL NAME"
               value={values.username}
               onChange={handleChange}
               />
               {errors.username && <p>{errors.username}</p>}
             <input
              name="email"
               type="email"
                className="form-input"
                 placeholder="email address"
                 value={values.email}
                 onChange={handleChange}
                 />
                    {errors.email && <p>{errors.email}</p>}
			 <input
              name="password"
               type="password"
                className="form-input"
                 placeholder="password"
                 value={values.password}
                 onChange={handleChange}
                 />
                {errors.password && <p>{errors.password}</p>}
			 <input
              name="password2"
               type="password"
                className="form-input"
                 placeholder="confirm password"
                 value={values.password2}
                 onChange={handleChange}
                 />
                    {errors.password2 && <p>{errors.password2}</p>}
            
            <button type="reset" className="user_button" onClick= {handleSubmit} >log in</button>
              
        </form>
        <div className="header">
            <h1>welcome to my page</h1>
        </div>
        <div className="x-btn">&#10005;</div>
        </div>


    </div>   
    )
};