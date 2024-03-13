import React from 'react';
import './App.css';
import EmailInput from './components/EmailInput';

function App() {

  const handleEmailChange = (email:string) => {
    console.log('Email change', email)
  }


  return (
    <div className="App">
      <EmailInput onEmailChange={handleEmailChange} />
    </div>
  );
}

export default App;
