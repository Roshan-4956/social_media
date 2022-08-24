import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Socialize</h3>
                        <span className="loginDesc">Connect with friends and the world around you on Socialize</span>
                    </div>
                    <div className="loginRight">
                        <div className="RegisterBox">
                            <input placeholder="Username" className="loginInput" />
                            <input placeholder="Email" className="loginInput" />
                            <input placeholder="Password" className="loginInput" />
                            <input placeholder="Confirm Password" className="loginInput" />
                            <button className="loginButton">Sign Up</button>
                            
                            <button className="loginRegisterButton"><Link to="/login">Log into Account</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
