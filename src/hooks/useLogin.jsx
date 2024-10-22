import { useState, useContext } from 'react';
import { LoginContext } from '../context/LoginContext'; // Import the LoginContext

function useLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isLoggedIn, login, logout } = useContext(LoginContext); // Use LoginContext

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === '' || password === '') {
      setError('Username and password are required.');
    } else if (username !== storedUsername || password !== storedPassword) {
      setError('Invalid username or password.');
    } else {
      setError('');
      login(); // Set login status to true using LoginContext
      alert('Login successful!');
      setUsername('');
      setPassword('');
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleSubmit,
    isLoggedIn,
    logout,
  };
}

export default useLogin;
