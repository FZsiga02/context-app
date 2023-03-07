import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginBox from './components/LoginBox';
import NetworkError from './components/NetworkError';

function App() {
  return (
    <div className="App">
      <NetworkError />
      <LoginBox />
    </div>
  );
}

export default App;
