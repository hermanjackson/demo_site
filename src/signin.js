
import "./styles/signin.css"

export const SignIn =()=>{
    return(
        <div className="main_form_container">
        <div className="form__container">
            <form className="sign-up-form">
                <input type="text" className="form__input" placeholder="FULL NAME" />
                <input type="email" className="form__input" placeholder="Email Address" />
                <p>Recieve Notifications for recipes</p>
                <label>No</label>
                <input type="checkbox" />
                <label>Yes</label>
                <button type="button">sign in here</button>
            </form>
            <div className="header">
                <h1>welcome to recipe depot</h1>
            </div>
        </div>
    </div>
    )
}