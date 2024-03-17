// User.js

import React, { useState } from 'react';
import './styles/User.css';

function User() {
  const [url, setUrl] = useState('');
  const [credentials, setCredentials] = useState('');
  const [pendingRequests, setPendingRequests] = useState(0);
  const [pendingData, setPendingData] = useState({ url: '', credentials: '' });
  const [showPending, setShowPending] = useState(false); // State to toggle pending requests display
  const [showStatus, setShowStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPendingRequests(prevPendingRequests => prevPendingRequests + 1);
    setPendingData({ url, credentials });

    fetch('https://your-api-url.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url, credentials })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setPendingRequests(prevPendingRequests => prevPendingRequests - 1);
        setShowPending(true); // Display pending requests permanently
      })
      .catch((error) => {
        console.error('Error:', error);
        setPendingRequests(prevPendingRequests => prevPendingRequests - 1);
        setShowPending(true); // Display pending requests permanently
      });
  };

  return (
    <div className="App">

      <div className="dashboard">
        <ul className="menu">
        <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">SignUp</a></li>
        </ul>
        <h1>RC Bug Tracker</h1>
        <div className="status-container">
          <div className="status-button" onClick={() => setShowStatus(!showStatus)}>
            Status
          </div>
          {showStatus && (
            <div className="status-details">
              {pendingRequests > 0 ? (
                <>
                  <h3>Pending Requests:</h3>
                  <ul>
                    <li>URL: {pendingData.url}</li>
                    <li>Credentials: {pendingData.credentials}</li>
                  </ul>
                  <p>Please wait while we process your requests...</p>
                </>
              ) : (
                <p>No pending requests</p>
              )}
            </div>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="form-container mb-4">
        <label htmlFor="url" className="form-label">URL:</label>
        <input
          type="text"
          id="url"
          className="form-control mb-3"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <label htmlFor="credentials" className="form-label">Credentials:</label>
        <input
          type="text"
          id="credentials"
          className="form-control mb-3"
          value={credentials}
          onChange={(event) => setCredentials(event.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Submit
          {pendingRequests > 0 && <span> - {pendingRequests} pending...</span>}
        </button>
        {showPending && (
          <div className="pending-requests mt-3">
            Pending Requests:
            <ul className="list-unstyled">
              <li>URL: {pendingData.url}</li>
              <li>Credentials: {pendingData.credentials}</li>
            </ul>
            <span className="pending-message">Please wait while we process your requests...</span>
          </div>
        )}
      </form>
    </div>
  );
}

export default User;
