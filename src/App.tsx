import React from 'react';
import './App.css';
import NavBar from './component/navBar/NavBar';
import Body from './component/body/Body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './component/todo/Todo';
import Calendar from './component/calendar/Calendar';

const App: React.FC = () => {
  return (
    <div className='app'>
      
      <header>
        <NavBar />
      </header>

      <body>
        <p>like that?</p>
        <Body />
        <BrowserRouter>
          <Routes>
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/todo' element={<Todo />} />
          </Routes>
        </BrowserRouter>
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
