import React from 'react';
import logo from '../../logo.svg';
import './NavBar.css';
import { Button } from '@mui/material';


type Props = {}

type State = {}

const NavBar: React.FC = (props: Props, state: State) => {
  state = {}

  return(
    <nav className='navbar'>
      <div id='appName'>
        <img src={logo} className="App-logo1" alt="logo" />
        Trace Together UGLY. 
      </div>
      <div>
        <ul className='navlist'>
          <li>
            <Button href='/'>Home</Button>
          </li>
          <li>  
            <Button href='/showall'>Show</Button>
          </li>
          <li>
            <Button href='/calendar'>Calendar</Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar