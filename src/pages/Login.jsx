import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { HomePage } from './HomePage.jsx'

const Login = () => {

  const [formData, setFormdata] = useState({firstName:"", lastName:"", email:"", password:""})

  const handleFormData = (e) => {
    const { name, value } = e.target
    setFormdata((prevState) => ({...prevState, [name]: value}))
    console.log(formData)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault
  }

  const handleSignUp = () => {
    formData.email=='dharundayaal@gmail.com'&&formData.password=='123' ?
      useNavigate(<HomePage />) : alert("Invalid Credentials")
  }

  return (
    <>
      <div className="background">
        <div className="form-section">
          <form onClick={handleFormSubmit}>
            <h2>
              Sign Up
            </h2>
            <p>
              Already a member? <span>Log In</span>
            </p>
            <div className="row">
              <div className="col-6">
                <label htmlFor="first-name">First name</label>
                <input type="text" placeholder="Enter first name" onChange={handleFormData} required />
              </div>
              <div className="col-6 h-25">
                <label htmlFor="last-name">Last name</label>
                <input type="text" placeholder="Enter last name" onChange={handleFormData} required />
              </div>
            </div>
            <div className="email">
              <label htmlFor="email-address">Email</label>
              <input type="email" placeholder="Enter your Email" onChange={handleFormData} required />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Enter your password" onChange={handleFormData} required />
            </div>
            <button type="submit" onClick={handleSignUp}>Sign up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
