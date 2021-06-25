import "./styles/signup.css"


export const SignUp = ()=>{
    return(
        <div className="form-content-right mx-auto">
           	<form className="form">
				<h1>Sign Up</h1>

				<div className="form-input">
					<label htmlFor="username" className="form-label">
						username
					</label>
					<input
						id="username"
						type="text"
						name="username"
						className="username"
						placeholder="Enter your username"
					/>
				</div>

				<div className="form-input">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input id="email" type="email" name="email" className="email" placeholder="Enter your email" />
				</div>

				<div className="form-input">
					<label htmlFor="password" className="form-label">
						password
					</label>
					<input
						id="password"
						type="password"
						name="password"
						className="password"
						placeholder="Enter your password"
					/>
				</div>

				<div className="form-input">
					<label htmlFor="password2" className="form-label-confirm">
						confirm password
					</label>
					<input
						id="password2"
						type="password"
						name="password2"
						className="password2"
						placeholder="confirm your password"
					/>
				</div>
				<div className="container">
					<button className="form-input-btn" type="submit">
						Sign up
					</button>
					<span className="form-input-login">
						already have an account? login <a href="#signin">here</a>
					</span>
				</div>
			</form>
        </div>
    )
};