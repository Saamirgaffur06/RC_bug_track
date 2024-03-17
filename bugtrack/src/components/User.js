import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/User.css';

function User() {
  const [username, setUsername] = useState('');
  const [url, setUrl] = useState('');
  const [credentials, setCredentials] = useState('');
  const [pendingRequests, setPendingRequests] = useState(0);
  const [pendingData, setPendingData] = useState({ url: '', credentials: '' });
  const [showPending, setShowPending] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserStatus();
  }, []);

  const fetchUserStatus = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/status');
      setUserData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPendingRequests(prevPendingRequests => prevPendingRequests + 1);
    setPendingData({ url, credentials });

    try {
      await axios.put('http://localhost:5000/api/update', { username, url, credentials });
      setPendingRequests(prevPendingRequests => prevPendingRequests - 1);
      setShowPending(true);
      fetchUserStatus(); // Refresh user status after updating
    } catch (error) {
      console.error('Error:', error);
      setPendingRequests(prevPendingRequests => prevPendingRequests - 1);
      setShowPending(true);
    }
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
        <label htmlFor="username" className="form-label">Username:</label>
        <input
          type="text"
          id="username"
          className="form-control mb-3"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
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
