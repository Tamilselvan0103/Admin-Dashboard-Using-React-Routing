import React from "react";
import "./pages.css";

function Loginpages() {
  return (
   
    <div className="registermain">
      <Login />
      </div> 
    
  );
}

export default Loginpages;

function Login() {
  return (
    <div className="logincards">
      <div>
        <h6>Welcome Back!</h6>
      </div>
      <div className="input">
        <input type="text" className="mail" placeholder="Enter email address" />
        <br />
        <input type="password" className="mail" placeholder="Password" />
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
  );
}
