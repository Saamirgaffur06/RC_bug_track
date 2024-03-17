// BugTrackerHome.js
import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="bug-tracker-home">
      <header>
        <h1>Welcome to  RC Bug Tracker</h1>
      </header>
      <main>
        <section className="hero">
          <h2>Track and manage bugs effectively</h2>
          <p>Stay organized and prioritize tasks with our bug tracking tool.</p>
          <a href="/Login" className="btn-primary">Get Started</a>
        </section>
      </main>
      <footer>
        <p>&copy; 2024  RC Bug Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
