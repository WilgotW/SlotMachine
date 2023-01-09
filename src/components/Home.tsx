import React from 'react'
import { FC } from 'react'
import SlotMachine from './SlotMachine'

interface Person {
    name: string,
    age: number
}

const Home:FC<Person> = (props) => {
  return (
    <div>
        <h1>Casino App</h1>
        <h2>Welcome {props.name}</h2>
        {props.age >= 18 ?
            <SlotMachine />
            :
            <h1 style={{color: "red"}}>you must be 18 or over to play...</h1>
        }
    </div>
  )
}
export default Home;