import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.jsx"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
    <div className="container-fluid">
      <NavBar/>
      <Routes>
          <Route path="/" element={<ItemListContainer greeting = "Bienvenidos a Deco Hogar" />} />
          <Route path="/categoria/:cid" element={<ItemListContainer />} />
          <Route path="/detail/:pid" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App
