import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="main-header__title">
        <Link to="/">
          Teachers Helping Teachers
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to="/lessons">
              Lessons
            </Link>
          </li>
          <li className="main-nav__item main-nav__item--cta">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="main-nav__item main-nav__item--cta">
            <Link to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
