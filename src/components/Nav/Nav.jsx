import React from 'react'
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className="left">
        <h3>JobHuntApp.</h3>
      </div>
      <div className="right">
        <p>Home</p>
        <p>Categories</p>
        <p>Create Job</p>
        <p>Register</p>
      </div>
    </div>
  )
}

export default Nav