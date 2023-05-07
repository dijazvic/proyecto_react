import React from "react"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { useCartContext } from "../Context/CartContext"



function NavBar () {
  const {cantidadTotal} = useCartContext()
    return (
      <header className="header">
      <Link className="navbar-brand" to="/">
        <div className="logo-container">
          <img src="./src/assets/logo.jpg" alt="logo" />
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
              {cantidadTotal() >0 && cantidadTotal()}
              <CartWidget/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    )
}

export default NavBar
