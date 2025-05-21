import React from 'react';
import './App.css';
import DfaNfaVisualizer from './Canvas';
import { FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="title">DFA <br/> Visualizer</h1>
      </header>
      <div className="visualizer-container">
        <DfaNfaVisualizer />
      </div>
    </div>
  );
}

export default App;
