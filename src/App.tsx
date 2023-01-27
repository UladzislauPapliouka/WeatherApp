import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SettingsModal from './Components/SettingsModal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SettingsModal isOpen onClose={() => { console.log('Modal try to close'); }} />
    </div>
  );
}

export default App;
