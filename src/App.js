import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
