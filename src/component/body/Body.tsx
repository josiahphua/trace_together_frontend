import React from 'react'
import './Body.css';
import Calendar from '../calendar/Calendar';
import Todo from '../todo/Todo';

type Props = {}

const Body: React.FC = (props: Props) => {
  return (
    <div className='body'>
        <h2>This is the body</h2>
        <p>This will be where the components will render.</p>
        <p>Currently, a calendar will be on the left.</p>
        <p>And the todo list stuffs will be on the right.</p>
    </div>
  )
}

export default Body