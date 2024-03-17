// Signup.js
import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './styles/Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData); // Send POST request to backend API
      console.log('Response:', response.data);
      window.location.href = '/Login';
    // Perform signup logic with formData
    
   }catch (error) {
     console.error('Error:', error.response.data);
   }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="role">User Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
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
            value={formData.name}
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
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <br></br>
      <a href="/Login" >Already have an Account ?</a>
      <div className="dashboard">
        <ul className="menu">
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Signup;
