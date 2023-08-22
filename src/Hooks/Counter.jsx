import React, { useState } from 'react'

export const Counter = () => {

    const [{counter1,counter2,counter3}, setcounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,

    })

    const increment = () => {
        setcounter({
            counter1: counter1 + 1,
            counter2,
            counter3,

        })
    }

  return (

<>
    <h1>Counter1: {counter1}</h1>
    <h1>Counter2: {counter2}</h1>
    <h1>Counter3: {counter3}</h1>


    <button className='btn' onClick={increment}>+1</button>
    <button className='btn' onClick={() => setcounter(counter1 - 1)}>-1</button>
</>
  )
}
