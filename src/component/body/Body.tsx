import React from 'react'
import './Body.css';
import Todo from '../todo/Todo';
import Calendar from '../calendar/Calendar';

type Props = {}

const Body: React.FC = (props: Props) => {
  return (
    <div className='body'>
        <h2>This is the body</h2>
        <Todo />
        <Calendar />
        {/* <p>This will be where the components will render.</p>
        <p>Currently, a calendar will be on the left.</p>
        <p>And the todo list stuffs will be on the right.</p> */}
    </div>
  )
}

export default Body