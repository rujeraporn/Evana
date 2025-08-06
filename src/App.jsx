import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;