import React, { useState } from "react";
import { Link } from "react-router-dom";


  const Registration = ({setIsRegistered}) =>{
    const[registrationDetails, setRegistrationDetails] = useState({
      username:"",
      password:""
    })
   const [erra, setErra] = useState({
    username:"",
    password: ""

  });
 
  const handleSubmit = (e) => {
    const {username, password, erra} = registrationDetails
    e.preventDefault();

    // Validate passwordnpm
    if (password.length < 8) {
            setErra({...erra, password:"tnjymjy,,u<8"})
          return;
    } else if (!/[A-Z]/.test(password)) {
      setErra("Password must contain at least one uppercase letter.");
      return;
    } else if (!/\d/.test(password)) {
      setErra("Password must contain at least one digit.");
      return;
    }

    // Save username and password to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Registration successful! You can now log in.");
    setIsRegistered(true);
    setErra("");
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setRegistrationDetails({... registrationDetails, username:e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" className="btn">
          Register
        </button>
        <p>
          Already have an account?
          <Link to = "/login" >click here </Link>
          to log in.
        </p>
      </form>
    </div>
  );

}



export default Registration;
