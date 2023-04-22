import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/navBar/NavBar';
import Button from './component/button/Button';

const App = () => {
  return (
    <div className="App">
      <NavBar />
        <a className='palette-link'
            href='https://colorhunt.co/palette/ffdcb6ecc9eec9a7eb9384d1'
        >
        Link for app color palette    
        </a>
      <div>
        <Button />
      </div>
    </div>
  );
}

export default App;
