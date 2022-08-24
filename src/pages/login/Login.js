import "./login.css"
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Socialize</h3>
                        <span className="loginDesc">Connect with friends and the world around you on Socialize</span>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input placeholder="Email" className="loginInput" />
                            <input placeholder="Password" className="loginInput" />
                            <button className="loginButton">Log In</button>
                            <span className="loginForgot">Forgot Password</span>
                            <button className="loginRegisterButton"><Link to="/register">Create a New Account</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
