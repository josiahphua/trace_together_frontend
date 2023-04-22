import React from 'react'
import Button from '../button/Button'

type Props = {}

const Body: React.FC = (props: Props) => {
  return (
    <div className='body'>
        This is the body
        <Button />
    </div>
  )
}

export default Body