import React from 'react'

function Status({ isLoggedIn }) {
  return (
    <div>
      <h1>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</h1>
    </div>
  );
}
export default Status

