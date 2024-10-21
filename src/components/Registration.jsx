import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = ({ setIsRegistered }) => {
  const [registrationDetails, setRegistrationDetails] = useState({
    username: "",
    password: ""
  });

  const [erra, setErra] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = registrationDetails;

    // Validate password
    if (password.length < 8) {
      setErra({ ...erra, password: "Password must be at least 8 characters." });
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErra({ ...erra, password: "Password must contain at least one uppercase letter." });
      return;
    } else if (!/\d/.test(password)) {
      setErra({ ...erra, password: "Password must contain at least one digit." });
      return;
    }

    // Clear any previous errors
    setErra({ username: "", password: "" });

    // Save username and password to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Registration successful! You can now log in.");
    setIsRegistered(true);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "#f0f0f0"
      }}
    >
      <div
        className="card p-4"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#d8d4d4",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={registrationDetails.username}
              onChange={(e) =>
                setRegistrationDetails({
                  ...registrationDetails,
                  username: e.target.value
                })
              }
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={registrationDetails.password}
              onChange={(e) =>
                setRegistrationDetails({
                  ...registrationDetails,
                  password: e.target.value
                })
              }
              required
            />
          </div>

          {erra.password && <p style={{ color: "red" }}>{erra.password}</p>}

          <button type="submit" className="btn btn-dark w-100">
            Register
          </button>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Click here</Link> to log in.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
