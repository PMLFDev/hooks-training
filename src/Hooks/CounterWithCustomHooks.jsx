import { useCounter } from "../Hooks2/useCounter"


export const CounterWithCustomHooks = () => {

    const {counter, increment, decrement, reset} = useCounter();



  return (
    <>

        <h1>Counter With Hook: {counter}</h1>

        <button className="btn btn-primary" onClick={ increment } >+1</button>
        <button className="btn btn-primary" onClick={ reset }>Reset</button>
        <button className="btn btn-primary" onClick={ decrement }>-1</button>
    
    </>
  )
}
