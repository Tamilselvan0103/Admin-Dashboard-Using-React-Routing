import React from "react";
import "./register.css";


function Register(){
    return(
<div className="registermain">
 <LoginRegister/>
</div>

    )
}

export default Register;


function LoginRegister(){
    return(
        <div className="logincards1">
        <div>
          <h6>Create an Account!</h6>
        </div>
        <div className="input">
          <div className="name">
          <input type="text" className="mail" placeholder="Firstname" />
          <input type="text" className="mail" placeholder="Last Name" />
          </div>
          <br />
          <input type="password" className="mail" placeholder="Email Address" />
          <br/>
          <div className="psw">
          <input type="password" className="mail" placeholder="Password" />
          <input type="password" className="mail" placeholder=" Repeat Password" />
          </div>
          <br />
          <div className="checkbox">
            <input type="checkbox" />
            Remember Me
            <br />
          </div>
          <button className="btn5" id="lightblue">
            Login
          </button>
  
          <hr />
          <button className="btn5" id="red">
            <span className="letter">G</span>Login with Google
          </button>
          <button className="btn5" id="blue">
            <span className="letter">f</span>Login with Facebook
          </button>
        </div>
        <hr />
        <div className="footer">
          <p>Forgot Password?</p>
          <p>Create an Account!</p>
        </div>
      </div>

    )
}