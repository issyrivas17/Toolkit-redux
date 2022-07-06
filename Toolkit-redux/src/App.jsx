
import logo from './logo.svg'
import './App.css'
import { useSelector, useDispatch} from 'react-redux'

function App() {
  const {counter} = useSelector (state => state.counter) 
  const dispacth = useDispatch (); 


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {counter} 
          </button>
          <h2>Hello my name es chiki chiki chiki chiki </h2>
        
      </header>
    </div>
  )
}

export default App
