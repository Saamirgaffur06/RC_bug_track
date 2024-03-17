// Login.js
import React, { useState } from 'react';
import './styles/Login.css';

const Login = () => {
  const [userData, setUserData] = useState({
    role: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    // Here you can perform actions like authentication
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
            <option value="user">User</option>
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
