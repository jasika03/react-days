import React, {useState} from 'react'

function Counter(){
  const[count, setCount] = useState(0);
  const increment = () =>{
    setCount(count+1);
  }
  const decrement= () => {
    setCount(count - 1);
  }
  return (
    <div style={{margin:'35vh'}}>
      <h1 style= {{textAlign: 'center'}}>COUNT: {count}</h1>
      <div class="d-grid gap-2 col-6 mx-auto">
    <button onClick={increment} type="button" class="btn btn-outline-primary">INCREMENT</button>
    <button onClick={decrement} type="button" class="btn btn-outline-primary">DECREMENT</button>
  </div>
      
    </div>
    
  );
}
export default Counter

