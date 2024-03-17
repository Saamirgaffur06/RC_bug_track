import React, { useState } from 'react';
import './styles/Proman.css';

const CustomerWidget = ({ status, url, credentials, testers }) => {
  const [selectedTesters, setSelectedTesters] = useState([]);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const handleWidgetClick = () => {
    setIsPopUpVisible(true);
  };

  const handleSendRequest = () => {
    // Send request with selected testers
    console.log('Selected testers:', selectedTesters);
    setIsPopUpVisible(false);
  };

  const handleTesterCheckboxChange = (tester) => {
    const isAlreadySelected = selectedTesters.some(
      (selectedTester) => selectedTester.id === tester.id
    );

    if (isAlreadySelected) {
      setSelectedTesters(selectedTesters.filter((t) => t.id !== tester.id));
    } else {
      setSelectedTesters([...selectedTesters, tester]);
    }
  };
  

  return (
    <div className="widget-container"> {/* Apply CSS class for the widget container */}

      <button className="widget-button" onClick={handleWidgetClick}>{status}</button> {/* Apply CSS class for the widget button */}

      {isPopUpVisible && (
        <div className="popup"> {/* Apply CSS class for the popup */}
          <h2>URL: {url}</h2>
          <h3>Credentials: {credentials}</h3>

          <h4>Assign testers:</h4>
          <ul>
            {testers.map((tester) => (
              <li key={tester.id}>
                <input
                  type="checkbox"
                  checked={selectedTesters.some(
                    (selectedTester) => selectedTester.id === tester.id
                  )}
                  onChange={() => handleTesterCheckboxChange(tester)}
                />
                {tester.name}
              </li>
            ))}
          </ul>

          <button onClick={handleSendRequest}>Send Request</button>
        </div>
      )}
    </div>
  );
};

const testers = [
  { id: 1, name: 'Tester 1' },
  { id: 2, name: 'Tester 2' },
  { id: 3, name: 'Tester 3' },
];

const Proman = () => {
  const customerWidgets = [
    { id: 1, status: 'CUSTOMER 1', url: 'https://example.com/1', credentials: 'creds1' },
    { id: 2, status: 'CUSTOMER 2', url: 'https://example.com/2', credentials: 'creds2' },
    { id: 3, status: 'CUSTOMER 3', url: 'https://example.com/3', credentials: 'creds3' },
  ];

  return (
    <div>
            <h1>RC Bug Tracker</h1>
      <div className="widgets-container"> {/* Apply CSS class for the widgets container */}
        {customerWidgets.map((widget) => (
          <CustomerWidget
            key={widget.id}
            status={widget.status}
            url={widget.url}
            credentials={widget.credentials}
            testers={testers}
          />
        ))}
      </div>
      
      <div className="dashboard">
        <ul className="menu">
        <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">SignUp</a></li>
        </ul>
      </div>

      <footer>
        <p>&copy; 2024 RC Bug Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Proman;
