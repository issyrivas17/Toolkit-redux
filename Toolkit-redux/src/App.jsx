
import logo from './logo.svg'
import './App.css'
import { useSelector, useDispatch} from 'react-redux' 

import {increment} from './store/slice/counter'

function App() {
  const {counter} = useSelector (state => state.counter) 
  const dispacth = useDispatch (); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        
          <button type="button" onClick={ () => dispacth (increment) () }>
            count is: {counter} 
          </button>
        
        
      </header>
    </div>
  )
}

export default App
