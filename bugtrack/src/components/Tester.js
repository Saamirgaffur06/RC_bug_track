import React, { useState } from 'react';
import './styles/Tester.css';

function Tester() {
  const [formData, setFormData] = useState({
    url: '',
    credentials: ''
  });
  const [submitted, setSubmitted] = useState(false); // State to track whether the form is submitted
  const [showBugDetailsForm, setShowBugDetailsForm] = useState(false); // State to track whether to show bug details form
  const [showBugStatusForm, setShowBugStatusForm] = useState(false); // State to track whether to show bug status form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to handle form submission, e.g., send data to backend
    console.log('Form submitted with data:', formData);
    setSubmitted(true); // Set submitted state to true when form is submitted
  };

  const handleCheckClick = () => {
    setShowBugDetailsForm(true); // Show bug details form when "Check" button is clicked
  };

  const handleOkClick = () => {
    setShowBugStatusForm(true); // Show bug status form when "Ok" button is clicked
  };

  if (showBugStatusForm) {
    return (
      <div className="container">
        <h1>Status</h1>
        
        {/* New form for bug status */}
        <form>
          <div className="form-group">
            <label htmlFor="bugName">Bug Name:</label>
            <input
              type="text"
              id="bugName"
              name="bugName"
              placeholder="Enter Bug Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bugStatus">Bug Status:</label>
            <input
              type="text"
              id="bugStatus"
              name="bugStatus"
              placeholder="Enter Bug Status"
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
  
  if (showBugDetailsForm) {
    return (
      <div className="container">
        <h1>New Bug</h1>
        
        {/* New form for bug details */}
        <form>
          <div className="form-group">
            <label htmlFor="bugName">Bug Name:</label>
            <input
              type="text"
              id="bugName"
              name="bugName"
              placeholder="Enter Bug Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bugFunction">Bug Function:</label>
            <textarea
              id="bugFunction"
              name="bugFunction"
              placeholder="Enter Bug Function"
              required
            ></textarea>
          </div>
          <button type="button" onClick={handleOkClick}>Ok</button>
        </form>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container">
        <h1>New Bug Form</h1>
        
        {/* Original form for URL and Credentials */}
        <form>
          <div className="form-group">
            <label htmlFor="url">URL:</label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="Enter URL"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="credentials">Credentials:</label>
            <input
              type="text"
              id="credentials"
              name="credentials"
              value={formData.credentials}
              onChange={handleChange}
              placeholder="Enter Credentials"
              required
            />
          </div>
          <button type="button" onClick={handleCheckClick}>Check</button>
        </form>
      
      </div>
    );
  }

  // Original form for URL and Credentials
  return (
    <div className="container">
      <h1>RC Bug Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="url">URL:</label>
          <input
            type="text"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Enter URL"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="credentials">Credentials:</label>
          <input
            type="text"
            id="credentials"
            name="credentials"
            value={formData.credentials}
            onChange={handleChange}
            placeholder="Enter Credentials"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>


      <div className="dashboard">
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">SignUp</a></li>
        </ul>
      </div>
    </div>
    
  );
}

export default Tester;