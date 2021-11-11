import {useSelector, useDispatch} from 'react-redux';
import {incr, decr} from './actions';



function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1> Counter {counter}</h1>

      <button onClick = {()=> dispatch(incr(7))}>+</button>
      <button onClick = {() => dispatch(decr())}>-</button>

      {isLogged ? <h3>Valuable Information I should not see</h3>: ''}
    </div>
  );
}

export default App;
