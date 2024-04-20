import React from "react";
import './style.css';
import facebookIcon from '../../asset/icons/facebook.png';
import googlePlusIcon from '../../asset/icons/googlePlus.png';
import githubIcon from '../../asset/icons/github.png';
import linkedinIcon from '../../asset/icons/linkedin.png';

const Login = () => {
    return (
        <div className="login-container">
            <div className="main">
                <div className="header" >
                    <span tabIndex={0}>x</span>
                </div>
                <div className="body">

                    <div className="heading">
                        <h1>Sign In</h1>
                    </div>

                    <div className="signin-options">
                        <ul>
                            <li className="list-item">
                                <a href="#"><img src={googlePlusIcon}/></a>
                            </li>
                            <li className="list-item">
                                <a href="#"><img src={facebookIcon}/></a>
                            </li>
                            <li className="list-item">
                                <a href="#"><img src={githubIcon}/></a>
                            </li>
                            <li className="list-item">
                                <a href="#"><img src={linkedinIcon}/></a>
                            </li>
                        </ul>
                    </div>

                    <div className="helpText">
                        <span>or use your email password</span>
                    </div>

                    <div className="inputTextField">
                        <input type="text" className="email" required/>
                        <label htmlFor="">Email</label>
                    </div>

                    <div className="inputTextField">
                        <input type="password" className="password" required/>
                        <label htmlFor="">Password</label>
                    </div>

                    <div className="links">
                        <a href="#" className="forgetPassword" id="forgetPassword">Forget your password?</a>
                        <hr/>
                        <a href="#" className="register" id="register">New User? Sign Up</a>
                    </div>

                    <div className="buttonField">
                        <button>SIGN IN</button>
                    </div>
                </div>
                <div className="footer" >
                    <span>Shop 'Til You Drop…But Don't Cry</span>
                </div>
                {/* <div className="right">
                    <div className="title">
                        <h1>Elite Commerce Solutions</h1>
                    </div>

                    <div className="description">
                        <span>Shop 'Til You Drop…But Don't Cry</span>
                    </div>


                </div> */}
            </div>
        </div>
    );
};

export default Login;