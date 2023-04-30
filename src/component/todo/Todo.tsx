import React, { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import axios from 'axios';

type Props = {}

interface ITodo {
createdAt: Date
createdBy: String
description: String
email: String
id: Number
priority: String
status: String
title: String
todoEndDate: String
todoStartDate: String

}

const Todo: React.FC = (props: Props) => {
    const [allTodos, setAllTodos] = useState<ITodo[]>([])
    const todoItemMap:
    {
      [id: number]:
      {
        id: number,
        title: String,
        description: string,
        createdBy: string
      }
    } = {};

    useEffect(() => {
        const getTodo = async () => {
            try {
                const {data} = await axios.get(`http://localhost:8080/api/todos`, {})
                setAllTodos(data)
            } catch (error) {
                
            }
        }
        getTodo()
    },[])

    console.log("all todos set", allTodos)

  return (
    <div>
        {allTodos.map((todoItem) => (
        <Card key={todoItem.id.toString()}>
          <h2>{todoItem.title}</h2>
          <p>Todo item ID: {todoItem.id.toString()}</p>
          <p>Description: {todoItem.description}</p>
          <p>Created by: {todoItem.createdBy}</p>
        </Card>
      ))}
    </div>
  )
}

export default Todo