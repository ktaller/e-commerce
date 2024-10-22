import React from "react";
import { Link } from "react-router-dom";
import '../components/Login.css';
import useLogin from "../hooks/useLogin";

const Login = () => {
  // Destructure values from the useLogin hook
  const { username, setUsername, password, setPassword, error, handleSubmit } = useLogin();

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

        <button type="submit" className="butn">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/registration">Click here</Link> to register.
        </p>
      </form>
    </div>
  );
};

export default Login;
