import React from 'react'
import './Body.css';
import Calendar from '../calendar/Calendar';
import Todo from '../todo/Todo';
import { Route } from 'react-router-dom';

type Props = {}

const Body: React.FC = (props: Props) => {
  return (
    <div className='body'>
        <h2>This is the body</h2>
        <p>This will be where the components will render.</p>
        <p>Currently, a calendar will be on the left.</p>
        <Calendar />
        <p>And the todo list stuffs will be on the right.</p>
        <Route path='/todo'>
          <Todo />
        </Route>
    </div>
  )
}

export default Body