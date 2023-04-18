import React from "react"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"



function NavBar () {
  const brand = "./src/assets/logo.jpg"
    return (
      <header className="header">
      <Link className="navbar-brand" to="/">
        <div className="logo-container">
          <img src={brand} alt="logo" />
        </div>
      </Link>
      <nav className="navbar">
        <ul className="nav-container">
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/Ventanas">
              Ventanas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/Cortinas">
              Cortinas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/Puertas">
              Puertas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <CartWidget/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    )
}

export default NavBar