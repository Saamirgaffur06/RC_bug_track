// AboutUsPage.js
import React from 'react';
import './styles/About.css';

const Aboutus = () => {
  return (
    <div className="about-us-page">
      <header>
        <h1>About RC Bug Tracker</h1>
      </header>
      <main>
        <section className="content">
          <h2>Welcome to Bug Tracker</h2>
          <p>RC Bug Tracker is a powerful tool designed to help you track and manage software bugs effectively.</p>
          <p>Our mission is to provide teams with the tools they need to identify, prioritize, and resolve issues efficiently, ultimately improving software quality and user satisfaction.</p>
          <p>With RC Bug Tracker, you can streamline your bug tracking process, collaborate with team members, and deliver higher quality software products.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 RC Bug Tracker. All rights reserved.</p>
      </footer>
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

export default Aboutus;
