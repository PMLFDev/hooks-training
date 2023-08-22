import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MultipleCustomHooks } from './Examples/MultipleCustomHooks'
//import { FormWithCustomHooks } from './useEffect/FormWithCustomHooks'
//import { SimpleForm } from './useEffect/SimpleForm'
//import { HookaApp } from './HookaApp'
//import { Counter } from './Hooks/Counter'
//import { CounterWithCustomHooks } from './Hooks/CounterWithCustomHooks';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
)
