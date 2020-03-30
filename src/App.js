import React from 'react';
import Main from './components/Main';
import ParticlesBg from 'particles-bg';
import './App.css';
export default function App() {
  return (
    <div className="Main-Container">
      <Main />
      <ParticlesBg type="cobweb" color="#ffd699" num={150} bg={true} />
    </div>
  );
}
