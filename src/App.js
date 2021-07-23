import './App.css';
import {petIncrement, petDecrement} from "./actions"
import {useSelector, useDispatch} from "react-redux"

function App() {
  const petCounter = useSelector((state) => state.petCounter)
  const petFavorite = useSelector((state) => state.petFavorite)
  const dispatch = useDispatch() 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Redux Crash Course 2021</h1>
        <button onClick={()=> dispatch(petIncrement(2))}>Add pet</button>
        <button onClick={()=> dispatch(petDecrement())}>Remove pet</button>
        <p>petCounter {petCounter}</p>
        <p>number of favorite pets so far {petFavorite}</p>
      </header>
    </div>
  );
}

export default App;
