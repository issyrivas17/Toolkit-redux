/* eslint-disable */

import { useSelector, useDispatch} from 'react-redux' 

import logo from './logo.svg'
import './App.css'


import {decrement, increment, incrementByAmount} from './store/slice/counter'

function App() {
  const {counter} = useSelector (state => state.counter) 
  const dispacth = useDispatch (); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>count is: {counter} </p>
        
          <button type="button" onClick={ () => dispacth (increment () ) }>
            Increment 
          </button> 

          <button type="button" onClick={ () => dispacth (incrementByAmount () ) }>
            IncrementBy
          </button> 

          <button type="button" onClick={ () => dispacth (decrement () ) }>
            Decrement 
          </button> 
        
        
      </header>
    </div>
  )
}

export default App 
