import React, { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import axios from 'axios';

type Props = {}

interface ITodo {

}

const Todo: React.FC = (props: Props) => {
    const [allTodos, setAllTodos] = useState<any>("")

    useEffect(() => {
        // const getTodo = async () => {
        //     try {
        //         const data = await axios.get(`http://localhost:8080/api/todos`, {})
        //         console.log(data)
        //         setAllTodos(data)
        //         console.log(allTodos)
        //     } catch (error) {
                
        //     }
        // }
        // getTodo()
    })


  return (
    <div>
        <Card>
            This is the card for Todo?
        </Card>
    </div>
  )
}

export default Todo