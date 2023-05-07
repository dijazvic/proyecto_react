import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.jsx"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartContextProvider } from './components/Context/CartContext'
import CartContainer from './components/CartContainer/CartContainer'

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="app">
          <NavBar/>
          <Routes>
              <Route path="/" element={<ItemListContainer greeting = "Bienvenidos a Deco Hogar" />} />
              <Route path="/categoria/:cid" element={<ItemListContainer greeting = "Bienvenidos a Deco Hogar" />} />
              <Route path="/detail/:pid" element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
