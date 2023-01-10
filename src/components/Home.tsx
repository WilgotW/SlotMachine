import React from 'react'
import { FC } from 'react'
import SlotMachine from './SlotMachine'

interface IProps {
    name: string,
    age: number
}

const Home = ({name, age}: IProps) => {
  return (
    <div>
        <h1>Casino App</h1>
        <h2>Welcome {name}</h2>
        {age >= 18 ?
            <SlotMachine />
            :
            <h1 style={{color: "red"}}>you must be 18 or over to play...</h1>
        }
    </div>
  )
}
export default Home;