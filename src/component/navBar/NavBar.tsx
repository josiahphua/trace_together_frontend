import React from 'react';
import logo from '../../logo.svg';
import './NavBar.css';

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar