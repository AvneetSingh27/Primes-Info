import React from 'react'
import {Link}  from 'react-router-dom'
function Navbar() {
    return (
        <div>
          <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to='/'>
              PrimesInfo
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-2x" id="imdb-logo" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-2x" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
        </div>
    );
}

export default Navbar;
