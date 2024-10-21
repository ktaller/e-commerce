import { useState } from 'react';

function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored username and password
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Simple validation
    if (username === "" || password === "") {
      setError("Username and password are required.");
    } else if (username !== storedUsername || password !== storedPassword) {
      setError("Invalid username or password.");
    } else {
      setError("");
      alert("Login successful!");
      // Reset form fields
      setUsername("");
      setPassword("");
    }
  };

  // Return the state values and functions that the component needs
  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleSubmit
  };
}

export default useLogin;
