import { Link } from "react-router-dom";
import "./nav.css";
import { SignUp } from "./signup";
export const NavBar =()=>{
    return(
        <nav className="navbar">
			<div className="navbar__container">
				<h1 href="#home" id="navbar__logo">
                    <h1>logo</h1>
				</h1>
				<ul className="navbar__menu">
						<Link to={"signin/"}>
						<li className="navbar__item">
							<span href="#signin" className="navbar__links" id="home-page">
								signin
							</span>
						</li>
						</Link>
					
						<Link to={"about/"}>
						<li className="navbar__item">
							<span href="#about" className="navbar__links" id="about-page">
								About
							</span>
						</li>
						</Link>
				
					
						<li className="navbar__item">
							<span href="#shop" className="navbar__links" id="services-page">
								shop
							</span>
						</li>
	
						<Link to={"signup/"}>
						<li className="navbar__btn">
							<span href="signup" className="button" id="signup">
								Sign up
							</span>
						</li>
						</Link>
					
				</ul>
			</div>
		</nav>

        
    )
};

