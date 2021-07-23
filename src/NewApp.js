import './App.css';
import {petFavIncrement, petFavDecrement} from "./actions"
import {useSelector, useDispatch} from "react-redux"

function App() {
  const petCounter = useSelector((state) => state.petCounter)
  const petFavorite = useSelector((state) => state.petFavorite)
  const dispatch = useDispatch() 

  return (
    <div className="App">
      <header className="App-header">
        <h1>New component - Add Pet to Favorite</h1>
        <button onClick={()=> dispatch(petFavIncrement(2))}>Add pet</button>
        <button onClick={()=> dispatch(petFavDecrement())}>Remove pet</button>
        <p>petCounter {petCounter}</p>
        <p>number of favorite pets so far {petFavorite}</p>
      </header>
    </div>
  );
}

export default App;
