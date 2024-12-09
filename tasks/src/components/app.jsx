import React, {useState} from 'react'

function Button(){
  const handleclick = () =>{
    alert('Hiiee');
  }
  
  return (
    <div>
      <button onClick={handleclick}>Click!!</button>
    </div>
  );
}
export default Button

