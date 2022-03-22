import React from 'react';
import Logo from '../Logo';
import FormAddTask from '../FormAddTask';
import './style.css';

function App() {
  return (
    <div className="app">
      <div className="app-form-container">
        <Logo />
        <FormAddTask />
      </div>
    </div>
  );
}

export default App;
