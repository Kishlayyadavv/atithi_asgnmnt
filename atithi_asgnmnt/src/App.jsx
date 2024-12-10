import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Card from './components/Card';
import Button from './components/Button';
import List from './components/List';
import './Navbar.css';
import './Footer.css';
import './components/Card.css';
import './components/Button.css';
import './components/List.css';
import './App.css'; // Import the new CSS file

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const names = ['John Doe', 'Alpha', 'Beta'];

  return (
    <div className="app-container">
      <div className="app-content">
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <header className="app-header">
          {/* <h1>Kishlay Yadav</h1> */}
        </header>
        <main>
          <Card 
            image="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Sample Card"
            description="This is a sample card component."
          />
          <Button 
            text="Click me!" 
            onClick={handleClick}
          />
          <List items={names} />
        </main>
        <footer className="footer">
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} AtithiGo. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
