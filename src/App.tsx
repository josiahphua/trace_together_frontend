import React from 'react';
import './App.css';
import NavBar from './component/navBar/NavBar';
import Body from './component/body/Body';

const App: React.FC = () => {
  return (
    <div className='app'>
      
      <header>
        <NavBar />
      </header>

      <body>
        <p>like that?</p>
        <Body />
      </body>

      <footer>
        <a className='palette-link'
                  href='https://colorhunt.co/palette/ffdcb6ecc9eec9a7eb9384d1'
              >
              Link for app color palette    
        </a>
      </footer>
    </div>
  );
}

export default App;
