// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './styles/Login.css';

const Login = () => {
  const [userData, setUserData] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', userData);
      console.log('Response:', response.data);

      // Redirect based on user role
      if (response.data.role === 'user') {
        window.location.href = '/user';
      } else if (response.data.role === 'admin') {
        window.location.href = '/proman';
      } else if (response.data.role === 'tester') {
        window.location.href = '/tester';
      }
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={userData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">ProjectManger</option>
            <option value="user">Customer</option>
            <option value="tester">Tester</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <br></br>
      <a href="/Signup" >If you don't have Account ?</a>
      <div className="dashboard">
        <ul className="menu">
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
