import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
      <Link className="navbar-brand" to='/'>Friend</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
          <Link className="nav-link active" to='/'>Friendapp</Link>
        <Link className="nav-link" to='/view'>ViewFriend</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav