import React, { useState } from 'react';
import './Button.css';

type Props = {}

const Button: React.FC = (props: Props) => {

    const [number, setNumber] = useState<number>(0);

    const handleIncrementClick = () => {
        setNumber(number + 1)
    }

    const handleDecrementClick = () => {
        setNumber(number - 1)
    }

    return (
    <div className='button'>
        <p>The number is {number}.</p>
        <button onClick={handleIncrementClick}>
            Increment number
        </button>
        <p></p>
        <button onClick={handleDecrementClick}>
            Decrease number
        </button>
    </div>
    )
}

export default Button