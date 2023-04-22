import React from 'react';
import './App.css';
import NavBar from './component/navBar/NavBar';
import Body from './component/body/Body';

const App: React.FC = () => {
  return (
    <div className='app'>
        <NavBar />
      <div>
        <p>like that?</p>
        <Body />
        <a className='palette-link'
                href='https://colorhunt.co/palette/ffdcb6ecc9eec9a7eb9384d1'
            >
            Link for app color palette    
        </a>
      </div>
    </div>
  );
}

export default App;
